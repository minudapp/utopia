import { parseEther } from "viem";
import { useAccount, useReadContracts } from "wagmi";

import { abi } from "@/modules/web3/abis/miner";
import { MINER_ADDRESS } from "@/modules/web3/constants";

export function useUserState() {
  const { address } = useAccount();

  const { data, error, isPending, queryKey } = useReadContracts({
    contracts: [
      {
        address: MINER_ADDRESS,
        abi,
        functionName: "getMyExplorers",
        args: [address!],
      },
      {
        address: MINER_ADDRESS,
        abi,
        functionName: "beanRewards",
        args: [address!],
      },
      {
        address: MINER_ADDRESS,
        abi,
        functionName: "calculateBoneBuySimple",
        args: [parseEther("1")],
      },
    ],
  });

  const [minersResult, beanRewardsResult, boneBuyResult] = data ?? [];

  return {
    queryKey,
    isLoading: isPending,
    error,
    data: {
      miners: minersResult?.status === "success" ? minersResult.result : null,
      beanRewards:
        beanRewardsResult?.status === "success"
          ? beanRewardsResult.result
          : null,
      boneBuy:
        boneBuyResult?.status === "success" ? boneBuyResult.result : null,
    },
  };
}
