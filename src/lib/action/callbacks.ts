import type { $ZodType } from "zod/v4/core";

import { isUndefined } from "@/utils/guards";
import type { FormAction, FormActionError } from "./types";

export type Callbacks<TSchema extends $ZodType, TActionResult> = {
  onSuccess?: (data: TActionResult) => void;
  onError?: (error: FormActionError<TSchema>["error"]) => void;
};

export function withCallbacks<TSchema extends $ZodType, TActionResult>(
  action: FormAction<TSchema, TActionResult>,
  callbacks: Callbacks<TSchema, TActionResult> = {},
): FormAction<TSchema, TActionResult> {
  return async (prevState, formData) => {
    const promise = action(prevState, formData);

    const state = await promise;

    if (state.status === "success" && !isUndefined(callbacks.onSuccess)) {
      callbacks.onSuccess(state.data);
    }

    if (
      state.status === "error" &&
      state.error &&
      !isUndefined(callbacks.onError)
    ) {
      callbacks.onError(state.error);
    }

    return promise;
  };
}
