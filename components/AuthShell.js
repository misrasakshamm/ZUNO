import Logo from "@/components/Logo";

// Shared two-column panel used by every auth screen (login, sign up, verify, OTP).
export default function AuthShell({ children, subtitle }) {
  return (
    <div className="auth-panel">
      <div className="auth-brand">
        <div className="brand-splash" />
        <div className="brand-logo"><Logo height={60} /></div>
        {subtitle && <div className="brand-sub">{subtitle}</div>}
        <p>Your World of Unlimited Stories</p>
      </div>
      <div className="auth-form-card">{children}</div>
    </div>
  );
}
