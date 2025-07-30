import { z } from "zod";

import { isDevelopment } from "@/utils/environment";
import { isUndefined } from "@/utils/guards";
import { formDataToObject } from "@/utils/transformations";
import { tryAsync } from "@/utils/try-async";
import type {
  FormAction,
  FormActionOptions,
  FormActionServerError,
  FormActionValidationError,
  ValidatedFormAction,
} from "./types";

export function formAction<Schema extends z.core.$ZodType, Output>(
  schema: Schema,
  action: ValidatedFormAction<Schema, Output>,
  options: FormActionOptions<Schema, Output> = {},
): FormAction<Schema, Output> {
  return async (_prevState, formData) => {
    const rawValues = formDataToObject<z.input<Schema>>(formData);

    const validationResult = z.safeParse(schema, rawValues);
    if (!validationResult.success) {
      const error = {
        type: "validation",
        fieldErrors: z.flattenError(validationResult.error).fieldErrors,
      } satisfies FormActionValidationError<Schema>["error"];

      if (!isUndefined(options.onError)) {
        options.onError(error);
      }

      return {
        status: "error",
        fieldValues: rawValues,
        error,
      };
    }

    const actionResult = await tryAsync(
      action({
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
      const error = {
        type: "server",
        message: actionResult.error.message,
      } satisfies FormActionServerError<Schema>["error"];

      if (!isUndefined(options.onError)) {
        options.onError(error);
      }

      return {
        status: "error",
        fieldValues: rawValues,
        error,
      };
    }

    if (!isUndefined(options.onSuccess)) {
      options.onSuccess(actionResult.data);
    }

    return {
      status: "success",
      data: actionResult.data,
    };
  };
}
