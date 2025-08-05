import { createConfig, http } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";
import {
  injected,
  coinbaseWallet,
  walletConnect,
  safe,
  metaMask,
} from "wagmi/connectors";

// TODO: Replace with actual project ID for WalletConnect
const projectId = "123...abc";

export function getConfig() {
  return createConfig({
    ssr: true,
    chains: [bsc, bscTestnet],
    transports: {
      [bsc.id]: http(),
      [bscTestnet.id]: http(),
    },
    connectors: [
      injected({ target: "metaMask" }),
      walletConnect({ projectId }),
      metaMask(),
      coinbaseWallet(),
      safe(),
    ],
    batch: {
      multicall: true,
    },
  });
}
