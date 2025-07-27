import type { $ZodFlattenedError, $ZodType, input, output } from "zod/v4/core";

import { isNull } from "@/utils/guards";
import type { FormActionState } from "./types";

export function getFieldErrors<Schema extends $ZodType, TOutput = undefined>(
  state: FormActionState<Schema, TOutput> | null,
): $ZodFlattenedError<output<Schema>>["fieldErrors"] | undefined {
  if (isNull(state) || state.status === "success") return undefined;

  return state.fieldErrors;
}

export function getFieldValues<Schema extends $ZodType, TOutput = undefined>(
  state: FormActionState<Schema, TOutput> | null,
): Partial<input<Schema>> | undefined {
  if (isNull(state) || state.status === "success") return undefined;

  return state.fieldValues;
}
