import type { ProductsResponse } from "@/lib/types/product";
import ProductsTable from "@/components/ProductsTable";
import Sidebar from "@/components/sidebar";
import Form from "../components/form/form";

const API_URL = "http://localhost:4000";
const defaultLimit = "6";

export default async function Home() {
  // we use the fetch() method to get the products from the API
  // in this fetch we sort using _sort and _order and we limit the number of products using _limit
  // we also use _expand to get the relational category data
  // we can use the other destructed variables like page, total and so on to create pagination or show info
  const { products, total, page, pages, limit }: ProductsResponse = await fetch(
    `${API_URL}/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
  ).then((res) => res.json());

  //console.log(products);

  return (
    <div
      className="min-h-screen md:grid 
      md:[grid-template-areas:'sidebar_form_form''sidebar_main_main']"
    >
      {/* Sidebar - fixed width, full height
      <Sidebar />*/}
      <Sidebar className="sticky top-0 bg-white h-screen md:[grid-area:sidebar] border-r border-r-neutral-300" />

      {/* Header - full width
      <Header /> */}

      {/* Main content area */}
      <main className="min-h-screen  md:[grid-area:main] p-6 ">
        {/* Products Search & Filter */}
        <Form />

        <ProductsTable products={products} />

        {/*<div className="">
          <Pagination />
        </div>*/}
      </main>
    </div>
  );
}
