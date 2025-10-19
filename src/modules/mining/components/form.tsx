"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";
import { isAddress, zeroAddress } from "viem";

import { AnimatedButton } from "@/components/shared/animated-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCollectRewards } from "@/modules/mining/hooks/use-collect-rewards";
import { useCompoundExplorers } from "@/modules/mining/hooks/use-compound-explorers";
import { useHireExplorers } from "@/modules/mining/hooks/use-hire-explorers";

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
  const searchParams = useSearchParams();
  const { hireExplorers, isPending: isHireExplorersPending } =
    useHireExplorers();
  const { compoundExplorers, isPending: isCompoundExplorersPending } =
    useCompoundExplorers();
  const { collectRewards, isPending: isCollectRewardsPending } =
    useCollectRewards();

  const referrer = searchParams.get("referrer") ?? null;
  const ref =
    referrer && isAddress(referrer, { strict: false }) ? referrer : zeroAddress;

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

  const onHireExplorers = useCallback(() => {
    if (!inputRef.current) return;

    hireExplorers(inputRef.current.value, ref);

    inputRef.current.value = MIN_AMOUNT.toFixed(2);
  }, [hireExplorers, ref]);

  const onCompoundExplorers = useCallback(() => {
    compoundExplorers(ref);
  }, [compoundExplorers, ref]);

  const onCollectRewards = useCallback(() => {
    collectRewards();
  }, [collectRewards]);

  const isPending =
    isHireExplorersPending ||
    isCompoundExplorersPending ||
    isCollectRewardsPending;

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
              step={STEP}
              min={MIN_AMOUNT}
              max={MAX_AMOUNT}
              defaultValue={MIN_AMOUNT.toFixed(2)}
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

        <p className="text-center text-sm">ENTER BNB AMOUNT & HIRE EXPLORERS</p>
      </div>

      <div className="mt-6 space-y-3">
        <AnimatedButton
          type="button"
          className="w-full"
          onClick={onHireExplorers}
          disabled={isPending}
        >
          Hire Explorers
        </AnimatedButton>
        <div className="grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant="secondary"
            className="rounded-lg py-3 font-bold"
            onClick={onCompoundExplorers}
            disabled={isPending}
          >
            Compound Explorers
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="rounded-lg py-3 font-bold"
            onClick={onCollectRewards}
            disabled={isPending}
          >
            Collect Rewards
          </Button>
        </div>
      </div>
    </form>
  );
}
