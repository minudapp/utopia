import { z } from "zod";

import { isDevelopment } from "@/utils/environment";
import { tryAsync } from "@/utils/try-async";
import { logger } from "./logger";

type FormActionState<TSchema extends z.core.$ZodType, TData> =
  | {
      success: true;
      data: TData;
    }
  | {
      success: false;
      fieldValues: z.core.input<TSchema>;
      fieldErrors?: z.core.$ZodFlattenedError<
        z.core.output<TSchema>
      >["fieldErrors"];
      error?: string;
    };

type FormAction<TSchema extends z.core.$ZodType, TActionResult> = ({
  formData,
  input,
}: {
  formData: FormData;
  input: z.core.output<TSchema>;
}) => Promise<TActionResult>;

export function formAction<TSchema extends z.core.$ZodType, TActionResult>(
  schema: TSchema,
  action: FormAction<TSchema, TActionResult>,
) {
  return async (
    _prevState: FormActionState<TSchema, TActionResult>,
    formData: FormData,
  ): Promise<FormActionState<TSchema, TActionResult>> => {
    const rawValues = Object.fromEntries(
      formData.entries(),
    ) as z.input<TSchema>;
    const parsedInput = z.safeParse(schema, rawValues);
    if (!parsedInput.success) {
      return {
        success: false,
        fieldErrors: z.flattenError(parsedInput.error).fieldErrors,
        fieldValues: rawValues,
      };
    }

    const [data, error] = await tryAsync(
      action({
        formData,
        input: parsedInput.data,
        // ctx: options.auth
        //   ? { user }
        //   : undefined,
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
        success: false,
        error: error.message,
        fieldValues: rawValues,
      };
    }

    return {
      success: true,
      data,
    };
  };
}
