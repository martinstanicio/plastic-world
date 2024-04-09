import Image from "next/image";
import Link from "next/link";

import Tag from "@/components/tag";
import { Button } from "@/components/ui/button";
import { ARS } from "@/lib/currency";
import { allProductsSlugs, findProduct } from "@/lib/products";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const generateStaticParams = () => allProductsSlugs;

export interface Props {
  params: (typeof allProductsSlugs)[0];
}

export function generateMetadata({ params }: Props) {
  const { slug, name } = findProduct(params.slug);

  const url = `/catalogo/${slug}`;

  return {
    title: name,
    openGraph: { title: name, url },
  };
}

export default function ProductPage({ params }: Props) {
  const { name, description, price, img, tags } = findProduct(params.slug);

  const link = getWhatsAppLink(
    +process.env.NEXT_PUBLIC_PHONE,
    `Hola, estoy buscando hacer un regalo empresarial, ¿podrías darme más información sobre el producto "${name}", por favor?`,
  );

  return (
    <main className="container mx-auto max-w-prose py-8 max-lg:space-y-8 lg:grid lg:max-w-6xl lg:grid-cols-12 lg:gap-8">
      <div className="relative col-span-7 aspect-[4/3] w-full bg-secondary text-secondary-foreground">
        <Image
          src={img}
          alt={name}
          fill
          priority
          className="rounded-md object-cover object-center"
        />
      </div>
      <div className="prose col-span-5 w-full prose-a:no-underline">
        <header>
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <Tag value={tag} key={i} />
            ))}
          </div>
          <h1>{name}</h1>
        </header>

        {description.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}

        <p className="text-3xl font-bold">{ARS.format(price)}</p>

          <Link href={link.toString()} target="_blank">
            Comprar
          </Link>
        </Button>
      </div>
    </main>
  );
}
