"use client";

import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  baseAccount,
  binanceWallet,
  gateWallet,
  metaMaskWallet,
  okxWallet,
  rainbowWallet,
  safepalWallet,
  tokenPocketWallet,
  trustWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";

export const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [metaMaskWallet, binanceWallet, trustWallet, rainbowWallet],
    },
    {
      groupName: "Others",
      wallets: [
        walletConnectWallet,
        baseAccount,
        gateWallet,
        okxWallet,
        tokenPocketWallet,
        safepalWallet,
      ],
    },
  ],
  { appName: "Utopia", projectId: process.env.NEXT_PUBLIC_PROJECT_ID! },
);
