"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { type ComponentRef, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const router = useRouter();
  
  // Track whether the component has mounted on the client
  // This is needed because createPortal uses `document` which doesn't exist during server-side prerendering
  const [mounted, setMounted] = useState(false);

  const dialogRef = useRef<ComponentRef<"dialog">>(null);

  // Set mounted to true after the component has mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!dialogRef.current?.open) dialogRef.current?.showModal();
  }, []);

  function onDismiss() {
    router.back();
  }

  // Prevent rendering during SSR/prerendering to avoid "document is not defined" error
  // The portal can only be created after the component has mounted on the client
  if (!mounted) return null;

  return createPortal(
    <dialog ref={dialogRef} className="relative z-10" onClose={onDismiss}>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900/40 transition-opacity">
        <div className="mb-4 grid w-fit grid-rows-[auto_1fr] place-self-end rounded-xl bg-neutral-100 p-4">
          <button
            type="button"
            onClick={onDismiss}
            aria-label="close modal"
            className="w-fit cursor-pointer place-self-start rounded-md bg-transparent p-2 transition hover:bg-purple-900/85 hover:text-white"
          >
            <X />
          </button>
          {children}
        </div>
      </div>
    </dialog>,
    document.querySelector("#modal-root") as HTMLDivElement,
  );
}
