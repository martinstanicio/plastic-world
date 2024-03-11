import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { HTMLAttributes } from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type Props = HTMLAttributes<HTMLDivElement> & {
  title: string;
  description: string;
  icon: IconDefinition;
};

export default function BenefitCard({
  title,
  description,
  icon,
  ...props
}: Props) {
  return (
    <Card {...props}>
      <CardHeader className="space-y-4">
        <CardTitle className="flex items-center gap-2">
          <FontAwesomeIcon icon={icon} className="text-xl text-primary" />
          <span>{title}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
