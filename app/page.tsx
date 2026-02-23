import { Suspense } from "react";
import type { ProductsResponse } from "@/lib/types/product";
import ProductsTable from "@/components/ProductsTable";
import Sidebar from "@/components/sidebar";
import Form from "../components/form/form";
import Pagination from "@/components/pagination";

const API_URL = "http://localhost:4000";
const defaultLimit = "6";

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;

  const { products, total, pages }: ProductsResponse = await fetch(
    `${API_URL}/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category&_page=${currentPage}`,
  ).then((res) => res.json());

  return (
    <div
      className="min-h-screen md:grid 
      md:[grid-template-areas:'sidebar_form_form''sidebar_main_main']"
    >
      <Sidebar className="sticky top-0 bg-white h-screen md:[grid-area:sidebar] border-r border-r-neutral-300" />

      <main className="min-h-screen md:[grid-area:main] p-6">
        <Form />
        <ProductsTable products={products} />

        <Suspense fallback={null}> // Suspense wrapper for the Pagination component to handle loading state
          <Pagination
            currentPage={currentPage}
            totalPages={pages}
            totalProducts={total}
            productsPerPage={Number(defaultLimit)}
          />
        </Suspense>
      </main>
    </div>
  );
}