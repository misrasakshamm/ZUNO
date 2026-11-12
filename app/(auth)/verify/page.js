"use client";

import { useRouter } from "next/navigation";
import AuthShell from "@/components/AuthShell";

export default function VerifyPage() {
  const router = useRouter();

  return (
    <AuthShell>
      <form className="auth-form" onSubmit={(e) => { e.preventDefault(); router.push("/otp"); }}>
        <div className="phone-row">
          <div className="phone-code"><span className="flag-in" /> +91</div>
          <input required inputMode="numeric" pattern="[0-9]{10}" placeholder="Enter your number" aria-label="Mobile number" />
        </div>
        <button className="auth-btn">Verify</button>
      </form>
    </AuthShell>
  );
}
