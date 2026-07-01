"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  { src: "/images/hotel-facade.png", alt: "ONYX B&B Hotel exterior" },
  { src: "/images/photo-1.jpg", alt: "ONYX B&B" },
  { src: "/images/restaurant-1.jpg", alt: "Restaurant ONYX" },
  { src: "/images/photo-3.jpg", alt: "ONYX B&B camere" },
  { src: "/images/photo-5.jpg", alt: "ONYX B&B facilități" },
];

const ctaButtons = [
  { label: "Rezervă Cameră", href: "/camere", primary: true },
  { label: "Restaurant", href: "/restaurant", primary: false },
  { label: "Evenimente", href: "/conferinte", primary: false },
  { label: "Contact", href: "/contact", primary: false },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ position: "relative", height: "72vh", minHeight: 520, overflow: "hidden" }}>

      {/* Slides */}
      {slides.map((slide, i) => (
        <div key={i} style={{
          position: "absolute", inset: 0,
          opacity: i === current ? 1 : 0,
          zIndex: i === current ? 1 : 0,
          transition: "opacity 1.5s ease-in-out",
        }}>
          <Image src={slide.src} alt={slide.alt} fill style={{ objectFit: "cover", objectPosition: "center" }} priority={i === 0} />
        </div>
      ))}

      {/* Gradient overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.65) 100%)" }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 3, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 1.5rem 2rem" }}>

        {/* Badge */}
        <div className="hero-badge" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: "1px solid rgba(201,168,76,0.65)", padding: "0.6rem 1.8rem", marginBottom: "1.6rem", backdropFilter: "blur(4px)", background: "rgba(0,0,0,0.25)" }}>
          <span style={{ color: "var(--gold)", fontSize: "clamp(0.75rem, 1.6vw, 1rem)", fontFamily: "var(--font-inter)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            ★★★ Hotel · 100m de Vama Borș · E60
          </span>
        </div>

        {/* Welcome */}
        <p className="hero-welcome" style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(0.85rem, 2vw, 1.2rem)", fontWeight: 500, color: "rgba(255,255,255,0.85)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
          Bine ai venit la
        </p>

        {/* Title */}
        <h1 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, color: "#fff", lineHeight: 1, letterSpacing: "-0.02em", margin: "0 0 0.8rem 0", textShadow: "0 2px 30px rgba(0,0,0,0.4)" }}>
          <span style={{ display: "block", fontSize: "clamp(3rem, 9vw, 7.5rem)" }}>ONYX</span>
          <span style={{ display: "block", fontSize: "clamp(1.5rem, 4.5vw, 3.75rem)", letterSpacing: "0.08em" }}>
            B<span style={{ fontFamily: "var(--font-inter)", fontWeight: 900 }}>&</span>B
          </span>
        </h1>

        {/* Tagline */}
        <p className="hero-tagline" style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(0.9rem, 2.2vw, 1.4rem)", fontWeight: 400, color: "rgba(255,255,255,0.92)", letterSpacing: "0.08em", margin: "0.5rem 0 1.6rem" }}>
          Hotel · Restaurant · Evenimente
        </p>

        {/* CTA Buttons */}
        <div className="hero-btns" style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "1.6rem" }}>
          {ctaButtons.map((btn) => (
            <Link key={btn.label} href={btn.href}
              className={btn.primary ? "btn-gold" : "btn-white"}
              style={{ fontSize: "0.78rem", padding: "0.9rem 2rem", fontWeight: 700, letterSpacing: "0.1em" }}
            >
              {btn.label}
            </Link>
          ))}
        </div>

        {/* Phone numbers */}
        <div className="hero-contact" style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center", background: "rgba(0,0,0,0.4)", padding: "0.9rem 2.5rem", backdropFilter: "blur(6px)", border: "1px solid rgba(201,168,76,0.25)" }}>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", fontWeight: 700, color: "var(--gold)", letterSpacing: "0.12em", textTransform: "uppercase", alignSelf: "center" }}>Rezervări:</span>
          {[["0732 403 464", "tel:0732403464"], ["0753 527 114", "tel:0753527114"]].map(([num, href]) => (
            <a key={num} href={href} style={{ fontFamily: "var(--font-inter)", fontSize: "1.1rem", fontWeight: 700, color: "#fff", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.93-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              {num}
            </a>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
      <div style={{ position: "absolute", bottom: "1.2rem", left: "50%", transform: "translateX(-50%)", zIndex: 4, display: "flex", gap: "0.5rem" }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{
            width: i === current ? 32 : 8, height: 8,
            background: i === current ? "var(--gold)" : "rgba(255,255,255,0.35)",
            border: "none", cursor: "pointer", transition: "all 0.35s", padding: 0,
          }} />
        ))}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .hero-badge { padding: 0.45rem 1rem !important; margin-bottom: 1rem !important; }
          .hero-badge span { font-size: 0.6rem !important; letter-spacing: 0.07em !important; }
          .hero-welcome { font-size: 0.7rem !important; letter-spacing: 0.18em !important; }
          .hero-tagline { font-size: 0.85rem !important; }
          .hero-btns a { font-size: 0.58rem !important; padding: 0.65rem 1rem !important; }
          .hero-contact { gap: 0.8rem !important; padding: 0.7rem 1.2rem !important; }
          .hero-contact a { font-size: 0.88rem !important; }
        }
      `}</style>
    </section>
  );
}
