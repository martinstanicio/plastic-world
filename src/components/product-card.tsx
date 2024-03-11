import { HTMLAttributes } from "react";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/lib/products";

export type Props = HTMLAttributes<HTMLDivElement> & Product;

export default function ProductCard({
  name,
  description,
  img,
  tags,
  url,
  ...props
}: Props) {
  return (
    <Card {...props}>
      <CardImage>
        <Image
          src={img}
          alt={name}
          fill
          className="bg-muted object-cover object-center"
        />
      </CardImage>

      <CardHeader className="space-y-4">
        <div className="relative flex gap-2 overflow-hidden after:absolute after:right-0 after:h-full after:w-4 after:bg-gradient-to-l after:from-card">
          {tags.map((tag, i) => (
            <Badge key={i} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Button asChild>
          <Link href={url}>Ver producto</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
