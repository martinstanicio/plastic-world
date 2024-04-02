import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

export type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  bigLogo?: boolean;
};

export default function Brand({ bigLogo = false, className, ...props }: Props) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-4", className)}
      {...props}
    >
      <Image
        src={logo}
        alt="Logo de Plastic World"
        className={cn(
          "size-10 drop-shadow-xl dark:drop-shadow-none sm:size-14",
          bigLogo && "size-16",
        )}
      />
      <span className="font-display text-2xl transition-colors sm:text-3xl">
        Plastic World
      </span>
    </Link>
  );
}
