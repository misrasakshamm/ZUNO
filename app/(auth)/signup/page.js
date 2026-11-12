"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthShell from "@/components/AuthShell";

export default function SignupPage() {
  const router = useRouter();

  return (
    <AuthShell>
      <form className="auth-form" onSubmit={(e) => { e.preventDefault(); router.push("/verify"); }}>
        <input required placeholder="Name" aria-label="Name" />
        <input required type="email" placeholder="Email" aria-label="Email" />
        <input required type="password" placeholder="Create password" aria-label="Create password" />
        <button className="auth-btn">Sign up</button>
        <button type="button" className="auth-btn dark">
          Sign up with Google <span className="g-icon">G</span>
        </button>
        <button type="button" className="auth-btn dark">
          Sign up with Facebook <span className="f-icon">f</span>
        </button>
        <p className="auth-note">
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </form>
    </AuthShell>
  );
}
