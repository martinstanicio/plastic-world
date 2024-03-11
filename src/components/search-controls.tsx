"use client";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { allProductTags } from "@/lib/products";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(searchTerm: string) {
    const newParams = new URLSearchParams(searchParams);

    if (searchTerm) newParams.set("busqueda", searchTerm);
    else newParams.delete("busqueda");

    replace(`${pathname}?${newParams.toString()}`);
  }

  return (
    <div className="flex-1 space-y-2">
      <Label htmlFor="search">Búsqueda</Label>
      <Input
        type="search"
        id="search"
        placeholder="Planchetas..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("busqueda")?.toString()}
      />
    </div>
  );
}

function FilterBar() {
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const { replace } = useRouter();

  function handleClearFilters() {
    const newParams = new URLSearchParams(searchParams);

    newParams.delete("categoria");

    replace(`${pathname}?${newParams.toString()}`);
  }

  function handleApplyFilter(tag: string) {
    const newParams = new URLSearchParams(searchParams);

    newParams.append("categoria", tag);

    replace(`${pathname}?${newParams.toString()}`);
  }

  return (
    <div className="flex-1 space-y-2">
      <Label>Filtros</Label>
      <div className="flex flex-wrap gap-4">
        {searchParams.has("categoria") && (
          <Button type="submit" onClick={handleClearFilters}>
            <FontAwesomeIcon icon={faTrash} className="mr-2" />
            Eliminar filtros
          </Button>
        )}
        {allProductTags.map((tag, i) => (
          <Button
            type="submit"
            variant="secondary"
            key={i}
            onClick={() => handleApplyFilter(tag)}
          >
            {tag}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default function SearchControls() {
  return (
    <div className="space-y-4">
      <SearchBar />
      <FilterBar />
    </div>
  );
}
