"use client";
import Image from "next/image";
import Link from "next/link";

const camere = [
  { name: "Cameră Single", desc: "Confortabilă și funcțională pentru o persoană. Ideală pentru transportatori și delegații în deplasare rapidă.", features: ["Pat single sau matrimonial", "Baie privată cu duș", "TV + Wi-Fi gratuit", "Climatizare", "Seif electronic"], pret: "195", img: "/images/camera-single.jpg" },
  { name: "Cameră Dublă", desc: "Spațioasă cu pat matrimonial și pat suplimentar. Perfectă pentru cupluri sau colegi de afaceri.", features: ["Pat matrimonial + pat suplimentar", "Baie privată completă", "TV + Wi-Fi gratuit", "Climatizare", "Minibar"], pret: "230", img: "/images/camera-matrimoniala.png" },
  { name: "Cameră Triplă", desc: "Cameră generoasă pentru 3 persoane sau familii. Dotări complete și spațiu maxim de confort.", features: ["2 paturi individuale + pat suplimentar", "Baie privată completă", "TV + Wi-Fi gratuit", "Climatizare", "Spațiu generos"], pret: "300", img: "/images/camera-tripla.jpg" },
  { name: "Apartament", desc: "Spațiu superior cu pat matrimonial elegant și zone separate de relaxare. Ideal pentru șederi prelungite sau oaspeți care doresc confort maxim.", features: ["Pat matrimonial dublu", "Baie privată completă", "TV + Wi-Fi gratuit", "Climatizare", "Spațiu de lucru"], pret: "350", img: "/images/camera-apartament.jpg" },
];

const cazareOra = [
  { durata: "3 ore", ore: 3, pret: "90", maxStart: "20:00" },
  { durata: "5 ore", ore: 5, pret: "130", maxStart: "18:00" },
  { durata: "7 ore", ore: 7, pret: "150", maxStart: "16:00" },
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
      <section style={{ position: "relative", height: "48vh", minHeight: 360, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image src="/images/hotel-facade.png" alt="Camere ONYX B&B" fill style={{ objectFit: "cover", objectPosition: "center 35%" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.62)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 2rem" }}>
          <p className="section-label">Cazare 3 stele · Borș, Bihor</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#fff", lineHeight: 1.1 }}>Camere <span style={{ fontFamily: "var(--font-inter)", fontWeight: 900 }}>&</span> Tarife</h1>
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }} className="rooms-grid">
          {camere.map((camera) => (
            <div key={camera.name} style={{ background: "#fff", boxShadow: "var(--shadow)", overflow: "hidden", transition: "box-shadow 0.3s, transform 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-lg)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--shadow)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ position: "relative", height: 240 }}>
                <Image src={camera.img} alt={camera.name} fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "2rem" }}>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>{camera.name}</h3>
                <div className="gold-line-left" style={{ marginBottom: "1rem" }} />
                <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.82rem", lineHeight: 1.8, marginBottom: "1.2rem" }}>{camera.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1.5rem" }}>
                  {camera.features.map((f) => (
                    <div key={f} style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                      <span style={{ color: "var(--gold)", fontSize: "0.6rem", flexShrink: 0 }}>✦</span>
                      <span style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.78rem" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Tarif / noapte</p>
                    <p style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem", fontWeight: 900, color: "var(--gold)", lineHeight: 1 }}>
                      {camera.pret} <span style={{ fontSize: "0.95rem", fontWeight: 400, color: "var(--text-mid)" }}>lei</span>
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
      <section style={{ padding: "5rem 2rem", background: "var(--bg-alt)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p className="section-label">Dimineața</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.2rem)", marginBottom: "2.5rem" }}>Mic dejun (07:00–10:00)</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", maxWidth: 520, margin: "0 auto 1.5rem" }}>
            <div style={{ padding: "2rem", background: "#fff", borderTop: "3px solid var(--gold)", boxShadow: "var(--shadow)" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.6rem" }}>Clienți cazați</p>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "2.8rem", fontWeight: 900, color: "var(--text)", lineHeight: 1 }}>30 <span style={{ fontSize: "1rem", fontWeight: 400, color: "var(--text-mid)" }}>lei</span></p>
            </div>
            <div style={{ padding: "2rem", background: "#fff", borderTop: "3px solid var(--border)", boxShadow: "var(--shadow)" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.6rem" }}>Clienți externi</p>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "2.8rem", fontWeight: 900, color: "var(--text)", lineHeight: 1 }}>35 <span style={{ fontSize: "1rem", fontWeight: 400, color: "var(--text-mid)" }}>lei</span></p>
            </div>
          </div>
          <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-light)", fontSize: "0.73rem" }}>
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
          <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.88rem", lineHeight: 1.8, maxWidth: 550, margin: "1.5rem auto 3rem" }}>
            Ideal pentru șoferi profesioniști care au nevoie de odihnă înainte sau după trecerea frontierei, fără să plătească o noapte întreagă.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", maxWidth: 700, margin: "0 auto 2rem" }}>
            {cazareOra.map((c) => (
              <div key={c.durata} style={{ padding: "2rem 1rem", background: "#fff", border: "1px solid var(--border)", boxShadow: "var(--shadow)", borderTop: "3px solid var(--gold)", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.6rem" }}>{c.durata}</p>
                <p style={{ fontFamily: "var(--font-playfair)", fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", lineHeight: 1 }}>
                  {c.pret} <span style={{ fontSize: "0.85rem", fontWeight: 400, color: "var(--text-mid)" }}>lei</span>
                </p>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", color: "var(--text-light)", marginTop: "0.7rem" }}>
                  max. intrare {c.maxStart}
                </p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "var(--text-mid)", marginBottom: "1.5rem" }}>
            ⏱ Check-out maxim <strong>23:00</strong> — rezervare exclusiv telefonic sau WhatsApp
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:0732403464" className="btn-gold">📞 0732 403 464</a>
            <a href="https://wa.me/40732403464" target="_blank" rel="noopener noreferrer" className="btn-outline-dark">💬 WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Dotări */}
      <section style={{ padding: "5rem 2rem", background: "var(--bg-alt)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <p className="section-label">Facilități incluse</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.2rem)", marginBottom: "3rem" }}>Dotările camerelor</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
            {dotari.map((d) => (
              <div key={d} style={{ padding: "1rem 1.5rem", borderBottom: "1px solid var(--border)", borderRight: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "0.7rem", background: "#fff" }}>
                <span style={{ color: "var(--gold)", fontSize: "0.6rem", flexShrink: 0 }}>✦</span>
                <span style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.8rem" }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Check-in info */}
      <section style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.2rem)", marginBottom: "3rem" }}>Informații check-in / check-out</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "var(--border)", marginBottom: "3rem" }} className="info-grid">
            {[
              { label: "Check-in", value: "după 14:00" },
              { label: "Check-out", value: "până la 11:00" },
              { label: "Recepție", value: "24 / 7" },
              { label: "Animale de companie", value: "Permise" },
            ].map((item) => (
              <div key={item.label} style={{ background: "#fff", padding: "2rem 1rem" }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.4rem" }}>{item.label}</p>
                <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "var(--text)" }}>{item.value}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-gold">Rezervă prin formular</Link>
            <a href="tel:0732403464" className="btn-outline-dark">📞 0732 403 464</a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 700px) {
          .rooms-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .info-grid { grid-template-columns: repeat(2, 1fr) !important; }
          div[style*="1fr 1fr"] { grid-template-columns: 1fr !important; }
          div[style*="repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
