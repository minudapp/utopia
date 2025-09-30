import { cn } from "@/lib/utils";

interface VideoProps extends React.ComponentProps<"video"> {
  src: string;
  type: string;
}

export function Video({
  src,
  type = "video/mp4",
  autoPlay = true,
  loop = true,
  playsInline = true,
  muted = true,
  preload = "none",
  className,
  ...props
}: VideoProps) {
  return (
    <video
      autoPlay={autoPlay}
      loop={loop}
      playsInline={playsInline}
      muted={muted}
      preload={preload}
      className={cn("h-auto w-full", className)}
      {...props}
    >
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
}
