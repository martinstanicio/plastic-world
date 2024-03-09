import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { allProductsSlugs, findProduct } from "@/lib/products";

export const generateStaticParams = () => allProductsSlugs;

export interface Props {
  params: (typeof allProductsSlugs)[0];
}

export function generateMetadata({ params }: Props) {
  const { name, url } = findProduct(params.slug);

  return {
    title: name,
    alternates: { canonical: url },
    openGraph: { title: name, url },
  };
}

export default function ProductPage({ params }: Props) {
  const { name, description, img, tags } = findProduct(params.slug);

  return (
    <main className="container mx-auto max-w-prose space-y-8 py-8 md:max-w-6xl">
      <header className="prose prose-a:no-underline">
        <div className="aspect-[4/3] w-full">
          <Image
            src={img}
            alt={name}
            fill
            className="!static rounded-md object-cover object-center"
          />
        </div>
        <div className="relative flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <Badge key={i} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <h1>{name}</h1>
        <Button className="w-full lg:hidden" asChild>
          <Link href="#">¡Hacé tu pedido!</Link>
        </Button>
      </header>
      <p>{description}</p>
    </main>
  );
}
