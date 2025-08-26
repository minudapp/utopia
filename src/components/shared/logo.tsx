import Image from "next/image";

import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

export function LogoMark({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center justify-center", className)}
      {...props}
    >
      <Image
        src={logo}
        alt="Pudgy Penguins Logo"
        className="size-10 rounded-full"
      />
    </div>
  );
}

export function Logo({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center justify-center", className)}
      {...props}
    >
      <div className="flex items-center space-x-2">
        <Image
          src={logo}
          alt="Pudgy Penguins Logo"
          className="size-10 rounded-full"
        />
        <span
          className="text-primary text-xl font-bold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Pudgy Penguins
        </span>
      </div>
    </div>
  );
}
