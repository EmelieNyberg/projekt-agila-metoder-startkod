"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { type ComponentRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const router = useRouter();

  // create ref element
  const dialogRef = useRef<ComponentRef<"dialog">>(null);

  // open modal for current modal element (ref) if not already open
  useEffect(() => {
    if (!dialogRef.current?.open) dialogRef.current?.showModal();
  }, []);

  // navigate back to close modal
  function onDismiss() {
    router.back();
  }

  // createPortal: render modal content inside #modal-root element
  return createPortal(
    <div className="modal-backdrop">
      <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="close modal"
          className="cursor-pointer rounded-md bg-transparent p-2 transition hover:bg-purple-900/85 hover:text-white"
        >
          <X />
        </button>
        {children}
      </dialog>
    </div>,
    document.querySelector("#modal-root") as HTMLDivElement,
  );
}
