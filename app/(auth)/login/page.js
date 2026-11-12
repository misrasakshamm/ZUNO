"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthShell from "@/components/AuthShell";

export default function LoginPage() {
  const router = useRouter();

  return (
    <AuthShell>
      <form className="auth-form" onSubmit={(e) => { e.preventDefault(); router.push("/"); }}>
        <input required type="email" placeholder="Email" aria-label="Email" />
        <input required type="password" placeholder="Password" aria-label="Password" />
        <button className="auth-btn">Login</button>
        <button type="button" className="auth-btn dark">
          Login with Google <span className="g-icon">G</span>
        </button>
        <button type="button" className="auth-btn dark">
          Login with Facebook <span className="f-icon">f</span>
        </button>
        <p className="auth-note">
          Don&apos;t have an account? <Link href="/signup">Sign up</Link>
        </p>
      </form>
    </AuthShell>
  );
}
