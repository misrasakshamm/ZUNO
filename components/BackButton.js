"use client";

import { useRouter } from "next/navigation";

// Back arrow icon, same style as the Figma "back" icon. Goes to the previous page.
export default function BackButton({ label = "Go back" }) {
  const router = useRouter();

  const goBack = () => {
    if (window.history.length > 1) router.back();
    else router.push("/");
  };

  return (
    <button type="button" className="back-btn" onClick={goBack} aria-label={label}>
      <svg
        viewBox="0 0 24 24"
        width="30"
        height="30"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 14 4 9l5-5" />
        <path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11" />
      </svg>
    </button>
  );
}
