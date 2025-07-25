"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Cookie } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cookieBannerVariants = cva("fixed z-50 transition-all duration-700", {
  variants: {
    variant: {
      default: "right-0 bottom-0 left-0 w-full sm:bottom-4 sm:max-w-md",
      small: "right-0 bottom-0 left-0 w-full sm:bottom-4 sm:max-w-md",
      mini: "right-0 bottom-4 left-0 w-full sm:max-w-3xl",
    },
    position: {
      left: "sm:left-4",
      right: "sm:right-4",
    },
    state: {
      open: "translate-y-0 opacity-100",
      closed: "translate-y-full opacity-0",
    },
  },
  defaultVariants: {
    variant: "default",
    position: "left",
    state: "closed",
  },
});

function CookieBannerContainer({
  variant,
  position,
  state,
  className,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cookieBannerVariants>) {
  return (
    <div
      className={cookieBannerVariants({
        variant,
        position,
        state,
        className,
      })}
      {...props}
    />
  );
}

type CookieBannerProps = Omit<
  React.ComponentProps<typeof CookieBannerContainer>,
  "state"
> & {
  onAcceptCallback?: () => void;
  onDeclineCallback?: () => void;
  description?: string;
  learnMoreHref?: string;
};

const CookieBanner = ({
  variant,
  position,
  onAcceptCallback,
  onDeclineCallback,
  description = "We use cookies to ensure you get the best experience on our website. For more information on how we use cookies, please see our cookie policy.",
  learnMoreHref = "/privacy-policy",
  ...props
}: CookieBannerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const onAcceptCallbackRef = useRef(onAcceptCallback);
  const onDeclineCallbackRef = useRef(onDeclineCallback);

  const handleAccept = useCallback(() => {
    setIsOpen(false);

    document.cookie =
      "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";

    setTimeout(() => {
      setHide(true);
    }, 700);

    if (onAcceptCallbackRef.current) {
      onAcceptCallbackRef.current();
    }
  }, []);

  const handleDecline = useCallback(() => {
    setIsOpen(false);

    setTimeout(() => {
      setHide(true);
    }, 700);

    if (onDeclineCallbackRef.current) {
      onDeclineCallbackRef.current();
    }
  }, []);

  useEffect(() => {
    try {
      setIsOpen(true);
      if (document.cookie.includes("cookieConsent=true")) {
        setIsOpen(false);
        setTimeout(() => {
          setHide(true);
        }, 700);
      }
    } catch (error) {
      console.warn("Cookie consent error:", error);
    }
  }, []);

  if (hide) return null;

  if (variant === "default") {
    return (
      <CookieBannerContainer
        variant={variant}
        position={position}
        state={isOpen ? "open" : "closed"}
        {...props}
      >
        <Card className="m-3 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg">We use cookies</CardTitle>
            <Cookie className="h-5 w-5" />
          </CardHeader>
          <CardContent className="space-y-2">
            <CardDescription className="text-sm">{description}</CardDescription>
            <p className="text-muted-foreground text-xs">
              By clicking{" "}
              <span className="font-medium">&quot;Accept&quot;</span>, you agree
              to our use of cookies.
            </p>
            <Link
              href={learnMoreHref}
              className="text-primary text-xs underline underline-offset-4 hover:no-underline"
            >
              Learn more
            </Link>
          </CardContent>
          <CardFooter className="flex gap-2 pt-2">
            <Button
              onClick={handleDecline}
              variant="secondary"
              className="flex-1"
            >
              Decline
            </Button>
            <Button onClick={handleAccept} className="flex-1">
              Accept
            </Button>
          </CardFooter>
        </Card>
      </CookieBannerContainer>
    );
  }

  if (variant === "small") {
    return (
      <CookieBannerContainer
        variant={variant}
        position={position}
        state={isOpen ? "open" : "closed"}
        {...props}
      >
        <Card className="m-3 shadow-lg">
          <CardHeader className="flex h-0 flex-row items-center justify-between space-y-0 px-4 pb-2">
            <CardTitle className="text-base">We use cookies</CardTitle>
            <Cookie className="h-4 w-4" />
          </CardHeader>
          <CardContent className="px-4 pt-0 pb-2">
            <CardDescription className="text-sm">{description}</CardDescription>
          </CardContent>
          <CardFooter className="flex h-0 gap-2 px-4 py-2">
            <Button
              onClick={handleDecline}
              variant="secondary"
              size="sm"
              className="flex-1 rounded-full"
            >
              Decline
            </Button>
            <Button
              onClick={handleAccept}
              size="sm"
              className="flex-1 rounded-full"
            >
              Accept
            </Button>
          </CardFooter>
        </Card>
      </CookieBannerContainer>
    );
  }

  if (variant === "mini") {
    return (
      <CookieBannerContainer
        variant={variant}
        position={position}
        state={isOpen ? "open" : "closed"}
        {...props}
      >
        <Card className="mx-3 p-0 py-3 shadow-lg">
          <CardContent className="grid gap-4 p-0 px-3.5 sm:flex">
            <CardDescription className="flex-1 text-xs sm:text-sm">
              {description}
            </CardDescription>
            <div className="flex items-center justify-end gap-2 sm:gap-3">
              <Button
                onClick={handleDecline}
                size="sm"
                variant="secondary"
                className="h-7 text-xs"
              >
                Decline
                <span className="sr-only sm:hidden">Decline</span>
              </Button>
              <Button onClick={handleAccept} size="sm" className="h-7 text-xs">
                Accept
                <span className="sr-only sm:hidden">Accept</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </CookieBannerContainer>
    );
  }

  return null;
};

export { CookieBanner };
