"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

function Dialog({children, open}: {children: React.ReactNode; open: boolean}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    }
  }, [open])

  const closeDialog = () => {
    router.back();
  };
  
  return (
    <dialog ref={dialogRef} onClick={closeDialog}>
      {children}
    </dialog>
  );
}

export default Dialog;