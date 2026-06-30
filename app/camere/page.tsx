"use client";
import Image from "next/image";
import Link from "next/link";

const camere = [
  {
    name: "Cameră Single",
    desc: "Cameră confortabilă pentru o persoană, dotată complet. Ideală pentru transportatori și delegații în deplasare.",
    features: ["Pat single sau matrimonial", "Baie privată cu duș", "TV + Wi-Fi gratuit", "Climatizare", "Seif electronic"],
    pret: "195",
    img: "/images/hotel-1.jpg",
  },
  {
    name: "Cameră Dublă",
    desc: "Cameră spațioasă cu pat matrimonial sau două paturi separate. Perfectă pentru cupluri sau colegi de afaceri.",
    features: ["Pat matrimonial sau twin", "Baie privată completă", "TV + Wi-Fi gratuit", "Climatizare", "Minibar"],
    pret: "230",
    img: "/images/hotel-2.jpg",
  },
  {
    name: "Cameră Triplă",
    desc: "Cameră pentru 3 persoane sau familii. Dotări complete și spațiu generos pentru un sejur confortabil.",
    features: ["3 paturi sau configurare mixtă", "Baie privată completă", "TV + Wi-Fi gratuit", "Climatizare", "Spațiu generos"],
    pret: "300",
    img: "/images/hotel-3.jpg",
  },
];

const cazareOra = [
  { durata: "1 oră", pret: "50" },
  { durata: "2 ore", pret: "80" },
  { durata: "3 ore", pret: "120" },
];

const dotari = [
  "Climatizare individuală", "TV cu canale internaționale", "Baie privată (duș/cadă)",
  "Paturi matrimoniale", "Wi-Fi gratuit", "Parcare gratuită", "Lenjerie proaspătă",
  "Curățenie zilnică", "Seif electronic", "Minibar", "Recepție 24/7", "Parcare TIR disponibilă",
];

export default function CamerePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "50vh", minHeight: 380, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image src="/images/hotel-facade.png" alt="Camere ONYX B&B" fill style={{ objectFit: "cover", objectPosition: "center 35%" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.62)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 2rem" }}>
          <p className="section-label">Cazare 3 stele · Borș, Bihor</p>
          <h1 className="section-title" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>Camere & Tarife</h1>
          <div className="gold-line" />
          <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.8)", fontSize: "0.85rem", marginTop: "0.8rem" }}>
            Check-in după 14:00 · Check-out până la 11:00 · Recepție 24/7
          </p>
        </div>
      </section>

      {/* Camere */}
      <section style={{ padding: "6rem 2rem", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label">Tipuri de camere</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>Alegeți camera potrivită</h2>
          <div className="gold-line" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2px" }}>
          {camere.map((camera) => (
            <div key={camera.name} style={{ background: "var(--anthracite-mid)", overflow: "hidden" }}>
              <div style={{ position: "relative", height: 240 }}>
                <Image src={camera.img} alt={camera.name} fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "2rem" }}>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", color: "var(--cream)", marginBottom: "0.5rem" }}>{camera.name}</h3>
                <div className="gold-line-left" style={{ marginBottom: "1rem" }} />
                <p style={{ fontFamily: "var(--font-inter)", color: "#888", fontSize: "0.82rem", lineHeight: 1.8, marginBottom: "1.2rem" }}>{camera.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1.5rem" }}>
                  {camera.features.map((f) => (
                    <div key={f} style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                      <span style={{ color: "var(--gold)", fontSize: "0.6rem", flexShrink: 0 }}>✦</span>
                      <span style={{ fontFamily: "var(--font-inter)", color: "#bbb", fontSize: "0.78rem" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1.2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", color: "#666", textTransform: "uppercase", letterSpacing: "0.1em" }}>Tarif / noapte</p>
                    <p style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem", fontWeight: 900, color: "var(--gold)", lineHeight: 1 }}>
                      {camera.pret} <span style={{ fontSize: "1rem", fontWeight: 400 }}>lei</span>
                    </p>
                  </div>
                  <Link href="/contact" className="btn-gold" style={{ fontSize: "0.65rem", padding: "0.65rem 1.4rem" }}>Rezervă</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mic dejun */}
      <section style={{ padding: "5rem 2rem", background: "var(--anthracite-mid)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p className="section-label">Dimineața</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.2rem)", marginBottom: "2.5rem" }}>Mic dejun</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", maxWidth: 500, margin: "0 auto 1.5rem" }}>
            <div style={{ padding: "2rem", background: "#252525", borderBottom: "3px solid var(--gold)" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.6rem" }}>Clienți cazați</p>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "2.5rem", fontWeight: 900, color: "var(--cream)", lineHeight: 1 }}>30 <span style={{ fontSize: "1rem", fontWeight: 400 }}>lei</span></p>
            </div>
            <div style={{ padding: "2rem", background: "#2e2e2e", borderBottom: "3px solid rgba(201,168,76,0.3)" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.6rem" }}>Clienți externi</p>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "2.5rem", fontWeight: 900, color: "var(--cream)", lineHeight: 1 }}>35 <span style={{ fontSize: "1rem", fontWeight: 400 }}>lei</span></p>
            </div>
          </div>
          <p style={{ fontFamily: "var(--font-inter)", color: "#555", fontSize: "0.73rem" }}>
            * Mic dejunul NU este inclus în tariful camerei — se achită separat la restaurant.
          </p>
        </div>
      </section>

      {/* Cazare cu ora */}
      <section style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p className="section-label">Flexibilitate maximă</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.2rem)", marginBottom: "0.5rem" }}>Cazare cu ora</h2>
          <div className="gold-line" />
          <p style={{ fontFamily: "var(--font-inter)", color: "#888", fontSize: "0.85rem", lineHeight: 1.8, maxWidth: 550, margin: "1.5rem auto 3rem" }}>
            Ideal pentru șoferi profesioniști care au nevoie de odihnă înainte sau după trecerea frontierei, fără să plătească o noapte întreagă.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", maxWidth: 600, margin: "0 auto 2rem" }}>
            {cazareOra.map((c) => (
              <div key={c.durata} style={{ padding: "2rem 1rem", background: "var(--anthracite-mid)", borderBottom: "3px solid rgba(201,168,76,0.3)", transition: "border-color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(201,168,76,0.3)")}
              >
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.6rem" }}>{c.durata}</p>
                <p style={{ fontFamily: "var(--font-playfair)", fontSize: "2.2rem", fontWeight: 900, color: "var(--cream)", lineHeight: 1 }}>
                  {c.pret} <span style={{ fontSize: "0.9rem", fontWeight: 400 }}>lei</span>
                </p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-inter)", color: "#555", fontSize: "0.73rem", marginBottom: "2rem" }}>
            * Cazarea cu ora se face pe baza disponibilității. Contactați recepția.
          </p>
          <a href="tel:0732403464" className="btn-gold">📞 Sună pentru disponibilitate</a>
        </div>
      </section>

      {/* Dotări */}
      <section style={{ padding: "5rem 2rem", background: "var(--anthracite-mid)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <p className="section-label">Facilități incluse</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.2rem)", marginBottom: "3rem" }}>Dotările camerelor</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
            {dotari.map((d) => (
              <div key={d} style={{ padding: "1rem 1.5rem", borderBottom: "1px solid rgba(255,255,255,0.04)", borderRight: "1px solid rgba(255,255,255,0.04)", display: "flex", alignItems: "center", gap: "0.7rem" }}>
                <span style={{ color: "var(--gold)", fontSize: "0.6rem", flexShrink: 0 }}>✦</span>
                <span style={{ fontFamily: "var(--font-inter)", color: "#bbb", fontSize: "0.8rem" }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Check-in info */}
      <section style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.2rem)", marginBottom: "3rem" }}>Informații check-in / check-out</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2px", marginBottom: "3rem" }}>
            {[
              { label: "Check-in", value: "după 14:00" },
              { label: "Check-out", value: "până la 11:00" },
              { label: "Recepție", value: "24 / 7" },
              { label: "Animale de companie", value: "Permise" },
            ].map((item) => (
              <div key={item.label} style={{ background: "var(--anthracite-mid)", padding: "2rem 1rem" }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.4rem" }}>{item.label}</p>
                <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", color: "var(--cream)" }}>{item.value}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-gold">Rezervă prin formular</Link>
            <a href="tel:0732403464" className="btn-outline-gold">📞 0732 403 464</a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 600px) {
          div[style*="repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
          div[style*="1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
