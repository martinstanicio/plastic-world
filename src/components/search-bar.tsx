"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  /**
   * @description Updates the search params every time a new character is typed.
   */
  function handleSearch(searchTerm: string) {
    const newParams = new URLSearchParams(searchParams);

    // Update the search param if it exists and has content, otherwise remove it
    if (searchTerm) newParams.set("busqueda", searchTerm);
    else newParams.delete("busqueda");

    replace(`${pathname}?${newParams.toString()}`);
  }

  return (
    <div className="space-y-2">
      <Label htmlFor="search">Búsqueda y filtros</Label>
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
