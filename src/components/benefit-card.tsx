import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { HTMLAttributes, forwardRef } from "react";

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

const BenefitCard = forwardRef<HTMLDivElement, Props>(
  ({ title, description, icon, ...props }, ref) => (
    <Card ref={ref} {...props}>
      <CardHeader className="space-y-4">
        <CardTitle className="flex items-center gap-2">
          <FontAwesomeIcon icon={icon} className="text-xl text-primary" />
          <span>{title}</span>
        </CardTitle>
        <CardDescription>
          <p>{description}</p>
        </CardDescription>
      </CardHeader>
    </Card>
  ),
);
BenefitCard.displayName = "BenefitCard";

export default BenefitCard;
