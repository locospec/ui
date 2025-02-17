import { cn } from "../../lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bp-animate-pulse bp-rounded-md bp-bg-primary/10",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
