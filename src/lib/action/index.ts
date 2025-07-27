import { z } from "zod";

import { logger } from "@/lib/logger";
import { isDevelopment } from "@/utils/environment";
import { tryAsync } from "@/utils/try-async";
import type { FormAction, ValidatedFormAction } from "./types";

export function formAction<TSchema extends z.core.$ZodType, TActionResult>(
  schema: TSchema,
  action: ValidatedFormAction<TSchema, TActionResult>,
): FormAction<TSchema, TActionResult> {
  return async (_prevState, formData) => {
    const rawValues = Object.fromEntries(
      formData.entries(),
    ) as z.input<TSchema>;
    const validationResult = z.safeParse(schema, rawValues);
    if (!validationResult.success) {
      return {
        status: "error",
        fieldErrors: z.flattenError(validationResult.error).fieldErrors,
        fieldValues: rawValues,
      };
    }

    const actionResult = await tryAsync(
      action({
        formData,
        input: validationResult.data,
      }),
      {
        onError(error) {
          if (isDevelopment()) {
            logger.error(error);
          }
        },
      },
    );

    if (!actionResult.success) {
      return {
        status: "error",
        error: actionResult.error.message,
        fieldValues: rawValues,
      };
    }

    return {
      status: "success",
      data: actionResult.data,
    };
  };
}
