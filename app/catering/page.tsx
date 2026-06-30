"use client";
import Image from "next/image";
import Link from "next/link";

const services = [
  { icon: "🏢", title: "Companii & Firme", desc: "Prânzuri zilnice pentru angajați, mese de business și întâlniri corporate. Contracte lunare disponibile cu facturare simplificată." },
  { icon: "🎊", title: "Evenimente private", desc: "Catering complet pentru nunți, botezuri, aniversări — livrat la locația dorită sau servit în restaurantul nostru cu 100 locuri." },
  { icon: "🏛️", title: "Instituții publice", desc: "Servicii de catering pentru primării, școli, spitale și alte instituții publice din județul Bihor." },
  { icon: "🚛", title: "Grupuri & Transportatori", desc: "Mese calde pregătite rapid pentru grupuri de șoferi și transportatori în tranzit pe E60." },
  { icon: "🎓", title: "Training & Conferințe", desc: "Coffee break-uri, prânzuri și cine pentru participanții la training-uri, seminarii și conferințe." },
  { icon: "🎁", title: "Pachete festive", desc: "Meniuri festive pentru Crăciun, Revelion, Paști și alte sărbători — cu livrare sau servire la restaurant." },
];

const packages = [
  {
    name: "Business Basic",
    items: ["Supă sau ciorbă", "Fel principal", "Desert simplu", "Apă plată / minerală"],
    price: "de la 45 lei/pers",
  },
  {
    name: "Corporate Premium",
    items: ["Aperitive & platouri", "Supă", "2 feluri principale la alegere", "Desert", "Apă, suc natural, cafea"],
    price: "de la 75 lei/pers",
  },
  {
    name: "Eveniment Special",
    items: ["Meniu complet personalizat", "Aperitive & cocktail", "Bufet sau servire la masă", "Tort la alegere", "Băuturi incluse"],
    price: "ofertă personalizată",
  },
];

export default function CateringPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "45vh", minHeight: 380, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image src="/images/restaurant-2.jpg" alt="Catering ONYX B&B" fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 2rem" }}>
          <p className="section-label">Servicii alimentare</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#fff", lineHeight: 1.1, marginBottom: "0.5rem" }}>Catering ONYX</h1>
          <div className="gold-line" />
          <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.8)", fontSize: "0.85rem", marginTop: "0.8rem" }}>
            Mâncare caldă pentru companii, evenimente și grupuri · Borș și împrejurimi
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "6rem 2rem", maxWidth: 850, margin: "0 auto", textAlign: "center" }}>
        <p className="section-label">Soluția completă</p>
        <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", marginBottom: "0.5rem" }}>Catering profesional în Borș și Bihor</h2>
        <div className="gold-line" />
        <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.92rem", lineHeight: 1.9, marginTop: "1.5rem" }}>
          Restaurantul ONYX B&B oferă servicii complete de catering pentru companii, instituții și evenimente private. Cu o bucătărie echipată și o echipă cu experiență, garantăm mâncare tradițională românească proaspăt pregătită, livrată la timp și prezentată impecabil.
        </p>
      </section>

      {/* Services */}
      <section style={{ padding: "2rem 2rem 7rem", background: "var(--bg-alt)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-label">Ce oferim</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>Servicii de catering</h2>
            <div className="gold-line" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="srv-grid">
            {services.map((s) => (
              <div key={s.title} style={{ background: "#fff", padding: "2.5rem 2rem", boxShadow: "var(--shadow)", transition: "box-shadow 0.3s, transform 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-lg)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--shadow)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ fontSize: "2.2rem", marginBottom: "1.2rem" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.8rem" }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.83rem", lineHeight: 1.8 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section style={{ padding: "7rem 2rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-label">Meniuri</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>Pachete catering</h2>
            <div className="gold-line" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="pkg-grid">
            {packages.map((pkg) => (
              <div key={pkg.name} style={{ border: "1px solid var(--border)", padding: "2.5rem 2rem" }}>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "2px solid var(--gold)" }}>{pkg.name}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem" }}>
                  {pkg.items.map((item) => (
                    <div key={item} style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                      <span style={{ color: "var(--gold)", fontSize: "0.6rem", flexShrink: 0 }}>✦</span>
                      <span style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.82rem" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 700, color: "var(--gold)" }}>{pkg.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "6rem 2rem", background: "var(--bg-alt)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <p className="section-label">Solicită ofertă</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", marginBottom: "0.5rem" }}>Haideți să discutăm</h2>
          <div className="gold-line" />
          <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.9rem", lineHeight: 1.8, margin: "1.5rem 0 2.5rem" }}>
            Contactați-ne pentru o ofertă personalizată. Consultanța și estimarea de preț sunt gratuite. Răspundem în maxim 2 ore în zilele lucrătoare.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:0732403464" className="btn-gold">📞 0732 403 464</a>
            <Link href="/contact" className="btn-outline-dark">Formular ofertă</Link>
            <a href="https://wa.me/40732403464" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.88rem 1.8rem", background: "#25D366", color: "#fff", fontFamily: "var(--font-inter)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >💬 WhatsApp</a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .srv-grid, .pkg-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .srv-grid, .pkg-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
