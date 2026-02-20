import type { Product } from "@/app/types";
import ProductTableRow from "./ProductTableRow";

interface ProductsTableProps {
  products: Product[];
}

export default function ProductsTable({ products }: ProductsTableProps) {
  return (
    <table className="w-full">
      <thead>
        <tr className="text-left">
          <th className="p-4 w-0"></th>
          <th className="p-4">Product</th>
          <th className="p-4">Category</th>
          <th className="p-4">Price</th>
          <th className="p-4">Stock</th>
          <th className="p-4">Status</th>
          <th className="p-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductTableRow key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
}
