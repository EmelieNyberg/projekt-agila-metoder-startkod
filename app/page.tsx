import ProductsTable from "@/components/ProductsTable";
import type { ProductsResponse } from "./types";

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
    <div className="grid h-screen grid-cols-2 bg-gray-100">
      {/* Sidebar - fixed width, full height
      <Sidebar />*/}
      
      {/* Header - full width
      <Header /> */}

      {/* Products Search & Filter
      <Form /> */}

      {/* Main content area */}
      <main className="">
        <ProductsTable products={products} />

        {/*<div className="">
          <Pagination />
        </div>*/}
      </main>
    </div>
  )
}
