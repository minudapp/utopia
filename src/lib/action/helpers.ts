import type { $ZodFlattenedError, $ZodType, input, output } from "zod/v4/core";

import { isNull } from "@/utils/guards";
import type { FormActionState } from "./types";

export function getFieldErrors<Schema extends $ZodType, Output>(
  state: FormActionState<Schema, Output> | null,
): $ZodFlattenedError<output<Schema>>["fieldErrors"] | undefined {
  if (
    isNull(state) ||
    state.status === "success" ||
    state.error.type === "server"
  )
    return undefined;

  return state.error.fieldErrors;
}

export function getFieldValues<Schema extends $ZodType, Output>(
  state: FormActionState<Schema, Output> | null,
): Partial<input<Schema>> | undefined {
  if (isNull(state) || state.status === "success") return undefined;

  return state.fieldValues;
}
