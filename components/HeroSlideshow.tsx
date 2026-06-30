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
    <section style={{ position: "relative", height: "100vh", minHeight: 640, overflow: "hidden" }}>

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
      <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "linear-gradient(to bottom, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.18) 40%, rgba(0,0,0,0.78) 100%)" }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 3, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 1.5rem" }}>

        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: "1px solid rgba(201,168,76,0.65)", padding: "0.7rem 2rem", marginBottom: "2.2rem", backdropFilter: "blur(4px)", background: "rgba(0,0,0,0.25)" }}>
          <span style={{ color: "var(--gold)", fontSize: "clamp(0.85rem, 1.6vw, 1.05rem)", fontFamily: "var(--font-inter)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
            ★★★ Hotel · 100m de Vama Borș · E60
          </span>
        </div>

        {/* Welcome */}
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1rem, 2.2vw, 1.3rem)", fontWeight: 500, color: "rgba(255,255,255,0.85)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem" }}>
          Bine ai venit la
        </p>

        {/* Title */}
        <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(3.5rem, 10vw, 8.5rem)", fontWeight: 900, color: "#fff", lineHeight: 0.9, letterSpacing: "-0.02em", marginBottom: "1.4rem", textShadow: "0 2px 30px rgba(0,0,0,0.4)" }}>
          ONYX B<span style={{ fontFamily: "var(--font-inter)", fontWeight: 900 }}>&</span>B
        </h1>

        {/* Taglines */}
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.2rem, 2.6vw, 1.6rem)", fontWeight: 400, color: "rgba(255,255,255,0.92)", letterSpacing: "0.08em", marginBottom: "3rem" }}>
          Hotel · Restaurant · Evenimente
        </p>

        {/* 4 CTA Buttons */}
        <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", justifyContent: "center" }}>
          {ctaButtons.map((btn) => (
            <Link key={btn.label} href={btn.href}
              className={btn.primary ? "btn-gold" : "btn-white"}
              style={{ fontSize: "0.67rem", padding: "0.82rem 1.8rem" }}
            >
              {btn.label}
            </Link>
          ))}
        </div>

        {/* Quick contact */}
        <div style={{ marginTop: "2.8rem", display: "flex", gap: "2.5rem", flexWrap: "wrap", justifyContent: "center" }}>
          {[["0732 403 464", "tel:0732403464"], ["0753 527 114", "tel:0753527114"]].map(([num, href]) => (
            <a key={num} href={href} style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "rgba(255,255,255,0.72)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.72)")}
            >
              <span style={{ color: "var(--gold)" }}>📞</span> {num}
            </a>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
      <div style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", zIndex: 4, display: "flex", gap: "0.5rem" }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{
            width: i === current ? 32 : 8, height: 8,
            background: i === current ? "var(--gold)" : "rgba(255,255,255,0.35)",
            border: "none", cursor: "pointer", transition: "all 0.35s", padding: 0,
          }} />
        ))}
      </div>
    </section>
  );
}
