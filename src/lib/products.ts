import { notFound } from "next/navigation";

export type Product = {
  slug: string;
  name: string;
  description: string;
  img: string;
  tags: string[];
  url: string;
};

export const allProducts: Product[] = [];

export const allProductsSlugs = allProducts.map(({ slug }) => ({ slug }));

export const featuredProducts: Product[] = [];

export function findProduct(slug: string) {
  const product = allProducts.find((s) => s.slug === slug);

  if (!product) notFound();

  return product;
}
