import { Suspense } from "react";
import type { ProductsResponse } from "@/lib/types/product";
import Sidebar from "@/components/sidebar";
<<<<<<< HEAD
import Form from "../components/form/form";
import Pagination from "@/components/pagination";
=======
import ProductFilterForm from "../components/form/product-filter-form";
import ProductTable from "@/components/product-table/product-table";
import PageHeader from "@/components/header/page-header";
import Pagination from "@/components/pagination/pagination";
>>>>>>> origin/dev

const API_URL = "http://localhost:4000";
const defaultLimit = "6";

export default async function Home({
  searchParams,
}: {
<<<<<<< HEAD
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;
=======
  searchParams: Promise<{
    search?: string;
    category?: string;
    status?: string;
  }>;
}) {
  const params = await searchParams;

  const search = params?.search || "";
  const searchQuery = search ? `&q=${search}` : "";

  // we use the fetch() method to get the products from the API
  // in this fetch we sort using _sort and _order and we limit the number of products using _limit
  // we also use _expand to get the relational category data
  // we can use the other destructed variables like page, total and so on to create pagination or show info
  const { products, total, page, pages, limit }: ProductsResponse = await fetch(
    `${API_URL}/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category${searchQuery}`,
  ).then((res) => res.json());
>>>>>>> origin/dev

  const { products, total, pages }: ProductsResponse = await fetch(
    `${API_URL}/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category&_page=${currentPage}`,
  ).then((res) => res.json());

  return (
    <div
      className="min-h-screen md:grid 
      md:[grid-template-areas:'sidebar_header_header''sidebar_form_form''sidebar_main_main']"
    >
      <Sidebar className="sticky top-0 bg-white h-screen md:[grid-area:sidebar] border-r border-r-neutral-300" />

<<<<<<< HEAD
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
=======
      {/* Header - full width */}
      <PageHeader />

      {/* Main content area */}
      <main className="min-h-screen  md:[grid-area:main] p-6 ">
        {/* Products Search & Filter */}
        <ProductFilterForm />

        <ProductTable products={products} />

        <Pagination
          currentPage={page}
          totalPages={pages}
          totalProducts={total}
          productsPerPage={limit}
        />
>>>>>>> origin/dev
      </main>
    </div>
  );
}