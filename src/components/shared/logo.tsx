import { Circle } from "lucide-react";

export function LogoMark() {
  return (
    <div className="flex items-center justify-center">
      <Circle className="text-primary size-12" />
    </div>
  );
}

export function Logo() {
  return (
    <div className="flex items-center justify-center">
      <Circle className="text-primary size-6" />
      <span className="ml-2 text-xl font-semibold text-zinc-900">ACME</span>
    </div>
  );
}
