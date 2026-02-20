"use client";

import SearchForm from "./search-form";
import FilterForm from "./filter-form";

export default function Form() {
  return (
    <div className="flex gap-3 self-start w-full rounded-xl bg-gray-50 py-3 px-3 border border-gray-200">

      <SearchForm />
      <FilterForm />

    </div>
  );
}