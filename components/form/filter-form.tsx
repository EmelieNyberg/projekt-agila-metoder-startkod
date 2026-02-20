"use client";

export default function FilterForm() {
  return (
    <form className="flex gap-4 items-center">

      {/* Category Dropdown */}
      <select
        name="category"
        className="border border-gray-300 py-2 px-2 rounded"
        defaultValue=""
      >
        <option value="">All categories</option>
        {/* Categories will be added later */}
      </select>

      {/* Status Dropdown */}
      <select
        name="status"
        className="border border-gray-300 py-2 px-2 rounded"
        defaultValue=""
      >
        <option value="">All status</option>
        <option value="in-stock">In stock</option>
        <option value="low-stock">Low stock</option>
        <option value="out-of-stock">Out of stock</option>
      </select>

      {/* Submit Button */}
      <button type="submit" className="border border-gray-300 px-4 py-2 rounded">
        Filter
      </button>

    </form>
  );
}