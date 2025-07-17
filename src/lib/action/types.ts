import type { $ZodFlattenedError, $ZodType, input, output } from "zod/v4/core";

export type FormActionState<TSchema extends $ZodType, TData> =
  | {
      status: "success";
      data: TData;
    }
  | {
      status: "error";
      fieldValues: input<TSchema>;
      fieldErrors?: $ZodFlattenedError<output<TSchema>>["fieldErrors"];
      error?: string;
    };

export type FormAction<TSchema extends $ZodType, TActionResult> = (
  prevState: FormActionState<TSchema, TActionResult> | null,
  formData: FormData,
) => Promise<FormActionState<TSchema, TActionResult>>;

export type ValidatedFormAction<TSchema extends $ZodType, TActionResult> = ({
  formData,
  input,
}: {
  formData: FormData;
  input: output<TSchema>;
}) => Promise<TActionResult>;
