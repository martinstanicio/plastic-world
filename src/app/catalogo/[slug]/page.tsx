import Image from "next/image";
import Link from "next/link";

import Tag from "@/components/tag";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ARS } from "@/lib/currency";
import { allProductsSlugs, findProduct } from "@/lib/products";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const generateStaticParams = () => allProductsSlugs;

export interface Props {
  params: (typeof allProductsSlugs)[0];
}

export function generateMetadata({ params }: Props) {
  const { slug, code, name, img } = findProduct(params.slug);

  const url = `/catalogo/${slug}`;
  const description = `Producto N° ${code}: "${name}"`;

  return {
    title: name,
    description,
    openGraph: { title: name, description, url, images: [img] },
  };
}

export default function ProductPage({ params }: Props) {
  const { name, code, price, imgs, tags } = findProduct(params.slug);

  const link = getWhatsAppLink(
    +process.env.NEXT_PUBLIC_PHONE,
    "Hola, estoy interesado en este producto, ¿podrías darme más información, por favor?\n" +
      `- \`\`\`${code}\`\`\`: "${name}"`,
  );

  return (
    <main className="container mx-auto max-w-prose py-8 max-lg:space-y-8 lg:grid lg:max-w-6xl lg:grid-cols-12 lg:gap-8">
      <Carousel className="col-span-7 aspect-square w-full">
        <CarouselContent>
          {imgs.map((img, i) => (
            <CarouselItem key={i} className="aspect-square">
              <div className="relative h-full">
                <Image
                  src={img}
                  alt={name}
                  fill
                  priority
                  className="rounded-md bg-secondary object-cover object-center text-secondary-foreground"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex gap-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>

      <div className="prose col-span-5 w-full prose-a:no-underline">
        <header className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <Tag value={tag} key={i} />
            ))}
          </div>
          <p className="font-mono text-xl font-bold">{code}</p>
          <h1>{name}</h1>
        </header>

        <p className="text-3xl font-bold">{ARS.format(price)}</p>

        <Button size="lg" className="max-sm:w-full" asChild>
          <Link href={link.toString()} target="_blank">
            Comprar producto
          </Link>
        </Button>
      </div>
    </main>
  );
}
