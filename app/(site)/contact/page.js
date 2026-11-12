"use client";

import { useState } from "react";
import BackButton from "@/components/BackButton";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <div className="container page-pad">
      <BackButton />
      <h1 className="page-title">Contact Us</h1>
      <p className="page-sub">Questions, feedback or support? We would love to hear from you.</p>
      <div className="contact-grid">
        <form className="form" onSubmit={submit}>
          {sent && <div className="success">Thanks! Your message has been noted (demo only, nothing is sent).</div>}
          <div className="field"><label>Full name</label><input required placeholder="Your name" /></div>
          <div className="field"><label>Email</label><input required type="email" placeholder="you@example.com" /></div>
          <div className="field"><label>Message</label><textarea required placeholder="How can we help?" /></div>
          <button className="btn btn-red">Send Message</button>
        </form>
        <div className="info-card">
          <div><h4>Email</h4><p>support@zuno.example</p></div>
          <div><h4>Phone</h4><p>+00 000 000 0000</p></div>
          <div><h4>Hours</h4><p>Mon – Sat, 9:00 – 18:00</p></div>
        </div>
      </div>
    </div>
  );
}
