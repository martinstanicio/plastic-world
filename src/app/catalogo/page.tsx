import { Metadata } from "next";

import ProductCard from "@/components/product-card";
import { allProducts } from "@/lib/products";

const title = "Catálogo";
const description =
  "Te invitamos a descubrir nuestra amplia gama de productos.";
const url = "/catalogo";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url },
};

export default function Products() {
  return (
    <main className="container max-w-prose space-y-8 py-8 md:max-w-6xl">
      <header className="prose">
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      <main className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(25ch,1fr))] gap-4">
        {allProducts.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </main>
    </main>
  );
}
