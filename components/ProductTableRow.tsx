import { Edit, Trash2 } from "lucide-react";
import type { Product } from "@/app/types";

interface ProductTableRowProps {
  product: Product;
}

export default function ProductTableRow({ product }: ProductTableRowProps) {
  return (
    <tr className="border-b border-neutral-200">
      <td className="p-4 w-0"></td>
      <td className="p-4">{product.title}</td>
      <td className="p-4">{product.category?.name}</td>
      <td className="p-4">${product.price}</td>
      <td className="p-4">{product.stock}</td>
      <td className="p-4">{product.availabilityStatus}</td>
      <td className="p-4 flex gap-2">
        <button>
          <Edit size={16} />
        </button>
        <button>
          <Trash2 size={16} />
        </button>
      </td>
    </tr>
  );
}
