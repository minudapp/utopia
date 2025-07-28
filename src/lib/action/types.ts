import type { $ZodFlattenedError, $ZodType, input, output } from "zod/v4/core";

export type FormActionSuccess<TData> = {
  status: "success";
  data: TData;
};

export type FormActionValidationError<TSchema extends $ZodType> = {
  status: "error";
  fieldValues: input<TSchema>;
  error: {
    type: "validation";
    fieldErrors: $ZodFlattenedError<output<TSchema>>["fieldErrors"];
  };
};

export type FormActionServerError<TSchema extends $ZodType> = {
  status: "error";
  fieldValues: input<TSchema>;
  error: {
    type: "server";
    message: string;
  };
};

export type FormActionError<TSchema extends $ZodType> =
  | FormActionValidationError<TSchema>
  | FormActionServerError<TSchema>;

export type FormActionState<TSchema extends $ZodType, TData> =
  | FormActionSuccess<TData>
  | FormActionError<TSchema>;

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
