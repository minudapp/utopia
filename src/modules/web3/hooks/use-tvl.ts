import { useConfig, useReadContract } from "wagmi";

import { abi } from "@/modules/web3/abis/miner";
import { MINER_ADDRESS } from "@/modules/web3/constants";

export function useTVL() {
  const config = useConfig();
  return useReadContract({
    config,
    address: MINER_ADDRESS,
    abi,
    functionName: "getBalance",
  });
}
