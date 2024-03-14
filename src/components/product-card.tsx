import { HTMLAttributes } from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/lib/products";

import Tag from "./tag";

export type Props = HTMLAttributes<HTMLDivElement> & Product;

export default function ProductCard({
  slug,
  name,
  img,
  tags,
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
            <Tag value={tag} key={i} />
          ))}
        </div>
        <CardTitle>{name}</CardTitle>
      </CardHeader>

      <CardFooter>
        <Button asChild>
          <Link href={`/catalogo/${slug}`}>Ver producto</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
