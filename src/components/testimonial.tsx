import { HTMLAttributes, forwardRef } from "react";

import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type Props = HTMLAttributes<HTMLDivElement> & {
  name: string;
  role: string;
  img: string;
  children: React.ReactNode;
};

const Testimonial = forwardRef<HTMLDivElement, Props>(
  ({ name, role, img, children, ...props }, ref) => (
    <Card ref={ref} {...props}>
      <CardHeader className=" items-center space-x-0">
        <div className="relative aspect-square h-24">
          <Image
            src={img}
            alt={`Foto de la persona`}
            fill
            className="overflow-hidden rounded-full border-2 border-primary object-cover object-center"
          />
        </div>
      </CardHeader>
      <CardContent className="text-center italic">{children}</CardContent>
      <CardFooter className="flex-col gap-2 text-center">
        <CardTitle className="before:mx-2 before:text-xl before:font-bold before:text-primary before:content-['—'] after:mx-2 after:text-xl after:font-bold after:text-primary after:content-['—']">
          {name}
        </CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardFooter>
    </Card>
  ),
);
Testimonial.displayName = "Testimonial";

export default Testimonial;
