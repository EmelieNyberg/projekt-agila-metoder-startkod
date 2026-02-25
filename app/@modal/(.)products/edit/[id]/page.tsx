import { Modal } from "@/components/global";

export default async function EditModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <Modal>{id}</Modal>;
}
