import type { HTMLAttributes } from "react";

export default function LayoutGridPosts({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3 ${className ?? ""}`}
      {...props}
    />
  );
}
