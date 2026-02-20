"use client";

import SearchForm from "./search-form";
import FilterForm from "./filter-form";

export default function Form() {
  return (
    <div className="flex items-center justify-between p-4">

      <SearchForm />
      <FilterForm />

    </div>
  );
}