"use client";

import { useSearchParams } from "next/navigation";

import { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

import ProductCard from "./product-card";

export type Props = {
  as: keyof HTMLElementTagNameMap;
  gridMode?: "fit" | "fill";
  products: Product[];
};

export default function ProductsGrid({
  as: AsElement,
  gridMode = "fill",
  products,
}: Props) {
  const searchParams = new URLSearchParams(useSearchParams());

  const tag = searchParams.has("categoria") && searchParams.get("categoria");
  const search = searchParams.has("busqueda") && searchParams.get("busqueda");

  const filterTag = ({ tags }: Product) => (!tag ? true : tags.includes(tag));

  const filterSearch = ({ name }: Product) => {
    if (!search) return true;

    const normalizedName = name.toLowerCase();
    const normalizedSearch = search.toLowerCase();

    return normalizedName.includes(normalizedSearch);
  };

  const productsList = products.filter(filterTag).filter(filterSearch);

  return (
    <AsElement
      className={cn(
        "grid gap-8",
        gridMode === "fill" && "grid-cols-[repeat(auto-fill,minmax(20ch,1fr))]",
        gridMode === "fit" && "grid-cols-[repeat(auto-fit,minmax(20ch,1fr))]",
      )}
    >
      {productsList.map((product, i) => (
        <ProductCard key={i} {...product} />
      ))}
    </AsElement>
  );
}
