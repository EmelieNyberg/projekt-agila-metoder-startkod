import AddProductForm from "@/components/form/add-product-form";
import { Modal } from "@/components/global";

export default function EditModal() {
  return (
    <Modal>
      {/* should be replace with edit form/edit page component*/}
      <AddProductForm />
    </Modal>
  );
}
