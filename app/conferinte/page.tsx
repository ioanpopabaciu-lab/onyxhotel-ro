"use client";
import Image from "next/image";
import Link from "next/link";

const events = [
  { icon: "💍", title: "Nunți", desc: "Salon de restaurant cu 100 locuri, decoruri personalizate, meniu gastronomic la alegere. Momente de neuitat." },
  { icon: "🍼", title: "Botezuri", desc: "Atmosferă caldă și intimă pentru cele mai prețioase momente de familie, cu meniu adaptat." },
  { icon: "🥂", title: "Banchete corporate", desc: "Cine de afaceri, întâlniri cu parteneri, mese festive pentru echipe și delegații." },
  { icon: "🎂", title: "Zile de naștere", desc: "Petreceri memorabile cu meniu personalizat, tort și decoruri tematice la alegere." },
  { icon: "🎭", title: "Evenimente private", desc: "Orice ocazie — logodne, reuniuni de familie, petreceri tematice, cocktail-uri private." },
  { icon: "🚛", title: "Mese pentru grupuri", desc: "Capacitate 100 locuri, ideal pentru grupuri de șoferi sau delegații corporate în tranzit." },
];

export default function ConferintePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "50vh", minHeight: 380, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image src="/images/hotel-3.jpg" alt="Evenimente ONYX B&B" fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.68)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 2rem" }}>
          <p className="section-label">Restaurant · 100 locuri · Bar</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#fff", lineHeight: 1.1 }}>Evenimente <span style={{ fontFamily: "var(--font-inter)", fontWeight: 900 }}>&</span> Celebrări</h1>
          <div className="gold-line" />
          <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.8)", fontSize: "0.85rem", marginTop: "0.8rem" }}>
            Organizăm evenimente private în restaurantul nostru cu 100 de locuri
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "6rem 2rem", maxWidth: 850, margin: "0 auto", textAlign: "center" }}>
        <p className="section-label">Salonul nostru</p>
        <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", marginBottom: "0.5rem" }}>Locul perfect pentru momentele speciale</h2>
        <div className="gold-line" />
        <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.92rem", lineHeight: 1.9, marginTop: "1.5rem" }}>
          Restaurantul ONYX B&B cu <strong style={{ color: "var(--text)" }}>100 de locuri</strong> și bar funcțional este spațiul perfect pentru organizarea de evenimente private, mese festive și reuniuni de afaceri. Echipa noastră se ocupă de toate detaliile — meniu, decor, muzică — pentru ca dvs. să vă bucurați de fiecare moment.
        </p>
      </section>

      {/* Events grid */}
      <section style={{ padding: "0 2rem 6rem", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginBottom: "5rem" }} className="ev-grid">
          {events.map((ev) => (
            <div key={ev.title} style={{ background: "#fff", padding: "2.5rem 2rem", boxShadow: "var(--shadow)", borderTop: "3px solid transparent", transition: "border-color 0.3s, box-shadow 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderTopColor = "var(--gold)"; e.currentTarget.style.boxShadow = "var(--shadow-lg)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderTopColor = "transparent"; e.currentTarget.style.boxShadow = "var(--shadow)"; }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{ev.icon}</div>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.7rem" }}>{ev.title}</h3>
              <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.82rem", lineHeight: 1.8 }}>{ev.desc}</p>
            </div>
          ))}
        </div>

        {/* Cifre */}
        <div style={{ background: "var(--bg-alt)", padding: "4rem 2rem", textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label">Capacitate</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", marginBottom: "3rem" }}>Restaurantul nostru în cifre</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "var(--border)", maxWidth: 700, margin: "0 auto" }} className="stats-grid">
            {[
              { value: "100", label: "Locuri restaurant" },
              { value: "Bar", label: "Funcțional" },
              { value: "07–23", label: "Program zilnic" },
              { value: "-35%", label: "Happy Hour" },
            ].map((s) => (
              <div key={s.label} style={{ padding: "2rem 1rem", background: "#fff" }}>
                <p style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem", fontWeight: 900, color: "var(--gold)", marginBottom: "0.3rem" }}>{s.value}</p>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.68rem", color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", padding: "4rem 2rem", border: "1px solid var(--border)", background: "#fff" }}>
          <p className="section-label">Hai să planificăm împreună</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", marginBottom: "1rem" }}>Spuneți-ne despre evenimentul dvs.</h2>
          <div className="gold-line" />
          <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.88rem", maxWidth: 500, margin: "1.5rem auto 2rem", lineHeight: 1.8 }}>
            Contactați-ne pentru o ofertă personalizată. Consultanța este gratuită.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-gold">Cerere ofertă</Link>
            <a href="tel:0732403464" className="btn-outline-dark">📞 0732 403 464</a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .ev-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .ev-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
