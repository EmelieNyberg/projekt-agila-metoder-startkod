"use client";

import { Filter, ChevronDown } from "lucide-react";

type Category = {
  id: number;
  name: string;
};

type Props = {
  categories: Category[];
  category: string;
};

export default function FilterControls({
  categories,
  category,
}: Props) {
  return (
    <div className="flex gap-3 items-center">

      {/* Category Dropdown */}
      <div className="relative">
        <select
          name="category"
          className="appearance-none rounded-lg border border-gray-300 bg-white px-3 pr-10 py-2 text-sm"
          defaultValue={category}
        >
          <option value="">All categories</option>
          {/* Map categories for dropdown */}
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      </div>

      {/* Status Dropdown */}
      <div className="relative">
        <select
          name="status"
          className="appearance-none rounded-lg border border-gray-300 bg-white px-3 pr-10 py-2 text-sm"
          defaultValue=""
        >
          <option value="">All status</option>
          <option value="in-stock">In stock</option>
          <option value="low-stock">Low stock</option>
          <option value="out-of-stock">Out of stock</option>
        </select>

        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      </div>

      {/* Submit Button */}
      <button type="submit" className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm">
        <Filter className="w-4 h-4 text-gray-500" />
        Filter
      </button>

    </div>
  );
}