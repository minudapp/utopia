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
    const parsedInput = z.safeParse(schema, rawValues);
    if (!parsedInput.success) {
      return {
        status: "error",
        fieldErrors: z.flattenError(parsedInput.error).fieldErrors,
        fieldValues: rawValues,
      };
    }

    const [data, error] = await tryAsync(
      action({
        formData,
        input: parsedInput.data,
      }),
      {
        onError(error) {
          if (isDevelopment()) {
            logger.error(error);
          }
        },
      },
    );

    if (error) {
      return {
        status: "error",
        error: error.message,
        fieldValues: rawValues,
      };
    }

    return {
      status: "success",
      data,
    };
  };
}
