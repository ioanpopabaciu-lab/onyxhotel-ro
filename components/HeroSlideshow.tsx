"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  { src: "/images/hotel-facade.png", alt: "ONYX B&B Hotel exterior" },
  { src: "/images/photo-1.jpg", alt: "Hotel ONYX" },
  { src: "/images/photo-2.jpg", alt: "Restaurant ONYX" },
  { src: "/images/photo-3.jpg", alt: "Camere ONYX" },
  { src: "/images/photo-4.jpg", alt: "Facilități ONYX" },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
      {/* Slides */}
      {slides.map((slide, i) => (
        <div key={i} style={{
          position: "absolute", inset: 0,
          opacity: i === current ? 1 : 0,
          transition: "opacity 1.2s ease-in-out",
          zIndex: i === current ? 1 : 0,
        }}>
          <Image src={slide.src} alt={slide.alt} fill style={{ objectFit: "cover", objectPosition: "center" }} priority={i === 0} />
        </div>
      ))}

      {/* Gradient overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.7) 100%)" }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 3, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 1.5rem" }}>

        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: "1px solid rgba(201,168,76,0.6)", padding: "0.4rem 1.2rem", marginBottom: "2rem" }}>
          <span style={{ color: "var(--gold)", fontSize: "0.65rem", fontFamily: "var(--font-inter)", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase" }}>
            ★★★ · 100m de Vama Borș · E60
          </span>
        </div>

        {/* Title */}
        <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 900, color: "#fff", lineHeight: 0.95, letterSpacing: "-0.01em", marginBottom: "0.3rem", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
          ONYX B&B
        </h1>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(0.8rem, 2vw, 1.1rem)", fontWeight: 300, color: "var(--gold)", letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
          Hotel & Restaurant
        </p>

        {/* Divider */}
        <div style={{ width: 60, height: 2, background: "var(--gold)", margin: "0 auto 1.8rem" }} />

        {/* Subtitle */}
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(0.9rem, 2vw, 1.05rem)", fontWeight: 300, color: "rgba(255,255,255,0.9)", maxWidth: 560, lineHeight: 1.8, marginBottom: "2.5rem", textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}>
          Hotel de 3 stele în Borș, Bihor — la 100 de metri de frontiera România–Ungaria, direct pe E60. Ideal pentru tranzit, transportatori și delegații corporate.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/contact" className="btn-gold">Rezervă acum</Link>
          <Link href="/camere" className="btn-white">Vezi camerele</Link>
        </div>

        {/* Contact quick */}
        <div style={{ marginTop: "2.5rem", display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="tel:0732403464" style={{ fontFamily: "var(--font-inter)", fontSize: "0.82rem", color: "rgba(255,255,255,0.8)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span style={{ color: "var(--gold)" }}>📞</span> 0732 403 464
          </a>
          <a href="tel:0753527114" style={{ fontFamily: "var(--font-inter)", fontSize: "0.82rem", color: "rgba(255,255,255,0.8)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span style={{ color: "var(--gold)" }}>📞</span> 0753 527 114
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", zIndex: 4, display: "flex", gap: "0.6rem" }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{
            width: i === current ? 28 : 8, height: 8,
            background: i === current ? "var(--gold)" : "rgba(255,255,255,0.4)",
            border: "none", cursor: "pointer", transition: "all 0.3s",
            padding: 0,
          }} />
        ))}
      </div>
    </section>
  );
}
