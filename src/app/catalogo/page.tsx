import { Suspense } from "react";

import { Metadata } from "next";

import ProductsGrid from "@/components/products-grid";
import SearchControls from "@/components/search-controls";
import { allProducts } from "@/lib/products";

const title = "Catálogo";
const description =
  "Te invitamos a descubrir nuestra amplia gama de productos.";
const url = "/catalogo";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url },
};

export default function Products() {
  return (
    <main className="container max-w-prose space-y-8 py-8 md:max-w-6xl">
      <header className="prose md:text-center">
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      <Suspense>
        <div className="relative max-xl:space-y-8 xl:grid xl:grid-cols-4 xl:gap-16">
          <SearchControls className="top-20 self-start xl:sticky" />
          <ProductsGrid
            as="main"
            products={allProducts}
            className="xl:order-first xl:col-span-3"
          />
        </div>
      </Suspense>
    </main>
  );
}
