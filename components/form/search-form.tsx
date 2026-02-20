"use client";

export default function SearchForm() {
  return (
    <form>
      <input
        type="text"
        name="search"
        placeholder="Search products..."
        className="border border-gray-300 py-2 px-4 rounded w-full"
      />
    </form>
  )
}