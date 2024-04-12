import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { cn } from "@/lib/utils";
import { getWhatsAppLink } from "@/lib/whatsapp";

import { Button } from "./ui/button";

const social = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/plasticworld_ok",
    icon: faInstagram,
    color: "#E4405F",
  },
  {
    label: "WhatsApp",
    href: getWhatsAppLink(+process.env.NEXT_PUBLIC_PHONE).toString(),
    icon: faWhatsapp,
    color: "#25D366",
  },
] as const;

export type Props = React.HTMLAttributes<HTMLDivElement>;

export default function SocialIcons({ className, ...props }: Props) {
  return (
    <div className={cn("flex justify-evenly gap-6", className)} {...props}>
      {social.map(({ label, href, icon, color }, i) => (
        <Button asChild variant="ghost" size="icon" key={i}>
          <a href={href} target="_blank">
            <FontAwesomeIcon
              icon={icon}
              className="text-3xl text-[var(--icon-color)] dark:text-foreground"
              style={{ "--icon-color": color } as React.CSSProperties}
            />
            <span className="sr-only">{label}</span>
          </a>
        </Button>
      ))}
    </div>
  );
}
