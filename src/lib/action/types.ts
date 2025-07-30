import type { $ZodFlattenedError, $ZodType, input, output } from "zod/v4/core";

export type FormActionSuccess<Output> = {
  status: "success";
  data: Output;
};

export type FormActionValidationError<Schema extends $ZodType> = {
  status: "error";
  fieldValues: input<Schema>;
  error: {
    type: "validation";
    fieldErrors: $ZodFlattenedError<output<Schema>>["fieldErrors"];
  };
};

export type FormActionServerError<Schema extends $ZodType> = {
  status: "error";
  fieldValues: input<Schema>;
  error: {
    type: "server";
    message: string;
  };
};

export type FormActionError<Schema extends $ZodType> =
  | FormActionValidationError<Schema>
  | FormActionServerError<Schema>;

export type FormActionState<Schema extends $ZodType, Output> =
  | FormActionSuccess<Output>
  | FormActionError<Schema>;

export type FormAction<Schema extends $ZodType, Output> = (
  prevState: FormActionState<Schema, Output> | null,
  formData: FormData,
) => Promise<FormActionState<Schema, Output>>;

export type ValidatedFormAction<Schema extends $ZodType, Output> = ({
  input,
}: {
  input: output<Schema>;
}) => Promise<Output>;

export type FormActionOptions<Schema extends $ZodType, Output> = {
  onSuccess?: (data: Output) => void;
  onError?: (error: FormActionError<Schema>["error"]) => void;
};
