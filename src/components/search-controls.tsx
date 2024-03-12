"use client";

import FilterBar from "./filter-bar";
import SearchBar from "./search-bar";

export default function SearchControls() {
  return (
    <div className="space-y-4">
      <SearchBar />
      <FilterBar />
    </div>
  );
}
