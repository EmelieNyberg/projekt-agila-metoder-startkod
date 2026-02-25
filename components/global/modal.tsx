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

  return createPortal(
    <div className="modal-backdrop">
      <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
        {children}
        <button
          type="button"
          onClick={onDismiss}
          className="close-button"
          aria-label="close modal"
        >
          <X />
        </button>
      </dialog>
    </div>,
    document.querySelector("#modal-root") as HTMLDivElement,
  );
}
