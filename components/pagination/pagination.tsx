// components/pagination/pagination.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalProducts: number;
  productsPerPage: number;
}

export default function Pagination({
  currentPage,
  totalPages,
  totalProducts,
  productsPerPage,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  const getPageNumbers = () => {
    const pages: number[] = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const showingFrom = (currentPage - 1) * productsPerPage + 1;
  const showingTo = Math.min(currentPage * productsPerPage, totalProducts);

  return (
    <div className="flex items-center justify-between px-4 py-3 border-t border-neutral-200 mt-2">

      {/* Left side - metadata text */}
      <p className="text-sm text-neutral-500">
        Showing {showingFrom} to {showingTo} of {totalProducts} products
      </p>

      {/* Right side - navigation buttons */}
      <div className="flex items-center gap-1">

        <button
          type="button"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded border border-neutral-200 text-sm text-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-neutral-50"
        >
          Previous
        </button>

        {getPageNumbers().map((page) => (
          <button
            type="button"
            key={page}
            onClick={() => goToPage(page)}
            className={page === currentPage
              ? "px-3 py-1 rounded border text-sm font-medium bg-purple-600 text-white border-purple-600"
              : "px-3 py-1 rounded border border-neutral-200 text-sm text-neutral-700 hover:bg-neutral-50"}
          >
            {page}
          </button>
        ))}

        <button
          type="button"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded border border-neutral-200 text-sm text-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-neutral-50"
        >
          Next
        </button>

      </div>
    </div>
  );
}