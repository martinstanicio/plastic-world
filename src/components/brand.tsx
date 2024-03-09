import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo(props: React.SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg viewBox="0 0 41 47" {...props}>
      <path
        d="M20.45 4.57L28.26 9.08L32.22 6.8L20.45 0L0.790001 11.36L4.73 13.64L20.45 4.57Z"
        className="fill-primary transition-colors dark:fill-foreground"
      />
      <path
        d="M36.1601 9.08L20.4501 18.15L12.6401 13.64L8.6901 15.92L20.4501 22.71L40.1201 11.36L36.1601 9.08Z"
        className="fill-primary transition-colors dark:fill-foreground"
      />
      <path
        d="M3.95 24.3401L0 22.0601V35.6401L19.66 47.0001V42.4401L3.95 33.3601V24.3401Z"
        className="fill-primary transition-colors dark:fill-foreground"
      />
      <path
        d="M0 17.4999L15.71 26.5699V35.5899L19.66 37.8799V24.2899L0 12.9399V17.4999Z"
        className="fill-primary transition-colors dark:fill-foreground"
      />
      <path
        d="M33.0101 22.06V17.5L21.2401 24.29V47L25.1901 44.72V26.57L33.0101 22.06Z"
        className="fill-primary transition-colors dark:fill-foreground"
      />
      <path
        d="M36.9501 15.2199V33.3599L29.1401 37.8799V42.4399L40.9101 35.6399V12.9399L36.9501 15.2199Z"
        className="fill-primary transition-colors dark:fill-foreground"
      />
    </svg>
  );
}

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
      <Logo className="h-10" />
      <span className="font-bold tracking-wide text-foreground transition-colors sm:text-xl md:text-2xl">
        Madetodo Empresarial
      </span>
    </Link>
  );
}
