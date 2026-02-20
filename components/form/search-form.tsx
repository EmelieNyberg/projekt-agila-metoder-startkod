"use client";

import { Search } from "lucide-react";

export default function SearchForm() {
  return (
    <form className="flex-1">
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          name="search"
          placeholder="Search products..."
          className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
        />
      </div>
    </form>

  )
}