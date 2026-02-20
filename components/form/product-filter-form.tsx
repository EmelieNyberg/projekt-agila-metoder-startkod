"use client";

import Form from "next/form";
import SearchInput from "./search-input";
import FilterControls from "./filter-controls";

export default function ProductFilterForm() {
  return (
    <Form action="/" className="flex border border-gray-300 rounded-lg p-3 items-center gap-4 w-full">
      <SearchInput />
      <FilterControls />
    </Form>
  );
}

