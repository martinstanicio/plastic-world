"use client";

import { Product, allProducts, useFilteredProducts } from "@/lib/products";
import { cn } from "@/lib/utils";

import CustomProductsCard from "./custom-products-card";
import ProductCard from "./product-card";

export type Props = {
  as: keyof HTMLElementTagNameMap;
  gridMode?: "fit" | "fill";
  products?: Product[];
  notInteractive?: boolean;
  hideCustomProductsCard?: boolean;
  className?: string;
};

export default function ProductsGrid({
  as: AsElement,
  gridMode = "fill",
  products = allProducts,
  notInteractive = false,
  hideCustomProductsCard = false,
  className,
}: Props) {
  const filteredProducts = useFilteredProducts(products);

  const productList = notInteractive ? products : filteredProducts;

  return (
    <AsElement
      className={cn(
        "grid gap-8",
        gridMode === "fill" && "grid-cols-[repeat(auto-fill,minmax(20ch,1fr))]",
        gridMode === "fit" && "grid-cols-[repeat(auto-fit,minmax(20ch,1fr))]",
        className,
      )}
    >
      {!hideCustomProductsCard && (
        <CustomProductsCard className="col-span-full" />
      )}

      {productList.map((product, i) => (
        <ProductCard key={i} {...product} />
      ))}
    </AsElement>
  );
}
