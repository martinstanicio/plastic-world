import products from "~/products";

import { notFound } from "next/navigation";

export type Product = {
  slug: string;
  name: string;
  description: string[];
  img: string;
  tags: string[];
};

// sort products alphabetically (case-insensitive)
export const allProducts: Product[] = products.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  return nameA.localeCompare(nameB);
});

export const allProductsSlugs = allProducts.map(({ slug }) => ({ slug }));

export function findProduct(slug: string) {
  const product = allProducts.find((s) => s.slug === slug);

  if (!product) notFound();

  return product;
}
