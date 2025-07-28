"use client";

import { useActionState } from "react";
import type { $ZodType } from "zod/v4/core";

import { withCallbacks, type Callbacks } from "@/lib/action/callbacks";
import type { FormAction } from "@/lib/action/types";

export function useFormAction<TSchema extends $ZodType, TActionResult>(
  action: FormAction<TSchema, TActionResult>,
  callbacks: Callbacks<TSchema, TActionResult> = {},
) {
  return useActionState(withCallbacks(action, callbacks), null);
}
