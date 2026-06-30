"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Acasă" },
  { href: "/camere", label: "Camere" },
  { href: "/restaurant", label: "Restaurant" },
  { href: "/conferinte", label: "Evenimente" },
  { href: "/despre", label: "Despre" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled
    ? "rgba(22,22,22,0.98)"
    : "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)";

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      transition: "all 0.4s ease",
      background: navBg,
      borderBottom: scrolled ? "1px solid rgba(201,168,76,0.25)" : "none",
      backdropFilter: scrolled ? "blur(8px)" : "none",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: scrolled ? "72px" : "90px", transition: "height 0.4s" }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.8rem", textDecoration: "none" }}>
          <div style={{ position: "relative", width: scrolled ? 64 : 84, height: scrolled ? 64 : 84, transition: "all 0.4s", flexShrink: 0 }}>
            <Image src="/images/logo.png" alt="ONYX B&B Hotel" fill style={{ objectFit: "contain" }} priority />
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-playfair)", fontSize: scrolled ? "1.1rem" : "1.3rem", fontWeight: 800, color: "var(--gold)", letterSpacing: "0.06em", lineHeight: 1, transition: "font-size 0.4s" }}>
              ONYX B&B
            </div>
            <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", fontWeight: 500, color: "rgba(255,255,255,0.7)", letterSpacing: "0.25em", textTransform: "uppercase", marginTop: "2px" }}>
              Hotel & Restaurant
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="nav-desktop">
          {links.map((l) => (
            <Link key={l.href} href={l.href} style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#fff",
              textDecoration: "none",
              padding: "0.3rem 0",
              borderBottom: "2px solid transparent",
              transition: "color 0.2s, border-color 0.2s",
              textShadow: "0 1px 4px rgba(0,0,0,0.8)",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold)"; e.currentTarget.style.borderBottomColor = "var(--gold)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderBottomColor = "transparent"; }}
            >{l.label}</Link>
          ))}
          <Link href="/contact" className="btn-gold" style={{ padding: "0.65rem 1.5rem", fontSize: "0.68rem" }}>Rezervă</Link>
        </nav>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="nav-mobile-btn" style={{
          background: "rgba(0,0,0,0.5)", border: "1px solid rgba(201,168,76,0.4)",
          cursor: "pointer", color: "var(--gold)", fontSize: "1.4rem",
          width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "rgba(22,22,22,0.99)", padding: "1.5rem 2rem 2rem", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: "block", padding: "0.9rem 0",
              fontFamily: "var(--font-inter)", fontSize: "0.9rem", fontWeight: 500,
              letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}>{l.label}</Link>
          ))}
          <div style={{ marginTop: "1.5rem" }}>
            <Link href="/contact" className="btn-gold" onClick={() => setOpen(false)} style={{ display: "block", textAlign: "center" }}>Rezervă acum</Link>
          </div>
        </div>
      )}

      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile-btn { display: none; }
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
