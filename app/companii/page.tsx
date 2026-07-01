"use client";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  { icon: "🛏️", title: "Cazare corporate", desc: "Tarife preferențiale pentru delegații și angajații în deplasare. Contracte lunare cu facturare simplificată. Check-in 24/7." },
  { icon: "🍽️", title: "Mese de afaceri", desc: "Prânzuri de lucru, cine de business și mese festive pentru parteneri, clienți și colegi din toată echipa." },
  { icon: "📋", title: "Facturare lunară", desc: "Factură unică la final de lună pentru toate serviciile consumate. Parteneriat pe termen lung cu prețuri fixe." },
  { icon: "🚛", title: "Parcare vehicule grele", desc: "Parcare gratuită și spațioasă inclusiv pentru TIR-uri și vehicule de mare tonaj. Locație direct pe E60." },
  { icon: "🎓", title: "Conferințe & Training", desc: "Organizăm sesiuni de training, ședințe de management și conferințe în spațiul nostru elegant de 100 locuri." },
  { icon: "🍱", title: "Catering la birou", desc: "Livrăm mâncare caldă pentru angajații dvs. direct la sediu, fabrică sau birou — zilnic sau la cerere." },
];

const targetCompanies = [
  "Companii din Parcul Industrial Borș",
  "Firme cu activitate transfrontalieră RO-HU",
  "Companii de transport și logistică",
  "Delegații corporate internaționale",
  "Echipe de management în deplasare",
  "Instituții publice și organizații",
];

export default function CompaniiPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "45vh", minHeight: 380, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image src="/images/hotel-facade.png" alt="Corporate ONYX B&B" fill style={{ objectFit: "cover", objectPosition: "center 30%" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 2rem" }}>
          <p className="section-label">Soluții B2B</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#fff", lineHeight: 1.1, marginBottom: "0.5rem" }}>Pentru Companii</h1>
          <div className="gold-line" />
          <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.8)", fontSize: "0.85rem", marginTop: "0.8rem" }}>
            Parteneriate corporate · Facturare lunară · Prețuri preferențiale
          </p>
        </div>
      </section>

      {/* Intro + Stats */}
      <section style={{ padding: "7rem 2rem", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="two-col">
          <div>
            <p className="section-label">Parteneriat de lungă durată</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", marginBottom: "0.5rem" }}>Soluții complete pentru afacerea dvs.</h2>
            <div className="gold-line-left" />
            <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.92rem", lineHeight: 1.9, margin: "1.5rem 0" }}>
              ONYX B&B este partenerul de încredere pentru companiile din Borș, Parcul Industrial și regiune. Oferim cazare, masă și servicii de catering cu prețuri de contract, flexibilitate maximă și suport 24/7.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "2.5rem" }}>
              {targetCompanies.map((c) => (
                <div key={c} style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
                  <span style={{ color: "var(--gold)", fontSize: "0.65rem", flexShrink: 0 }}>✦</span>
                  <span style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.85rem" }}>{c}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="tel:0732403464" className="btn-gold">📞 Sună acum</a>
              <a href="mailto:rezervari@onyxhotel.ro" className="btn-outline-dark">✉️ Trimite email</a>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)" }}>
            {[
              { v: "100m", l: "De Vama Borș" },
              { v: "24/7", l: "Recepție" },
              { v: "100", l: "Locuri restaurant" },
              { v: "E60", l: "Acces direct" },
            ].map((s) => (
              <div key={s.l} style={{ background: "#fff", padding: "3rem 2rem", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-playfair)", fontSize: "2.5rem", fontWeight: 900, color: "var(--gold)", marginBottom: "0.5rem" }}>{s.v}</p>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.12em" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: "7rem 2rem", background: "var(--bg-alt)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-label">Avantaje</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>Ce includem în parteneriatul corporate</h2>
            <div className="gold-line" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="ben-grid">
            {benefits.map((b) => (
              <div key={b.title} style={{ background: "#fff", padding: "2.5rem 2rem", boxShadow: "var(--shadow)", borderTop: "3px solid transparent", transition: "border-color 0.3s, box-shadow 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderTopColor = "var(--gold)"; e.currentTarget.style.boxShadow = "var(--shadow-lg)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderTopColor = "transparent"; e.currentTarget.style.boxShadow = "var(--shadow)"; }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "1.2rem" }}>{b.icon}</div>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.8rem" }}>{b.title}</h3>
                <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.83rem", lineHeight: 1.8 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Închiriere sală */}
      <section style={{ padding: "7rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-label">Spațiu profesional</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>Închiriere sală — Cursuri, Traininguri & Conferințe</h2>
            <div className="gold-line" />
            <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.9rem", marginTop: "1rem", maxWidth: 700, margin: "1rem auto 0" }}>
              Sală modernă, climatizată, cu echipamente complete — configurabilă pentru training, workshop, prezentare sau conferință. Cafea, apă și snack-uri incluse în funcție de numărul de participanți.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start", marginBottom: "4rem" }} className="two-col">
            <div style={{ position: "relative", height: 480, overflow: "hidden" }}>
              <Image src="/images/sala-curs.png" alt="Sală cursuri și conferințe ONYX B&B" fill style={{ objectFit: "cover", objectPosition: "center" }} />
              <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", background: "var(--gold)", padding: "0.8rem 1.4rem" }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", fontWeight: 700, color: "#1a1a1a", letterSpacing: "0.12em", textTransform: "uppercase" }}>Capacitate maximă</p>
                <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.8rem", fontWeight: 900, color: "#1a1a1a", lineHeight: 1 }}>100 locuri</p>
              </div>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.6rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>Ce este inclus</h3>
              <div className="gold-line-left" style={{ marginBottom: "1.5rem" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom: "2rem" }}>
                {[
                  "Sală climatizată, luminoasă, configurabilă după necesități",
                  "Proiector + ecran de proiecție",
                  "Flipchart cu markere",
                  "Wi-Fi dedicat de mare viteză",
                  "Microfon wireless (la cerere)",
                  "Cafea, apă plată/minerală și snack-uri incluse",
                  "Personal de asistență disponibil pe durata evenimentului",
                  "Parcare gratuită pentru toți participanții",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: "0.15rem", fontSize: "0.6rem" }}>✦</span>
                    <span style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.85rem" }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Pachete preț */}
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>Pachete în funcție de participanți</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom: "2rem" }}>
                {[
                  { grup: "până la 20 persoane", detalii: "Cafea + apă + 2 pauze cu snack-uri", pret: "Preț la cerere" },
                  { grup: "20 – 50 persoane", detalii: "Cafea + apă + 3 pauze cu snack-uri + prânz opțional", pret: "Preț la cerere" },
                  { grup: "50 – 100 persoane", detalii: "Pachet complet: cafea, apă, snack-uri + masă de prânz inclusă", pret: "Preț la cerere" },
                ].map((p) => (
                  <div key={p.grup} style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: "1rem", padding: "1rem 1.2rem", border: "1px solid var(--border)", background: "var(--bg-alt)", borderLeft: "3px solid var(--gold)" }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.2rem" }}>{p.grup}</p>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "var(--text-mid)" }}>{p.detalii}</p>
                    </div>
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", fontWeight: 700, color: "var(--gold)", whiteSpace: "nowrap" }}>{p.pret}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", padding: "1rem 1.5rem", marginBottom: "1.5rem" }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.82rem", color: "var(--text-mid)", lineHeight: 1.7 }}>
                  🎯 <strong style={{ color: "var(--text)" }}>Ofertă personalizată</strong> — prețul variază în funcție de numărul de participanți, durata sesiunii și serviciile solicitate. Contactați-ne pentru un deviz gratuit în 24 ore.
                </p>
              </div>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href={`https://wa.me/40732403464?text=${encodeURIComponent("Bună ziua! Doresc informații despre închirierea sălii pentru cursuri/training/conferință la ONYX B&B. Vă rog să-mi trimiteți un deviz.")}`} target="_blank" rel="noopener noreferrer" className="btn-gold">
                  💬 Solicită deviz WhatsApp
                </a>
                <a href="tel:0732403464" className="btn-outline-dark">📞 0732 403 464</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "7rem 2rem", background: "var(--bg-alt)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p className="section-label">Începeți parteneriatul</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", marginBottom: "0.5rem" }}>Contactați-ne pentru o ofertă personalizată</h2>
          <div className="gold-line" />
          <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.92rem", lineHeight: 1.8, margin: "1.5rem 0 2.5rem" }}>
            Discutăm gratuit nevoile companiei dvs. și vă pregătim o propunere de parteneriat adaptată bugetului și volumului. Răspundem în maxim 24 ore.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:0732403464" className="btn-gold">📞 0732 403 464</a>
            <a href="mailto:rezervari@onyxhotel.ro" className="btn-outline-dark">✉️ rezervari@onyxhotel.ro</a>
            <Link href="/contact" className="btn-outline-gold">Formular contact</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .ben-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          .ben-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
