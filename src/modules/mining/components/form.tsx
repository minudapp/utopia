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
          <div className="flex items-center rounded-lg border border-gray-600 bg-gray-700/50">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="rounded-l-lg"
              onClick={decrementAmount}
            >
              <MinusIcon className="h-4 w-4" />
            </Button>
            <Input
              ref={inputRef}
              type="number"
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
              className="rounded-r-lg"
              onClick={incrementAmount}
            >
              <PlusIcon className="h-4 w-4" />
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
