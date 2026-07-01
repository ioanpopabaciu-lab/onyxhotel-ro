"use client";
import Image from "next/image";
import Link from "next/link";

export default function DesprePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "45vh", minHeight: 340, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image src="/images/hotel-facade.png" alt="ONYX B&B Hotel" fill style={{ objectFit: "cover", objectPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.62)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 2rem" }}>
          <p className="section-label">Despre noi</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#fff", lineHeight: 1.1 }}>ONYX B<span style={{ fontFamily: "var(--font-inter)", fontWeight: 900 }}>&</span>B Hotel <span style={{ fontFamily: "var(--font-inter)", fontWeight: 900 }}>&</span> Restaurant</h1>
          <div className="gold-line" />
        </div>
      </section>

      {/* Pozitionare */}
      <section style={{ padding: "7rem 2rem", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="two-col">
          <div>
            <p className="section-label">Locație strategică</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", marginBottom: "0.5rem" }}>La frontiera România–Ungaria</h2>
            <div className="gold-line-left" />
            <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.9rem", lineHeight: 1.9, marginTop: "1.5rem" }}>
              ONYX B&B Hotel & Restaurant este amplasat la <strong style={{ color: "var(--text)" }}>100 de metri de Punctul de Trecere a Frontierei Borș</strong> (Vama Borș), direct pe șoseaua europeană E60. Această poziție unică face din hotelul nostru prima alegere pentru:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", margin: "1.5rem 0 2rem" }}>
              {[
                "Transportatori și șoferi profesioniști TIR",
                "Delegații corporate cu parteneri din Ungaria sau Europa de Vest",
                "Călători în tranzit pe ruta București–Budapesta",
                "Turiști care vizitează Bihorul și Oradea",
                "Companii cu activitate transfrontalieră",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--gold)", marginTop: "0.1rem", flexShrink: 0 }}>✦</span>
                  <span style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.85rem" }}>{item}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-gold">Rezervă acum</Link>
          </div>
          <div style={{ position: "relative", height: 480 }}>
            <Image src="/images/photo-5.jpg" alt="Locație ONYX B&B" fill style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", background: "var(--gold)", padding: "1.2rem 1.5rem" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", fontWeight: 700, color: "#1a1a1a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.2rem" }}>Distanță frontieră</p>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem", fontWeight: 900, color: "#1a1a1a" }}>100m</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cifre */}
      <section style={{ padding: "5rem 2rem", background: "var(--bg-alt)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <p className="section-label">De ce ONYX B&B</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", marginBottom: "3rem" }}>Servicii complete sub un singur acoperiș</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "1px", background: "var(--border)" }} className="stats-grid">
            {[
              { value: "3 ⭐", label: "Stele clasificare" },
              { value: "100m", label: "De la Vama Borș" },
              { value: "100", label: "Locuri restaurant" },
              { value: "4", label: "Tipuri camere" },
              { value: "24/7", label: "Recepție deschisă" },
              { value: "E60", label: "Acces direct" },
            ].map((s) => (
              <div key={s.label} style={{ background: "#fff", padding: "2rem 1rem" }}>
                <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.8rem", fontWeight: 900, color: "var(--gold)", marginBottom: "0.4rem" }}>{s.value}</p>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.68rem", color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce oferim */}
      <section style={{ padding: "7rem 2rem", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label">Servicii</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>Tot ce aveți nevoie</h2>
          <div className="gold-line" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }} className="svc-grid">
          {[
            { icon: "🛏️", title: "Cazare", desc: "Camere confortabile cu toate dotările necesare, recepție 24/7, parcare gratuită inclusiv pentru TIR-uri." },
            { icon: "🍽️", title: "Restaurant", desc: "Bucătărie tradițională și internațională, 100 de locuri, bar funcțional. Mic dejun, prânz și cină." },
            { icon: "🎉", title: "Evenimente", desc: "Organizăm nunți, botezuri, aniversări, banchete corporate și orice eveniment privat." },
            { icon: "🚛", title: "Transport & Tranzit", desc: "Parcare spațioasă cu loc pentru vehicule grele. Locație ideală pentru popas înainte/după vamă." },
          ].map((s) => (
            <div key={s.title} style={{ padding: "2rem", border: "1px solid var(--border)", background: "#fff", transition: "box-shadow 0.3s, transform 0.3s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-lg)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{s.icon}</div>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.7rem" }}>{s.title}</h3>
              <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.82rem", lineHeight: 1.8 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .stats-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .svc-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .svc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
