import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect, useRef } from "react";
import { toast } from "sonner";
import { parseEther, type Address } from "viem";
import {
  useConfig,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";

import { abi } from "@/modules/web3/abis/miner";
import { MINER_ADDRESS } from "@/modules/web3/constants";
import { useUserState } from "@/modules/web3/hooks/use-user-state";

interface UseHireExplorersOptions {
  onConfirmed: () => void;
}

export function useHireExplorers({ onConfirmed }: UseHireExplorersOptions) {
  const config = useConfig();
  const queryClient = useQueryClient();
  const { data: hash, writeContract } = useWriteContract({ config });
  const {
    isSuccess: isConfirmed,
    isLoading: isConfirming,
    error,
  } = useWaitForTransactionReceipt({
    config,
    hash,
  });
  const { queryKey } = useUserState();
  const invalidateRef = useRef(() =>
    queryClient.invalidateQueries({ queryKey }),
  );
  const onConfirmedRef = useRef(onConfirmed);

  const hireExplorers = useCallback(
    (amount: string, ref: Address) => {
      writeContract({
        abi,
        address: MINER_ADDRESS,
        functionName: "hireExplorers",
        args: [ref],
        value: parseEther(amount),
      });
    },
    [writeContract],
  );

  useEffect(() => {
    if (isConfirmed) {
      onConfirmedRef.current();
      invalidateRef.current();
      toast.success("Explorers hired successfully!");
    }
  }, [isConfirmed]);

  useEffect(() => {
    if (error) {
      toast.error("Failed to hire explorers. Please try again.", {
        description: error.message,
      });
    }
  }, [error]);

  return {
    hireExplorers,
    isPending: isConfirming,
  };
}
