import type { $ZodFlattenedError, $ZodType, input, output } from "zod/v4/core";

import type { FormActionState } from "./types";

export function getFieldErrors<Schema extends $ZodType, TOutput = undefined>(
  state: FormActionState<Schema, TOutput> | null,
): $ZodFlattenedError<output<Schema>>["fieldErrors"] | undefined {
  if (state === null || state.status === "success") return undefined;

  return state.fieldErrors;
}

export function getFieldValues<Schema extends $ZodType, TOutput = undefined>(
  state: FormActionState<Schema, TOutput> | null,
): Partial<input<Schema>> | undefined {
  if (state === null || state.status === "success") return undefined;

  return state.fieldValues;
}
