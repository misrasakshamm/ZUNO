"use client";

import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import AuthShell from "@/components/AuthShell";

export default function OtpPage() {
  const router = useRouter();
  const refs = useRef([]);

  const onChange = (i, e) => {
    const v = e.target.value.replace(/\D/g, "").slice(-1);
    e.target.value = v;
    if (v && refs.current[i + 1]) refs.current[i + 1].focus();
  };

  const onKeyDown = (i, e) => {
    if (e.key === "Backspace" && !e.target.value && refs.current[i - 1]) refs.current[i - 1].focus();
  };

  return (
    <AuthShell subtitle="VERIFY OTP">
      <form className="auth-form" onSubmit={(e) => { e.preventDefault(); router.push("/"); }}>
        <div className="otp-row">
          {[0, 1, 2, 3, 4].map((i) => (
            <input
              key={i}
              ref={(el) => (refs.current[i] = el)}
              inputMode="numeric"
              maxLength={1}
              aria-label={`Digit ${i + 1}`}
              onChange={(e) => onChange(i, e)}
              onKeyDown={(e) => onKeyDown(i, e)}
            />
          ))}
        </div>
        <button className="auth-btn">Verify</button>
        <p className="auth-note">
          Didn&apos;t receive any code?{" "}
          <button type="button">Resend code</button>
        </p>
        <p className="auth-note center-link"><Link href="/verify">Change number</Link></p>
      </form>
    </AuthShell>
  );
}
