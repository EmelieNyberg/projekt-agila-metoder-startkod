// components/pagination/pagination.tsx
// Stage 2: Added TypeScript props interface
// Component now accepts data from outside instead of hardcoded values
// Logic and URL handling coming in Stage 3

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
  return (
    <div className="flex flex-col items-center gap-4 mt-6">

      {/* Metadata text - will be dynamic in Stage 5 */} // For now, it’s hardcoded to show 1 to 6 of 248 products

      <p className="text-sm text-gray-500">
        Showing 1 to 6 of 248 products
      </p>

      {/* Pagination controls */}
      <div className="flex items-center gap-2">

        {/* Previous button - will be disabled on page 1 in Stage 3 */}
        <button className="px-3 py-1 rounded border text-sm hover:bg-gray-100">
          Previous
        </button>

        {/* Page numbers - hardcoded for now, dynamic in Stage 4 */}
        <button className="px-3 py-1 rounded border text-sm bg-purple-600 text-white border-purple-600">
          1
        </button>
        <button className="px-3 py-1 rounded border text-sm hover:bg-gray-100">
          2
        </button>
        <button className="px-3 py-1 rounded border text-sm hover:bg-gray-100">
          3
        </button>

        {/* Next button - will be disabled on last page in Stage 3 */}
        <button className="px-3 py-1 rounded border text-sm hover:bg-gray-100">
          Next
        </button>

      </div>
    </div>
  );
}