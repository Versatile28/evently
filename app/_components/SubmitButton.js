"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ children, pendingLabel }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-accent-500 px-3 py-2 text-primary-50 fw-semibold border-0"
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
