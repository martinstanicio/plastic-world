"use client";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useFilteredProducts, useProductTags } from "@/lib/products";

import { Button } from "./ui/button";

export default function FilterBar() {
  const productTags = useProductTags(useFilteredProducts());
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleClearFilters() {
    const newParams = new URLSearchParams(searchParams);

    newParams.delete("categoria");

    replace(`${pathname}?${newParams.toString()}`);
  }

  /**
   * @description Updates the search params every time a tag is selected or deselected.
   */
  function handleApplyFilter(tag: string) {
    const newParams = new URLSearchParams(searchParams);

    //  If the filter is already in the params, remove it; otherwise add it.
    if (newParams.getAll("categoria").includes(tag)) {
      newParams.delete("categoria", tag);
    } else {
      newParams.append("categoria", tag);
    }

    replace(`${pathname}?${newParams.toString()}`);
  }

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-4">
        {searchParams.has("categoria") && (
          <Button type="submit" onClick={handleClearFilters}>
            <FontAwesomeIcon icon={faTrash} className="mr-2" />
            Eliminar filtros
          </Button>
        )}

        {productTags.map((tag, i) => (
          <Button
            type="submit"
            variant={
              searchParams.has("categoria") &&
              searchParams.getAll("categoria").includes(tag)
                ? "default"
                : "secondary"
            }
            onClick={() => handleApplyFilter(tag)}
            key={i}
          >
            {tag}
          </Button>
        ))}
      </div>
    </div>
  );
}
