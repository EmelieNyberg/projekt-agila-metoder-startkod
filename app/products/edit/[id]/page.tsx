import type { Product } from "@/lib/types/product";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`http://localhost:4000/products/${id}`);

  if (!res.ok)
    return (
      <h1>Couldn't not find product, make sure the product id is valid!</h1>
    );

  const product = (await res.json()) as Product;

  return (
    <div>
      <h1 className="font-bold font-xl md:font-2xl">Edit: {product.title}</h1>
      {/* Form goes here */}
    </div>
  );
}
