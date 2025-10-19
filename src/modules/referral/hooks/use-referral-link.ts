import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export function useReferralLink() {
  const [referralLink, setReferralLink] = useState("");
  const { address } = useAccount();

  useEffect(() => {
    if (address) {
      setReferralLink(`${window.location.origin}?referrer=${address}`);
    }
  }, [address]);

  return referralLink;
}
