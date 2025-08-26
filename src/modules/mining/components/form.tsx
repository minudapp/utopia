"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useCallback, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MIN_AMOUNT = 0.01;
const MAX_AMOUNT = 200;
const STEP = 0.01;

function increment(value: number, step: number): number {
  return Math.min(MAX_AMOUNT, value + step);
}

function decrement(value: number, step: number): number {
  return Math.max(MIN_AMOUNT, value - step);
}

export function Form() {
  const inputRef = useRef<HTMLInputElement>(null);

  const adjustAmount = useCallback(
    (cb: (value: number, step: number) => number) => {
      if (!inputRef.current) return;

      const bnbAmount = inputRef.current.value;

      const current = Number.parseFloat(bnbAmount);

      const newAmount = cb(current, STEP);

      inputRef.current.value = newAmount.toFixed(2);
      inputRef.current.dispatchEvent(new Event("input", { bubbles: true }));
    },
    [],
  );

  const incrementAmount = useCallback(
    () => adjustAmount(increment),
    [adjustAmount],
  );
  const decrementAmount = useCallback(
    () => adjustAmount(decrement),
    [adjustAmount],
  );

  return (
    <form>
      <div className="space-y-4">
        <div className="flex justify-between text-sm">
          <span>MIN: 0.01 BNB</span>
          <span>MAX: 200 BNB</span>
        </div>

        <div className="relative">
          <div className="border-input data-focus-within:border-ring data-focus-within:ring-ring/50 data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40 data-focus-within:has-aria-invalid:border-destructive relative inline-flex h-9 w-full items-center overflow-hidden rounded-md border text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none data-disabled:opacity-50 data-focus-within:ring-[3px]">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              // className="rounded-l-lg"
              className="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -ms-px flex aspect-square h-[inherit] items-center justify-center rounded-s-md border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
              onClick={decrementAmount}
            >
              <MinusIcon className="size-4" />
            </Button>
            <Input
              ref={inputRef}
              inputMode="numeric"
              step="0.01"
              min="0.01"
              max="200"
              defaultValue="0.01"
              className="border-0 bg-transparent text-center text-lg font-bold focus:ring-0 focus:outline-none"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              // className="rounded-r-lg"
              className="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -ms-px flex aspect-square h-[inherit] items-center justify-center rounded-s-md border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
              onClick={incrementAmount}
            >
              <PlusIcon className="size-4" />
            </Button>
          </div>
        </div>

        <p className="text-center text-sm">
          ENTER BNB AMOUNT & CLICK BUY BELOW
        </p>
      </div>

      <div className="mt-6 space-y-3">
        <Button className="w-full rounded-lg py-3 font-bold">
          Hire Miners
        </Button>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="secondary" className="rounded-lg py-3 font-bold">
            Compound Miners
          </Button>
          <Button variant="secondary" className="rounded-lg py-3 font-bold">
            Collect Rewards
          </Button>
        </div>
      </div>
    </form>
  );
}
