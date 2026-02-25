import { Modal } from "@/components/global";
import { Product } from "@/lib/types/product";

export default async function EditModal({
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
    <Modal>
      {/* should be replace with edit form/edit page component*/}
      <div>Edit: {product.title}</div>
    </Modal>
  );
}
