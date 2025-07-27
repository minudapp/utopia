"use client";

import { createContext, useCallback, useContext, useState } from "react";

import { CookieBanner } from "@/components/shared/cookie-banner";
import { isNull } from "@/utils/guards";

type ConsentManagerContextProps = {
  isConsentGiven: boolean;
  setConsentGiven: (value: boolean) => void;
};

const ConsentManagerContext = createContext<ConsentManagerContextProps | null>(
  null,
);

type ConsentManagerProviderProps = Pick<
  React.ComponentProps<typeof CookieBanner>,
  "variant" | "position"
> & {
  children: React.ReactNode;
};

export function ConsentManagerProvider({
  children,
  position = "right",
  variant = "default",
}: ConsentManagerProviderProps) {
  const [isConsentGiven, setConsentGiven] = useState(false);

  const onAccept = useCallback(() => {
    setConsentGiven(true);
  }, []);

  const onDecline = useCallback(() => {
    setConsentGiven(false);
  }, []);

  return (
    <ConsentManagerContext value={{ isConsentGiven, setConsentGiven }}>
      <CookieBanner
        variant={variant}
        position={position}
        onAcceptCallback={onAccept}
        onDeclineCallback={onDecline}
        // description="We use cookies to ensure you get the best experience on our website. For more information on how we use cookies, please see our cookie policy."
        // learnMoreHref="/privacy-policy"
      />
      {children}
    </ConsentManagerContext>
  );
}

export function useConsentManager() {
  const context = useContext(ConsentManagerContext);
  if (isNull(context)) {
    throw new Error(
      "useConsentManager must be used within a ConsentManagerProvider",
    );
  }

  return context;
}
