import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

export default function Brand({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-4", className)}
      {...props}
    >
      <Image src={logo} alt="Logo de Plastic World" className="size-10" />
      <span className="font-bold tracking-wide text-foreground transition-colors sm:text-xl lg:text-2xl">
        Plastic World
      </span>
    </Link>
  );
}
