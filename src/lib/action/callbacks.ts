import type { $ZodType } from "zod/v4/core";

import { isUndefined } from "@/utils/guards";
import type { FormAction } from "./types";

export type Callbacks<TActionResult> = {
  onSuccess?: (data: TActionResult) => void;
  onError?: (error: string) => void;
};

export function withCallbacks<TSchema extends $ZodType, TActionResult>(
  action: FormAction<TSchema, TActionResult>,
  callbacks: Callbacks<TActionResult> = {},
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
