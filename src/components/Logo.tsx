import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  className?: string;
  spanClassName?: string;
}

const Logo: FC<Props> = ({ className, spanClassName }) => {
  return (
    <Link
      href={"/"}
      className={cn(
        "text-zinc-950 text-xl underline underline-offset-4 decoration-[1px] group ",
        className
      )}
    >
      <span
        className={cn(
          "bg-zinc-950 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-2xl font-bold mr-1 group-hover:bg-designColor duration-200",
          spanClassName
        )}
      >
        M
      </span>
      <span>store</span>
    </Link>
  );
};

export default Logo;
