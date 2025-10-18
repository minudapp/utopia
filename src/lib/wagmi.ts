import {
  cookieStorage,
  createConfig,
  createStorage,
  http,
  type CreateConnectorFn,
} from "wagmi";
import { bscTestnet } from "wagmi/chains";

// Define supported chains
export const chains = [bscTestnet] as const;
// export const chains = [bsc] as const;

export function getConfig(connectors: CreateConnectorFn[]) {
  return createConfig({
    multiInjectedProviderDiscovery: false,
    ssr: true,
    storage: createStorage({
      storage: cookieStorage,
    }),
    connectors,
    chains,
    transports: {
      // [bsc.id]: http(),
      [bscTestnet.id]: http(),
    },
    batch: {
      multicall: true,
    },
  });
}

export function getServerConfig() {
  return createConfig({
    multiInjectedProviderDiscovery: false,
    ssr: true,
    storage: createStorage({
      storage: cookieStorage,
    }),
    chains,
    transports: {
      // [bsc.id]: http(),
      [bscTestnet.id]: http(),
    },
    batch: {
      multicall: true,
    },
  });
}
