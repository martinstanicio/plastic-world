import products from "~/products";

import { notFound, useSearchParams } from "next/navigation";

export type Product = {
  slug: string;
  name: string;
  code: string;
  price: number;
  imgs: string[];
  tags: string[];
};

/**
 * @description Alphabetically sorted products (case-insensitive).
 */
export const allProducts: Product[] = products.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  return nameA.localeCompare(nameB);
});

/**
 * @description Returns an array of objects with a single `slug` property, perfect for Next.js's `generateStaticParams`.
 */
export const allProductsSlugs = allProducts.map(({ slug }) => ({ slug }));

/**
 * @description Filter a given `productList`  by the provided search parameters, including search and tags.
 */
export function useFilteredProducts(productList: Product[] = allProducts) {
  const params = new URLSearchParams(useSearchParams());

  const tagList = params.has("categoria") && params.getAll("categoria");
  const filterTag = ({ tags }: Product) => {
    // If `tagList` is false (there are no filters), show everything
    if (!tagList) return true;

    let tagsAreInTagList = true;

    for (const tag of tagList) {
      if (tags.includes(tag)) continue;

      // This will only run if  one of the tags in `tagList` isn't found in the current product's tags
      tagsAreInTagList = false;
      break;
    }

    return tagsAreInTagList;
  };

  const search = params.has("busqueda") && params.get("busqueda");
  const filterSearch = ({ name, tags }: Product) => {
    // If `search` is false (there are no filters), show everything
    if (!search) return true;

    // Make everything lowercase for a case insensitive search
    const normalizedName = name.toLowerCase();
    const normalizedSearch = search.toLowerCase();

    for (const tag of tags) {
      const normalizedTag = tag.toLowerCase();

      if (normalizedTag.includes(normalizedSearch)) return true;
    }

    return normalizedName.includes(normalizedSearch);
  };

  return productList.filter(filterTag).filter(filterSearch);
}

/**
 * @description Returns a list of tags from the `productList` array, removing duplicates and sorting them alphabetically.
 */
export function useProductTags(productList: Product[]) {
  const TagsSet = new Set<string>();

  productList.forEach(({ tags }) => {
    tags.forEach((tag) => TagsSet.add(tag));
  });

  // Transform set to array and sort alphabetically for easier mapping
  return Array.from(TagsSet).sort();
}

/**
 * @description Returns a product with a given slug, or throw a 404 if it doesn't exist.
 */
export function findProduct(slug: string) {
  const product = allProducts.find((s) => s.slug === slug);

  if (!product) notFound();

  return product;
}
