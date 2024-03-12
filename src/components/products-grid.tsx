"use client";

import { Product, allProducts, useFilteredProducts } from "@/lib/products";
import { cn } from "@/lib/utils";

import ProductCard from "./product-card";

export type Props = {
  as: keyof HTMLElementTagNameMap;
  gridMode?: "fit" | "fill";
  products?: Product[];
  notInteractive?: boolean;
};

export default function ProductsGrid({
  as: AsElement,
  gridMode = "fill",
  products = allProducts,
  notInteractive = false,
}: Props) {
  const filteredProducts = useFilteredProducts(products);

  const productList = notInteractive ? products : filteredProducts;

  return (
    <AsElement
      className={cn(
        "grid gap-8",
        gridMode === "fill" && "grid-cols-[repeat(auto-fill,minmax(20ch,1fr))]",
        gridMode === "fit" && "grid-cols-[repeat(auto-fit,minmax(20ch,1fr))]",
      )}
    >
      {productList.map((product, i) => (
        <ProductCard key={i} {...product} />
      ))}
    </AsElement>
  );
}
