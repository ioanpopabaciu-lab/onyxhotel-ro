"use client";
import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";

const features = [
  { icon: "🛏️", title: "Camere confortabile", desc: "Camere climatizate cu TV, baie privată și paturi matrimoniale. Curățenie zilnică, lenjerie proaspătă." },
  { icon: "🍽️", title: "Restaurant 100 locuri", desc: "Bucătărie tradițională și internațională. Bar funcțional. Mic dejun, prânz și cină." },
  { icon: "🤝", title: "Conferințe & Corporate", desc: "Două săli în mansardă pentru training-uri, ședințe și evenimente de afaceri." },
  { icon: "📍", title: "100m de Vama Borș", desc: "Locație ideală pe E60, la frontiera România–Ungaria. Parcare mare, acces ușor TIR." },
];

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />

      {/* Bandă de locație */}
      <div style={{ background: "var(--gold)", padding: "1rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center", gap: "3rem", flexWrap: "wrap" }}>
          {["📍 Borș, Jud. Bihor", "🛣️ Direct pe E60", "🇭🇺 100m de frontiera RO-HU", "⭐⭐⭐ 3 Stele"].map((item) => (
            <span key={item} style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", fontWeight: 700, color: "var(--anthracite)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{item}</span>
          ))}
        </div>
      </div>

      {/* Intro */}
      <section style={{ padding: "7rem 2rem", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <p className="section-label">Cine suntem</p>
        <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>
          Hotelul de referință la frontiera România–Ungaria
        </h2>
        <div className="gold-line" />
        <p style={{ fontFamily: "var(--font-inter)", color: "#aaa", fontSize: "0.95rem", lineHeight: 1.9, maxWidth: 700, margin: "1.5rem auto 0" }}>
          ONYX B&B Hotel & Restaurant este alegerea preferată a transportatorilor, delegațiilor corporate și călătorilor de tranzit. Poziționat strategic la 100 de metri de Vama Borș, pe șoseaua europeană E60, oferim servicii complete: cazare, restaurant și spații de conferință — toate sub același acoperiș.
        </p>
      </section>

      {/* Features */}
      <section style={{ padding: "4rem 2rem 7rem", background: "var(--anthracite-mid)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2px" }}>
            {features.map((f) => (
              <div key={f.title} style={{ background: "#2a2a2a", padding: "2.5rem 2rem", borderBottom: "3px solid transparent", transition: "border-color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "transparent")}
              >
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{f.icon}</div>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", color: "var(--cream)", marginBottom: "0.7rem" }}>{f.title}</h3>
                <p style={{ fontFamily: "var(--font-inter)", color: "#888", fontSize: "0.83rem", lineHeight: 1.8 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Camere section */}
      <section style={{ padding: "7rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div style={{ position: "relative", height: 480 }}>
            <Image src="/images/hotel-1.jpg" alt="Camere ONYX B&B" fill style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: "1.5rem", right: "1.5rem", background: "var(--gold)", padding: "1rem 1.5rem" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", fontWeight: 700, color: "var(--anthracite)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Disponibil 24/7</p>
            </div>
          </div>
          <div>
            <p className="section-label">Cazare</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", marginBottom: "0.5rem" }}>Camere confortabile pentru orice nevoie</h2>
            <div className="gold-line-left" />
            <p style={{ fontFamily: "var(--font-inter)", color: "#aaa", fontSize: "0.9rem", lineHeight: 1.9, margin: "1.5rem 0" }}>
              Camerele ONYX B&B sunt dotate cu climatizare, TV, baie privată și paturi matrimoniale. Curățenie zilnică, lenjerie proaspătă la fiecare sejur. Recepție disponibilă non-stop pentru check-in la orice oră — ideal pentru transportatori.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem" }}>
              {["Climatizare individuală", "TV cu canale internaționale", "Baie privată", "Paturi matrimoniale", "Wi-Fi gratuit", "Parcare gratuită TIR"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                  <span style={{ color: "var(--gold)", fontSize: "0.7rem", fontWeight: 700 }}>✦</span>
                  <span style={{ fontFamily: "var(--font-inter)", color: "#ccc", fontSize: "0.83rem" }}>{item}</span>
                </div>
              ))}
            </div>
            <Link href="/camere" className="btn-gold">Vezi camerele</Link>
          </div>
        </div>
      </section>

      {/* Restaurant banner */}
      <section style={{ position: "relative", height: 520, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image src="/images/restaurant-1.jpg" alt="Restaurant ONYX" fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 2rem", maxWidth: 700 }}>
          <p className="section-label">Gastronomie</p>
          <h2 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "0.5rem" }}>Restaurant cu 100 de locuri</h2>
          <div className="gold-line" />
          <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", lineHeight: 1.9, margin: "1.5rem 0" }}>
            Bucătărie tradițională românească și internațională. Bar funcțional. Mic dejun, prânz și cină. Meniu variat, porții consistente — perfect pentru șoferi profesioniști și delegații de afaceri.
          </p>
          <Link href="/restaurant" className="btn-gold">Descoperă meniul</Link>
        </div>
      </section>

      {/* Conferinte */}
      <section style={{ padding: "7rem 2rem", background: "var(--anthracite-mid)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <p className="section-label">Corporate</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", marginBottom: "0.5rem" }}>Conferințe & Evenimente de afaceri</h2>
            <div className="gold-line-left" />
            <p style={{ fontFamily: "var(--font-inter)", color: "#aaa", fontSize: "0.9rem", lineHeight: 1.9, margin: "1.5rem 0" }}>
              Două săli de conferință în mansardă, perfecte pentru training-uri, ședințe și workshop-uri. Capacitate flexibilă, echipament tehnic, pauze de cafea incluse în pachet.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { label: "Săli disponibile", value: "2" },
                { label: "Restaurant", value: "100 locuri" },
                { label: "Parcare", value: "Gratuită" },
                { label: "Wi-Fi", value: "Business" },
              ].map((s) => (
                <div key={s.label} style={{ border: "1px solid rgba(201,168,76,0.2)", padding: "1rem" }}>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.3rem" }}>{s.label}</p>
                  <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", color: "var(--cream)" }}>{s.value}</p>
                </div>
              ))}
            </div>
            <Link href="/conferinte" className="btn-gold">Vezi pachetele corporate</Link>
          </div>
          <div style={{ position: "relative", height: 480 }}>
            <Image src="/images/hotel-2.jpg" alt="Conferințe ONYX B&B" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* Contact rapid + hartă */}
      <section style={{ padding: "7rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-label">Locație & Contact</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>Găsiți-ne ușor</h2>
            <div className="gold-line" />
            <p style={{ fontFamily: "var(--font-inter)", color: "#aaa", fontSize: "0.9rem", marginTop: "1rem" }}>
              Șos. E60, Borșului nr. 157, Borș, Jud. Bihor — 100m de Vama Borș
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "3rem", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { icon: "📞", label: "Rezervări", value: "0732 403 464", href: "tel:0732403464" },
                { icon: "📞", label: "Recepție", value: "0753 527 114", href: "tel:0753527114" },
                { icon: "✉️", label: "Email", value: "rezervari@onyxhotel.ro", href: "mailto:rezervari@onyxhotel.ro" },
              ].map((c) => (
                <a key={c.label} href={c.href} style={{ display: "flex", gap: "1rem", padding: "1.2rem", background: "var(--anthracite-mid)", textDecoration: "none", transition: "background 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#333")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--anthracite-mid)")}
                >
                  <span style={{ fontSize: "1.3rem" }}>{c.icon}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.2rem" }}>{c.label}</p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.9rem", color: "var(--cream)" }}>{c.value}</p>
                  </div>
                </a>
              ))}
              <Link href="/contact" className="btn-gold" style={{ textAlign: "center", marginTop: "0.5rem" }}>Formular rezervare</Link>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps?q=47.115107,21.806085&z=16&output=embed"
                width="100%"
                height="380"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locație ONYX B&B Hotel & Restaurant"
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; gap: 2rem !important; }
          section > div[style*="grid-template-columns: 1fr 2fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
