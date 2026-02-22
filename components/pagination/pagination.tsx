// components/pagination/pagination.tsx
// Stage 3: Added click logic and URL param syncing
// Previous/Next now clickable
// URL updates to ?page=2 when clicking pages
// Previous disabled on page 1, Next disabled on last page
//

"use client"; // This component needs to be a client component to use hooks like useRouter and useSearchParams

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
}:

//click logic and URL param syncing added in Stage 3, so these props are now required
PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // This function updates the URL when a page is clicked
  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6">

      {/* Metadata text - still static, dynamic in Stage 5 */}
      <p className="text-sm text-gray-500">
        Showing 1 to 6 of 248 products
      </p>

      <div className="flex items-center gap-2">

        {/* Previous — now has onClick and disabled state */}
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded border text-sm
            disabled:opacity-40 disabled:cursor-not-allowed
            hover:bg-gray-100"
        >
          Previous
        </button>

        {/* Page numbers still hardcoded - dynamic in Stage 4 */}
        <button
          onClick={() => goToPage(1)}
          className="px-3 py-1 rounded border text-sm
            bg-purple-600 text-white border-purple-600"
        >
          1
        </button>
        <button
          onClick={() => goToPage(2)}
          className="px-3 py-1 rounded border text-sm hover:bg-gray-100"
        >
          2
        </button>
        <button
          onClick={() => goToPage(3)}
          className="px-3 py-1 rounded border text-sm hover:bg-gray-100"
        >
          3
        </button>

        {/* Next — now has onClick and disabled state */}
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