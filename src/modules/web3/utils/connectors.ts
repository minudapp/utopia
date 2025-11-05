"use client";

import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  baseAccount,
  binanceWallet,
  bitgetWallet,
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
      wallets: [metaMaskWallet, binanceWallet, trustWallet, bitgetWallet],
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
        rainbowWallet,
      ],
    },
  ],
  { appName: "Utopia", projectId: process.env.NEXT_PUBLIC_PROJECT_ID! },
);
