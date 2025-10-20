"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useCallback, useRef } from "react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";

interface CopyButtonProps
  extends Omit<React.ComponentProps<typeof Button>, "onClick"> {
  value: string;
  onCopy?: () => void;
}

export function CopyButton({ value, onCopy, ...props }: CopyButtonProps) {
  const onCopyRef = useRef(onCopy);
  const [text, copy, reset] = useCopyToClipboard();

  const handleCopy = useCallback(async () => {
    const success = await copy(value);
    if (!success) {
      return;
    }

    if (onCopyRef.current) {
      onCopyRef.current();
    }

    const timeoutId = setTimeout(() => {
      reset();
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [copy, reset, value]);

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            {...props}
            variant="outline"
            size="icon"
            className={cn("disabled:opacity-100", props.className)}
            onClick={handleCopy}
            aria-label={text ? "Copied" : "Copy to clipboard"}
            disabled={!!text}
          >
            <div
              className={cn(
                "transition-all",
                text ? "scale-100 opacity-100" : "scale-0 opacity-0",
              )}
            >
              <CheckIcon
                className="stroke-emerald-500"
                size={16}
                aria-hidden="true"
              />
            </div>
            <div
              className={cn(
                "absolute transition-all",
                text ? "scale-0 opacity-0" : "scale-100 opacity-100",
              )}
            >
              <CopyIcon size={16} aria-hidden="true" />
            </div>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="px-2 py-1 text-xs">
          Click to copy
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
