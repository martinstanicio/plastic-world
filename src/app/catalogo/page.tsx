import { Metadata } from "next";

import ProductsGrid from "@/components/products-grid";
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
      <header className="prose md:text-center">
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      <ProductsGrid as="main" products={allProducts} />
    </main>
  );
}
