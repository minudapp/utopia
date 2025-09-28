import Image from "next/image";
import { memo } from "react";

import logoText from "@/assets/images/logo-text.png";
import logo from "@/assets/logo.svg";
import { cn } from "@/lib/utils";

const Logo = memo(
  ({
    className,
    ...props
  }: Omit<React.ComponentProps<typeof Image>, "src" | "alt">) => (
    <Image
      src={logo}
      alt="Utopia logo"
      className={cn("h-auto w-full object-contain", className)}
      {...props}
    />
  ),
);
Logo.displayName = "Logo";

const LogoWithText = memo(
  ({
    className,
    ...props
  }: Omit<React.ComponentProps<typeof Image>, "src" | "alt">) => (
    <Image
      src={logoText}
      alt="Utopia logo with text"
      className={cn("h-auto w-full object-contain", className)}
      {...props}
    />
  ),
);
LogoWithText.displayName = "LogoWithText";

export { Logo, LogoWithText };
