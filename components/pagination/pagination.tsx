// Stage 4: Page numbers now dynamic using props

"use client";

import { useRouter, useSearchParams } from "next/navigation";

// Props for the Pagination component
interface PaginationProps { 
  currentPage: number;
  totalPages: number;
  totalProducts: number;
  productsPerPage: number;
}
// Pagination component to display page numbers and navigation buttons
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
    <div className="flex flex-col items-center gap-4 mt-6">
      <p className="text-sm text-gray-500">
        //Showing 1 to 6 of 248 products//-----static line before swtuching to dynamic line using props
          Showing {showingFrom} to {showingTo} of {totalProducts} products //-----dynamic line using props //

      </p>
      <div className="flex items-center gap-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded border text-sm
            disabled:opacity-40 disabled:cursor-not-allowed
            hover:bg-gray-100"
        >
          Previous
        </button>

        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className="px-3 py-1 rounded border text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100"

              
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded border text-sm
            disabled:opacity-40 disabled:cursor-not-allowed
            hover:bg-gray-100"
        >
          Next
        </button>
      </div>
    </div>
  );
}