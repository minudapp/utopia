import type { $ZodType } from "zod/v4/core";

import { isUndefined } from "@/utils/guards";
import type { FormAction, FormActionError } from "./types";

export type Callbacks<Schema extends $ZodType, Output> = {
  onSuccess?: (data: Output) => void;
  onError?: (error: FormActionError<Schema>["error"]) => void;
};

export function withCallbacks<Schema extends $ZodType, Output>(
  action: FormAction<Schema, Output>,
  callbacks: Callbacks<Schema, Output> = {},
): FormAction<Schema, Output> {
  return async (prevState, formData) => {
    const state = await action(prevState, formData);

    if (state.status === "success" && !isUndefined(callbacks.onSuccess)) {
      callbacks.onSuccess(state.data);
    }

    if (state.status === "error" && !isUndefined(callbacks.onError)) {
      callbacks.onError(state.error);
    }

    return state;
  };
}
