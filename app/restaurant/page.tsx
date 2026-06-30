import Image from "next/image";
import Link from "next/link";

const menu = {
  "Supe & Ciorbe": [
    { name: "Ciorbă de burtă", desc: "Rețetă tradițională, smântână, usturoi, ardei iute", price: "TODO" },
    { name: "Supă de pui cu tăiței", desc: "Supă clară de pui de țară cu tăiței de casă", price: "TODO" },
    { name: "Ciorbă de fasole cu afumătură", desc: "Fasole boabe, costiță afumată, leuștean", price: "TODO" },
  ],
  "Preparate principale": [
    { name: "Șnițel viennez", desc: "Șnițel de porc sau pui, cartofi prăjiți, salată", price: "TODO" },
    { name: "Cotlet de porc la grătar", desc: "Cotlet marinat, garnitură la alegere, mujdei", price: "TODO" },
    { name: "Ciulama de pui", desc: "Pui fiert, sos alb cu smântână, mămăligă", price: "TODO" },
    { name: "Mușchi de vită la grătar", desc: "Vită românească, garnitură, sos de legume", price: "TODO" },
    { name: "Pastă cu sos bolognese", desc: "Paste proaspete, carne tocată, roșii, parmezan", price: "TODO" },
  ],
  "Salate": [
    { name: "Salată de sezon", desc: "Legume proaspete, ulei de măsline", price: "TODO" },
    { name: "Salată de vinete", desc: "Vinete coapte, ceapă, ulei, sare", price: "TODO" },
    { name: "Salată cu ton", desc: "Mix salată, ton, măsline, roșii cherry, ou", price: "TODO" },
  ],
  "Deserturi": [
    { name: "Papanași prăjiți", desc: "Papanași cu smântână și dulceață de afine", price: "TODO" },
    { name: "Clătite cu brânză sau gem", desc: "Clătite subțiri, umplutură la alegere", price: "TODO" },
    { name: "Tort de casă", desc: "Desert de sezon preparat în bucătăria proprie", price: "TODO" },
  ],
};

const categories = Object.keys(menu) as (keyof typeof menu)[];

export default function RestaurantPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "55vh", minHeight: 400, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image src="/images/restaurant-1.jpg" alt="Restaurant ONYX B&B" fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 2rem" }}>
          <p className="section-label">Gastronomie · 100 locuri · Bar</p>
          <h1 className="section-title" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>Restaurant ONYX B&B</h1>
          <div className="gold-line" />
          <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.8)", fontSize: "0.85rem", marginTop: "0.8rem" }}>
            Deschis zilnic 07:00 – 23:00 · Bar funcțional · 100 locuri
          </p>
        </div>
      </section>

      {/* Program & Happy Hour banner */}
      <div style={{ background: "var(--gold)", padding: "0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div style={{ padding: "1.8rem 2.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ fontSize: "1.5rem" }}>🕖</span>
            <div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", fontWeight: 700, color: "var(--anthracite)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Program zilnic</p>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 700, color: "var(--anthracite)" }}>07:00 – 23:00</p>
            </div>
          </div>
          <div style={{ padding: "1.8rem 2.5rem", display: "flex", alignItems: "center", gap: "1rem", background: "rgba(0,0,0,0.15)" }}>
            <span style={{ fontSize: "1.5rem" }}>🎉</span>
            <div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", fontWeight: 700, color: "var(--anthracite)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Happy Hour săptămânal</p>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.1rem", fontWeight: 700, color: "var(--anthracite)" }}>-35% la toate preparatele</p>
            </div>
          </div>
        </div>
      </div>

      {/* Happy Hour section */}
      <section style={{ padding: "6rem 2rem", background: "var(--anthracite-mid)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p className="section-label">Ofertă săptămânală</p>
          <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "0.5rem" }}>Happy Hour Restaurant</h2>
          <div className="gold-line" />
          <div style={{ marginTop: "2.5rem", display: "inline-block", border: "2px solid var(--gold)", padding: "3rem 4rem" }}>
            <p style={{ fontFamily: "var(--font-playfair)", fontSize: "5rem", fontWeight: 900, color: "var(--gold)", lineHeight: 1 }}>-35%</p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.85rem", color: "#aaa", marginTop: "0.8rem", lineHeight: 1.8 }}>
              la toate preparatele din meniu<br />
              <strong style={{ color: "var(--cream)" }}>o dată pe săptămână</strong> — urmăriți-ne pe rețelele sociale<br />
              pentru a afla ziua și ora exactă
            </p>
          </div>
          <p style={{ fontFamily: "var(--font-inter)", color: "#666", fontSize: "0.75rem", marginTop: "1.5rem" }}>
            * Oferta nu se cumulează cu alte reduceri. Valabilă la consumație la restaurant.
          </p>
        </div>
      </section>

      {/* Mic dejun */}
      <section style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p className="section-label">Dimineața</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", marginBottom: "3rem" }}>Mic dejun</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", maxWidth: 600, margin: "0 auto 2rem" }}>
            <div style={{ padding: "2.5rem 2rem", background: "var(--anthracite-mid)", borderBottom: "3px solid var(--gold)" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.8rem" }}>Clienți cazați</p>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "3rem", fontWeight: 900, color: "var(--cream)", lineHeight: 1 }}>30</p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "#888", marginTop: "0.3rem" }}>lei / persoană</p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", color: "#666", marginTop: "0.8rem" }}>Tarif special pentru oaspeții hotelului</p>
            </div>
            <div style={{ padding: "2.5rem 2rem", background: "#2a2a2a", borderBottom: "3px solid rgba(201,168,76,0.3)" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.8rem" }}>Clienți externi</p>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "3rem", fontWeight: 900, color: "var(--cream)", lineHeight: 1 }}>35</p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "#888", marginTop: "0.3rem" }}>lei / persoană</p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", color: "#666", marginTop: "0.8rem" }}>Fără rezervare necesară · 07:00–10:30</p>
            </div>
          </div>
          <p style={{ fontFamily: "var(--font-inter)", color: "#666", fontSize: "0.75rem" }}>
            * Mic dejunul NU este inclus în tariful camerei. Se achită separat.
          </p>
        </div>
      </section>

      {/* Meniu */}
      <section style={{ padding: "3rem 2rem 7rem", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label">Meniu orientativ</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>Ce servim</h2>
          <div className="gold-line" />
          <p style={{ fontFamily: "var(--font-inter)", color: "#555", fontSize: "0.75rem", marginTop: "1rem" }}>
            * Prețurile complete sunt afișate în restaurant sau la cerere. Meniul se poate modifica sezonier.
          </p>
        </div>

        {categories.map((cat) => (
          <div key={cat} style={{ marginBottom: "4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
              <div style={{ width: 36, height: 2, background: "var(--gold)", flexShrink: 0 }} />
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.8rem", fontWeight: 700, color: "var(--gold)" }}>{cat}</h2>
              <div style={{ flex: 1, height: 1, background: "rgba(201,168,76,0.15)" }} />
            </div>
            {menu[cat].map((item, i) => (
              <div key={item.name} style={{
                display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "2rem",
                padding: "1.1rem 0",
                borderBottom: i < menu[cat].length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
              }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.15rem", color: "var(--cream)", marginBottom: "0.2rem" }}>{item.name}</h3>
                  <p style={{ fontFamily: "var(--font-inter)", color: "#666", fontSize: "0.78rem", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
                <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "var(--gold)", whiteSpace: "nowrap", fontWeight: 600 }}>
                  Solicită preț
                </div>
              </div>
            ))}
          </div>
        ))}

        <div style={{ textAlign: "center", padding: "3rem 2rem", border: "1px solid rgba(201,168,76,0.2)", background: "var(--anthracite-mid)" }}>
          <p className="section-label">Rezervare masă</p>
          <h3 className="section-title" style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Rezervați o masă</h3>
          <p style={{ fontFamily: "var(--font-inter)", color: "#888", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
            Pentru grupuri, evenimente sau catering, contactați-ne în avans.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:0732403464" className="btn-gold">📞 0732 403 464</a>
            <Link href="/contact" className="btn-outline-gold">Formular contact</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 600px) {
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
