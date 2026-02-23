import type { ProductsResponse } from "@/lib/types/product";
import Sidebar from "@/components/sidebar";
import ProductFilterForm from "../components/form/product-filter-form";
import ProductTable from "@/components/product-table/product-table";
import PageHeader from "@/components/header/page-header";
import Pagination from "@/components/pagination/pagination";
import EmptyState from "../components/form/empty-state"

const API_URL = "http://localhost:4000";
const defaultLimit = "6";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    category?: string;
    status?: string;
    page?: string;
  }>;
}) {
  const params = await searchParams;

  const search = params?.search || "";
  const category = params?.category || "";
  const currentPage = Number(params?.page) || 1;

  // Fetch categories to dropdown
  const categories = await fetch(`${API_URL}/categories`, {
    cache: "no-store",
  }).then((res) => res.json());

  // Build query for products
  let query = `_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category&_page=${currentPage}`;

  if (search) {
    query += `&q=${search}`;
  }

  if (category) {
    query += `&categoryId=${category}`;
  }

  // we use the fetch() method to get the products from the API
  // in this fetch we sort using _sort and _order and we limit the number of products using _limit
  // we also use _expand to get the relational category data
  // we can use the other destructed variables like page, total and so on to create pagination or show info
  const { products, total, page, pages, limit }: ProductsResponse = await fetch(
    `${API_URL}/products?${query}`,
  ).then((res) => res.json());

  console.log("QUERY:", `${API_URL}/products?${query}`);

  return (
    <div
      className="min-h-screen md:grid 
      md:[grid-template-areas:'sidebar_header_header''sidebar_form_form''sidebar_main_main']"
    >
      <Sidebar className="sticky top-0 bg-white h-screen md:[grid-area:sidebar] border-r border-r-neutral-300" />

      {/* Header - full width */}
      <PageHeader />

      {/* Main content area */}
      <main className="min-h-screen  md:[grid-area:main] p-6 ">
        {/* Products Search & Filter */}
        <ProductFilterForm 
          categories={categories}
          search={search}
          category={category}
        />

        {/* Product listing */}
        {products.length === 0 ? (
          <EmptyState />
        ) : (
          <ProductTable products={products} />
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={pages}
          totalProducts={total}
          productsPerPage={Number(defaultLimit)}
        />
      </main>
    </div>
  );
}