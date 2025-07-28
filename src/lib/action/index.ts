import { z } from "zod";

import { isDevelopment } from "@/utils/environment";
import { formDataToObject } from "@/utils/transformations";
import { tryAsync } from "@/utils/try-async";
import type { FormAction, ValidatedFormAction } from "./types";

export function formAction<TSchema extends z.core.$ZodType, TActionResult>(
  schema: TSchema,
  action: ValidatedFormAction<TSchema, TActionResult>,
): FormAction<TSchema, TActionResult> {
  return async (_prevState, formData) => {
    const rawValues = formDataToObject<z.input<TSchema>>(formData);

    const validationResult = z.safeParse(schema, rawValues);
    if (!validationResult.success) {
      return {
        status: "error",
        fieldValues: rawValues,
        error: {
          type: "validation",
          fieldErrors: z.flattenError(validationResult.error).fieldErrors,
        },
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
            console.error(error);
          }
        },
      },
    );

    if (!actionResult.success) {
      return {
        status: "error",
        fieldValues: rawValues,
        error: {
          type: "server",
          message: actionResult.error.message,
        },
      };
    }

    return {
      status: "success",
      data: actionResult.data,
    };
  };
}
