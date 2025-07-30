"use client";

import { useActionState } from "react";
import type { $ZodType } from "zod/v4/core";

import { withCallbacks, type Callbacks } from "@/lib/action/callbacks";
import type { FormAction } from "@/lib/action/types";

export function useFormAction<Schema extends $ZodType, Output>(
  action: FormAction<Schema, Output>,
  callbacks: Callbacks<Schema, Output> = {},
) {
  return useActionState(withCallbacks(action, callbacks), null);
}
