import Image from "next/image";
import Link from "next/link";

const menu = {
  "Supe & Ciorbe": [
    { name: "Ciorbă de burtă", desc: "Rețetă tradițională, smântână, usturoi, ardei iute" },
    { name: "Supă de pui cu tăiței", desc: "Supă clară de pui de țară cu tăiței de casă" },
    { name: "Ciorbă de fasole cu afumătură", desc: "Fasole boabe, costiță afumată, leuștean" },
  ],
  "Preparate principale": [
    { name: "Șnițel viennez", desc: "Șnițel de porc sau pui, cartofi prăjiți, salată" },
    { name: "Cotlet de porc la grătar", desc: "Cotlet marinat, garnitură la alegere, mujdei" },
    { name: "Ciulama de pui", desc: "Pui fiert, sos alb cu smântână, mămăligă" },
    { name: "Mușchi de vită la grătar", desc: "Vită românească, garnitură, sos de legume" },
    { name: "Paste cu sos bolognese", desc: "Paste proaspete, carne tocată, roșii, parmezan" },
  ],
  "Salate": [
    { name: "Salată de sezon", desc: "Legume proaspete, ulei de măsline" },
    { name: "Salată de vinete", desc: "Vinete coapte, ceapă, ulei, sare" },
    { name: "Salată cu ton", desc: "Mix salată, ton, măsline, roșii cherry, ou" },
  ],
  "Deserturi": [
    { name: "Papanași prăjiți", desc: "Papanași cu smântână și dulceață de afine" },
    { name: "Clătite cu brânză sau gem", desc: "Clătite subțiri, umplutură la alegere" },
    { name: "Tort de casă", desc: "Desert de sezon preparat în bucătăria proprie" },
  ],
};

const categories = Object.keys(menu) as (keyof typeof menu)[];

export default function RestaurantPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "85vh", minHeight: 600, overflow: "hidden" }}>
        <Image src="/images/restaurant-interior.jpg" alt="Restaurant ONYX B&B" fill style={{ objectFit: "cover", objectPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.55) 100%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 1, textAlign: "center", padding: "6rem 2rem 2rem" }}>
          <p className="section-label" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>Gastronomie · 100 locuri · Bar</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 4rem)", color: "#fff", lineHeight: 1.1, textShadow: "0 2px 16px rgba(0,0,0,0.7)" }}>Restaurant ONYX B<span style={{ fontFamily: "var(--font-inter)", fontWeight: 900 }}>&</span>B</h1>
          <div className="gold-line" />
          <p style={{ fontFamily: "var(--font-inter)", color: "#fff", fontSize: "0.9rem", marginTop: "0.8rem", textShadow: "0 1px 8px rgba(0,0,0,0.9)", fontWeight: 500 }}>
            Deschis zilnic 07:00 – 23:00 · Bar funcțional · 100 locuri · Animale permise
          </p>
        </div>
      </section>

      {/* Program band */}
      <div style={{ background: "var(--gold)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div style={{ padding: "1.8rem 2.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ fontSize: "1.5rem" }}>🕖</span>
            <div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", fontWeight: 700, color: "#1a1a1a", letterSpacing: "0.15em", textTransform: "uppercase" }}>Program zilnic</p>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 800, color: "#1a1a1a" }}>07:00 – 23:00</p>
            </div>
          </div>
          <div style={{ padding: "1.8rem 2.5rem", display: "flex", alignItems: "center", gap: "1rem", background: "rgba(0,0,0,0.1)" }}>
            <span style={{ fontSize: "1.5rem" }}>🎉</span>
            <div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", fontWeight: 700, color: "#1a1a1a", letterSpacing: "0.15em", textTransform: "uppercase" }}>Happy Hour săptămânal</p>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "#1a1a1a" }}>-35% la toate preparatele</p>
            </div>
          </div>
        </div>
      </div>

      {/* Happy Hour */}
      <section style={{ padding: "6rem 2rem", background: "var(--bg-alt)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <p className="section-label">Ofertă săptămânală</p>
          <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "0.5rem" }}>Happy Hour Restaurant</h2>
          <div className="gold-line" />
          <div style={{ marginTop: "2.5rem", display: "inline-block", border: "2px solid var(--gold)", padding: "3rem 4rem", background: "#fff" }}>
            <p style={{ fontFamily: "var(--font-playfair)", fontSize: "5rem", fontWeight: 900, color: "var(--gold)", lineHeight: 1 }}>-35%</p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.88rem", color: "var(--text-mid)", marginTop: "0.8rem", lineHeight: 1.8 }}>
              la toate preparatele din meniu<br />
              <strong style={{ color: "var(--text)" }}>o dată pe săptămână</strong> — urmăriți-ne pe rețelele sociale<br />
              pentru a afla ziua și ora exactă
            </p>
          </div>
          <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-light)", fontSize: "0.73rem", marginTop: "1.5rem" }}>
            * Oferta nu se cumulează cu alte reduceri. Valabilă la consumație la restaurant.
          </p>
        </div>
      </section>

      {/* Mic dejun */}
      <section style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <p className="section-label">Dimineața</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", marginBottom: "2rem" }}>Mic dejun (07:00–10:00)</h2>
          <div className="gold-line" />
          <div style={{ position: "relative", height: 480, margin: "2.5rem 0", overflow: "hidden" }}>
            <Image src="/images/mic-dejun.jpg" alt="Mic dejun ONYX B&B" fill style={{ objectFit: "cover", objectPosition: "center 60%" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", maxWidth: 560, margin: "0 auto 2rem" }}>
            <div style={{ padding: "2.5rem 2rem", background: "#fff", borderTop: "3px solid var(--gold)", boxShadow: "var(--shadow)" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.63rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.8rem" }}>Clienți cazați</p>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "3rem", fontWeight: 900, color: "var(--text)", lineHeight: 1 }}>30</p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "var(--text-mid)", marginTop: "0.3rem" }}>lei / persoană</p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", color: "var(--text-light)", marginTop: "0.8rem" }}>Tarif special pentru oaspeții hotelului</p>
            </div>
            <div style={{ padding: "2.5rem 2rem", background: "#fff", borderTop: "3px solid var(--border)", boxShadow: "var(--shadow)" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.63rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.8rem" }}>Clienți externi</p>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "3rem", fontWeight: 900, color: "var(--text)", lineHeight: 1 }}>35</p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "var(--text-mid)", marginTop: "0.3rem" }}>lei / persoană</p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", color: "var(--text-light)", marginTop: "0.8rem" }}>Fără rezervare necesară</p>
            </div>
          </div>
          <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-light)", fontSize: "0.73rem" }}>
            * Mic dejunul NU este inclus în tariful camerei. Se achită separat.
          </p>
        </div>
      </section>

      {/* Galerie foto restaurant */}
      <section style={{ padding: "6rem 2rem", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="section-label">Atmosferă</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>Spațiul nostru</h2>
          <div className="gold-line" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gridTemplateRows: "280px 280px", gap: "0.8rem" }} className="gallery-grid">
          <div style={{ position: "relative", gridRow: "1 / 3" }}>
            <Image src="/images/restaurant-interior.jpg" alt="Sala restaurant" fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ position: "relative" }}>
            <Image src="/images/restaurant-sala.jpg" alt="Sala cu lumini" fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ position: "relative" }}>
            <Image src="/images/bar-interior.jpg" alt="Bar interior" fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ position: "relative" }}>
            <Image src="/images/restaurant-burger.jpg" alt="Preparate restaurant" fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ position: "relative" }}>
            <Image src="/images/restaurant-cafea.jpg" alt="Cafea restaurant" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* Bar */}
      <section style={{ padding: "4rem 2rem 6rem", background: "var(--bg-alt)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="two-col">
            <div style={{ position: "relative", height: 440 }}>
              <Image src="/images/bar-interior.jpg" alt="Bar ONYX" fill style={{ objectFit: "cover" }} />
            </div>
            <div>
              <p className="section-label">Băuturi & Cocktailuri</p>
              <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", marginBottom: "0.5rem" }}>Barul ONYX</h2>
              <div className="gold-line-left" />
              <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.9rem", lineHeight: 1.9, marginTop: "1.5rem", marginBottom: "1.5rem" }}>
                Barul nostru vă oferă o selecție variată de băuturi spirtoase, cocktailuri, vinuri și cafele de specialitate. Atmosferă relaxată cu design modern, perfect pentru o pauză după drum sau o seară în companie.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "2rem" }}>
                {["Cafea Moreno de specialitate", "Cocktailuri clasice & signature", "Selecție de vinuri românești", "Bere la draft & îmbuteliată", "Băuturi răcoritoare & sucuri naturale", "Program: 07:00 – 23:00"].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
                    <span style={{ color: "var(--gold)", flexShrink: 0, fontSize: "0.6rem" }}>✦</span>
                    <span style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.85rem" }}>{item}</span>
                  </div>
                ))}
              </div>
              <a href="tel:0732403464" className="btn-gold">📞 Rezervare masă</a>
            </div>
          </div>
        </div>
      </section>

      {/* Preparate populare */}
      <section style={{ padding: "6rem 2rem", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="section-label">Din bucătăria noastră</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>Preparate populare</h2>
          <div className="gold-line" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }} className="food-grid">
          {[
            { img: "/images/restaurant-burger.jpg", name: "Burger artizanal", desc: "Carne de vită, salată, castraveți, ceapă roșie, sos special, cartofi prăjiți" },
            { img: "/images/restaurant-cafea.jpg", name: "Cafea Moreno", desc: "Cafea de specialitate servită cu lapte spumat și un strop de arome" },
            { img: "/images/restaurant-burger-2.jpg", name: "Sandwich la grătar", desc: "Preparat proaspăt din ingrediente selecționate, servit cu garnitură" },
          ].map((item) => (
            <div key={item.name} style={{ overflow: "hidden", background: "#fff", boxShadow: "var(--shadow)" }}>
              <div style={{ position: "relative", height: 220 }}>
                <Image src={item.img} alt={item.name} fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.4rem" }}>{item.name}</h3>
                <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.78rem", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Meniu */}
      <section style={{ padding: "3rem 2rem 7rem", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label">Meniu orientativ</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>Ce servim</h2>
          <div className="gold-line" />
          <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-light)", fontSize: "0.75rem", marginTop: "1rem" }}>
            * Prețurile complete sunt afișate în restaurant sau la cerere. Meniul se poate modifica sezonier.
          </p>
        </div>

        {/* Meniu zilei banner */}
        <div style={{ background: "var(--gold)", padding: "1.5rem 2.5rem", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ fontSize: "1.8rem" }}>🍱</span>
            <div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", fontWeight: 700, color: "#1a1a1a", letterSpacing: "0.15em", textTransform: "uppercase" }}>Ofertă zilnică</p>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 800, color: "#1a1a1a" }}>Meniul zilei — supă + fel principal</p>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontFamily: "var(--font-playfair)", fontSize: "2.5rem", fontWeight: 900, color: "#1a1a1a", lineHeight: 1 }}>30 <span style={{ fontSize: "1rem", fontWeight: 400 }}>lei</span></p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", color: "rgba(26,26,26,0.7)", textTransform: "uppercase", letterSpacing: "0.1em" }}>disponibil la prânz</p>
          </div>
        </div>

        {categories.map((cat) => (
          <div key={cat} style={{ marginBottom: "4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
              <div style={{ width: 36, height: 2, background: "var(--gold)", flexShrink: 0 }} />
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.8rem", fontWeight: 800, color: "var(--text)" }}>{cat}</h2>
              <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
            </div>
            {menu[cat].map((item, i) => (
              <div key={item.name} style={{
                display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "2rem",
                padding: "1.1rem 0",
                borderBottom: i < menu[cat].length - 1 ? "1px solid var(--border)" : "none",
              }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.2rem" }}>{item.name}</h3>
                  <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.78rem", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
                <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "var(--gold)", whiteSpace: "nowrap", fontWeight: 600 }}>
                  Solicită preț
                </div>
              </div>
            ))}
          </div>
        ))}

        <div style={{ textAlign: "center", padding: "3rem 2rem", border: "1px solid var(--border)", background: "var(--bg-alt)" }}>
          <p className="section-label">Rezervare masă</p>
          <h3 className="section-title" style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Rezervați o masă</h3>
          <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
            Pentru grupuri, evenimente sau catering, contactați-ne în avans.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:0732403464" className="btn-gold">📞 0732 403 464</a>
            <Link href="/contact" className="btn-outline-dark">Formular contact</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .gallery-grid { grid-template-columns: 1fr 1fr !important; grid-template-rows: auto !important; }
          .gallery-grid > div:first-child { grid-row: auto !important; }
          .food-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
