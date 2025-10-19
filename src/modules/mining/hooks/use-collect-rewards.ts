import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect, useRef } from "react";
import { toast } from "sonner";
import {
  useConfig,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";

import { abi } from "@/modules/web3/abis/miner";
import { MINER_ADDRESS } from "@/modules/web3/constants";
import { useUserState } from "@/modules/web3/hooks/use-user-state";

interface UseCollectRewardsOptions {
  onConfirmed: () => void;
}

export function useCollectRewards({ onConfirmed }: UseCollectRewardsOptions) {
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

  const collectRewards = useCallback(() => {
    writeContract({
      abi,
      address: MINER_ADDRESS,
      functionName: "collectRewards",
    });
  }, [writeContract]);

  useEffect(() => {
    if (isConfirmed) {
      onConfirmedRef.current();
      invalidateRef.current();
      toast.success("Rewards collected successfully!");
    }
  }, [isConfirmed]);

  useEffect(() => {
    if (error) {
      toast.error("Failed to collect rewards. Please try again.", {
        description: error.message,
      });
    }
  }, [error]);

  return {
    collectRewards,
    isPending: isConfirming,
  };
}
