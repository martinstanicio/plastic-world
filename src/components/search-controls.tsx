"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

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

export default function SearchControls() {
  return (
    <div className="flex gap-8">
      <SearchBar />
    </div>
  );
}
