"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const allImages = [
  { src: "/images/hotel-facade.png", alt: "ONYX B&B Exterior", cat: "hotel" },
  { src: "/images/hotel-1.jpg", alt: "Cameră Single ONYX", cat: "hotel" },
  { src: "/images/hotel-2.jpg", alt: "Cameră Dublă ONYX", cat: "hotel" },
  { src: "/images/hotel-3.jpg", alt: "Cameră Triplă ONYX", cat: "hotel" },
  { src: "/images/hotel-4.jpg", alt: "Facilități Hotel ONYX", cat: "hotel" },
  { src: "/images/restaurant-1.jpg", alt: "Restaurant ONYX interior", cat: "restaurant" },
  { src: "/images/restaurant-2.jpg", alt: "Restaurant ONYX detalii", cat: "restaurant" },
  { src: "/images/photo-1.jpg", alt: "ONYX B&B", cat: "hotel" },
  { src: "/images/photo-2.jpg", alt: "ONYX B&B interior", cat: "hotel" },
  { src: "/images/photo-3.jpg", alt: "Restaurant preparate", cat: "restaurant" },
  { src: "/images/photo-4.jpg", alt: "ONYX B&B facilități", cat: "hotel" },
  { src: "/images/photo-5.jpg", alt: "ONYX B&B exterior", cat: "hotel" },
  { src: "/images/photo-6.jpg", alt: "Restaurant ONYX", cat: "restaurant" },
  { src: "/images/photo-7.jpg", alt: "ONYX B&B", cat: "hotel" },
  { src: "/images/photo-8.jpg", alt: "Restaurant detalii", cat: "restaurant" },
  { src: "/images/photo-9.jpg", alt: "ONYX B&B parcare", cat: "hotel" },
];

const cats = [
  { key: "toate", label: "Toate fotografiile" },
  { key: "hotel", label: "Hotel & Camere" },
  { key: "restaurant", label: "Restaurant & Bar" },
];

export default function GaleriePage() {
  const [activeCat, setActiveCat] = useState("toate");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = activeCat === "toate" ? allImages : allImages.filter((img) => img.cat === activeCat);

  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "38vh", minHeight: 300, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image src="/images/hotel-facade.png" alt="Galerie ONYX B&B" fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.62)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 2rem" }}>
          <p className="section-label">Imagini</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#fff" }}>Galerie foto</h1>
          <div className="gold-line" />
          <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.75)", fontSize: "0.82rem", marginTop: "0.8rem" }}>
            Hotel · Restaurant · Facilități
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section style={{ padding: "3rem 2rem 0", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: "0.8rem", justifyContent: "center", flexWrap: "wrap" }}>
          {cats.map((c) => (
            <button key={c.key} onClick={() => setActiveCat(c.key)} style={{
              padding: "0.68rem 2rem",
              fontFamily: "var(--font-inter)", fontSize: "0.72rem", fontWeight: 700,
              letterSpacing: "0.12em", textTransform: "uppercase",
              background: activeCat === c.key ? "var(--gold)" : "transparent",
              color: activeCat === c.key ? "#1a1a1a" : "var(--text-mid)",
              border: activeCat === c.key ? "1.5px solid var(--gold)" : "1.5px solid var(--border)",
              cursor: "pointer", transition: "all 0.25s",
            }}>
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* Photo grid */}
      <section style={{ padding: "2.5rem 2rem 7rem", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.8rem" }} className="photo-grid">
          {filtered.map((img, i) => (
            <div key={i} style={{ position: "relative", paddingBottom: "72%", overflow: "hidden", cursor: "zoom-in" }}
              onClick={() => setLightbox(img.src)}
            >
              <div style={{ position: "absolute", inset: 0 }}>
                <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover", transition: "transform 0.45s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", transition: "background 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0)")}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            style={{ position: "fixed", inset: 0, zIndex: 999, background: "rgba(0,0,0,0.96)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "zoom-out" }}
            onClick={() => setLightbox(null)}
          >
            <div style={{ position: "relative", maxWidth: "90vw", maxHeight: "88vh", width: 1000, height: 650 }}>
              <Image src={lightbox} alt="ONYX B&B" fill style={{ objectFit: "contain" }} />
            </div>
            <button
              style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "var(--gold)", border: "none", color: "#1a1a1a", width: 44, height: 44, fontSize: "1.1rem", cursor: "pointer", fontWeight: 900 }}
              onClick={() => setLightbox(null)}
            >✕</button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 2rem", background: "var(--bg-alt)", textAlign: "center" }}>
        <p className="section-label">Rezervați acum</p>
        <h2 className="section-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", marginBottom: "0.5rem" }}>V-a plăcut ce ați văzut?</h2>
        <div className="gold-line" />
        <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.88rem", marginTop: "1rem", marginBottom: "2rem" }}>
          Rezervați o cameră sau o masă la restaurantul nostru.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="btn-gold">Rezervă acum</Link>
          <a href="tel:0732403464" className="btn-outline-dark">📞 0732 403 464</a>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .photo-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .photo-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
