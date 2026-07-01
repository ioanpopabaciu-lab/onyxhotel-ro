"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Acasă" },
  { href: "/camere", label: "Hotel" },
  { href: "/restaurant", label: "Restaurant" },
  { href: "/conferinte", label: "Evenimente" },
  { href: "/catering", label: "Catering" },
  { href: "/companii", label: "Companii" },
  { href: "/galerie", label: "Galerie" },
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
    ? "#FFFFFF"
    : "linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 65%, transparent 100%)";
  const linkColor = scrolled ? "#1a1a1a" : "#fff";

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      transition: "all 0.4s ease",
      background: navBg,
      borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "none",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.07)" : "none",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "0 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: scrolled ? "68px" : "86px", transition: "height 0.4s",
      }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", marginTop: scrolled ? "0px" : "10px" }}>
          <div style={{ position: "relative", width: scrolled ? 170 : 210, height: scrolled ? 62 : 76, transition: "all 0.4s", flexShrink: 0 }}>
            <Image src={scrolled ? "/images/logo.png" : "/images/logo-white.png"} alt="ONYX B&B Hotel & Restaurant" fill style={{ objectFit: "contain", objectPosition: "left center" }} priority />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "1.5rem" }} className="nav-desktop">
          {links.map((l) => (
            <Link key={l.href} href={l.href} style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.92rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: linkColor,
              textDecoration: "none",
              padding: "0.3rem 0",
              borderBottom: "2px solid transparent",
              transition: "color 0.2s, border-color 0.2s",
              textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.7)",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold)"; e.currentTarget.style.borderBottomColor = "var(--gold)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = linkColor; e.currentTarget.style.borderBottomColor = "transparent"; }}
            >{l.label}</Link>
          ))}
          <Link href="/contact" className="btn-gold" style={{ padding: "0.62rem 1.4rem", fontSize: "0.66rem", marginLeft: "0.5rem" }}>Rezervă</Link>
        </nav>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="nav-mobile-btn" style={{
          background: scrolled ? "rgba(0,0,0,0.05)" : "rgba(0,0,0,0.4)",
          border: scrolled ? "1px solid rgba(0,0,0,0.1)" : "1px solid rgba(201,168,76,0.4)",
          cursor: "pointer", color: scrolled ? "#1a1a1a" : "var(--gold)", fontSize: "1.3rem",
          width: 42, height: 42, display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.3s",
        }}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#FFFFFF", padding: "1.5rem 2rem 2rem", borderTop: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: "block", padding: "0.85rem 0",
              fontFamily: "var(--font-inter)", fontSize: "0.88rem", fontWeight: 600,
              letterSpacing: "0.08em", textTransform: "uppercase", color: "#1a1a1a", textDecoration: "none",
              borderBottom: "1px solid rgba(0,0,0,0.05)",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#1a1a1a")}
            >{l.label}</Link>
          ))}
          <div style={{ marginTop: "1.5rem" }}>
            <Link href="/contact" className="btn-gold" onClick={() => setOpen(false)} style={{ display: "block", textAlign: "center" }}>Rezervă acum</Link>
          </div>
        </div>
      )}

      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile-btn { display: none; }
        @media (max-width: 1100px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
