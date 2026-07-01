"use client";
import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";
import BookingWidget from "@/components/BookingWidget";
import Reviews from "@/components/Reviews";

const whyOnyx = [
  { icon: "📍", label: "100m Vama Borș" },
  { icon: "🅿️", label: "Parcare gratuită" },
  { icon: "📶", label: "Wi-Fi inclus" },
  { icon: "🍽️", label: "Restaurant 100 locuri" },
  { icon: "🎉", label: "Sală evenimente" },
  { icon: "⚡", label: "Check-in rapid" },
  { icon: "🔐", label: "Acces cu PIN" },
  { icon: "💼", label: "Business Friendly" },
];

const camere = [
  { name: "Single", pret: 195, img: "/images/hotel-1.jpg", desc: "Ideal pentru transportatori și oameni de afaceri în deplasare." },
  { name: "Dublă", pret: 230, img: "/images/hotel-2.jpg", desc: "Confort superior pentru cupluri sau colegi de echipă." },
  { name: "Triplă", pret: 300, img: "/images/hotel-3.jpg", desc: "Spațiu generos pentru familie sau grupuri mici." },
];

const cateringServices = [
  { icon: "🏢", title: "Firme & Companii", desc: "Prânzuri de afaceri, mese pentru angajați și delegații corporate. Contracte lunare." },
  { icon: "🎊", title: "Evenimente private", desc: "Nunți, botezuri, aniversări — meniu complet personalizat la locația dorită." },
  { icon: "🏛️", title: "Instituții", desc: "Servicii de catering pentru instituții publice și organizații din Bihor." },
  { icon: "🚛", title: "Grupuri & Tranzit", desc: "Mese calde pregătite rapid pentru grupuri de șoferi și transportatori." },
];

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />

      {/* WIDGET REZERVARE */}
      <div style={{ background: "rgba(18,18,18,0.97)", borderBottom: "2px solid rgba(201,168,76,0.3)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
          <BookingWidget />
        </div>
      </div>

      {/* DE CE ONYX — 8 iconuri */}
      <section style={{ padding: "4rem 2rem 6rem", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="section-label">De ce să ne alegeți</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>De ce ONYX B&B?</h2>
            <div className="gold-line" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "var(--border)" }} className="why-grid">
            {whyOnyx.map((item) => (
              <div key={item.label} style={{ background: "#fff", padding: "2.5rem 1.5rem", textAlign: "center", transition: "background 0.25s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--bg-alt)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; }}
              >
                <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{item.icon}</div>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", fontWeight: 600, color: "var(--text)", letterSpacing: "0.04em" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOTEL — light grey */}
      <section style={{ padding: "7rem 2rem", background: "var(--bg-alt)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-label">Cazare 3 stele</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>Camere confortabile</h2>
            <div className="gold-line" />
            <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.88rem", marginTop: "0.8rem" }}>
              Check-in după 14:00 · Check-out până la 11:00 · Recepție 24/7 · Animale permise
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginBottom: "3rem" }} className="rooms-grid">
            {camere.map((c) => (
              <div key={c.name} style={{ background: "#fff", boxShadow: "var(--shadow)", overflow: "hidden", transition: "box-shadow 0.3s, transform 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--shadow)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ position: "relative", height: 220 }}>
                  <Image src={c.img} alt={`Cameră ${c.name}`} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "1.8rem" }}>
                  <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>Cameră {c.name}</h3>
                  <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.82rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>{c.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.2rem" }}>de la</p>
                      <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.9rem", fontWeight: 900, color: "var(--text)", lineHeight: 1 }}>
                        {c.pret} <span style={{ fontSize: "0.85rem", fontWeight: 400, color: "var(--text-mid)" }}>lei/noapte</span>
                      </p>
                    </div>
                    <Link href="/camere" className="btn-gold" style={{ fontSize: "0.64rem", padding: "0.65rem 1.4rem" }}>Rezervă</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/camere" className="btn-outline-dark">Vezi toate detaliile & prețurile</Link>
          </div>
        </div>
      </section>

      {/* RESTAURANT — white */}
      <section style={{ padding: "7rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="two-col">
          <div style={{ position: "relative", height: 520 }}>
            <Image src="/images/restaurant-1.jpg" alt="Restaurant ONYX B&B" fill style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "var(--gold)", padding: "1.2rem 1.8rem" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", fontWeight: 700, color: "#1a1a1a", letterSpacing: "0.12em", textTransform: "uppercase" }}>Deschis zilnic</p>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontWeight: 900, color: "#1a1a1a" }}>07:00 – 23:00</p>
            </div>
          </div>
          <div>
            <p className="section-label">Gastronomie</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", marginBottom: "0.5rem" }}>Restaurant cu 100 de locuri</h2>
            <div className="gold-line-left" />
            <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.9rem", lineHeight: 1.9, margin: "1.5rem 0 2rem" }}>
              Bucătărie tradițională românească și internațională. Meniu zilei la prânz pentru 30 lei. Happy Hour săptămânal cu -35% la toate preparatele. Bar funcțional, mic dejun 07:00–10:00.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2.5rem" }}>
              {[{ v: "100", l: "Locuri" }, { v: "30 lei", l: "Meniu zilei" }, { v: "-35%", l: "Happy Hour" }, { v: "Bar", l: "Funcțional" }].map((s) => (
                <div key={s.l} style={{ border: "1px solid var(--border)", padding: "1.2rem", textAlign: "center" }}>
                  <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.6rem", fontWeight: 900, color: "var(--gold)", marginBottom: "0.2rem" }}>{s.v}</p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.63rem", color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.l}</p>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="tel:0732403464" className="btn-gold">Rezervă o masă</a>
              <Link href="/restaurant" className="btn-outline-dark">Vezi meniul</Link>
            </div>
          </div>
        </div>
      </section>

      {/* EVENIMENTE — dark photo */}
      <section style={{ position: "relative", padding: "8rem 2rem", overflow: "hidden" }}>
        <Image src="/images/hotel-3.jpg" alt="Evenimente ONYX B&B" fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.80)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 700, marginBottom: "4rem" }}>
            <p className="section-label">Sală de evenimente</p>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, color: "#fff", fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.1, marginBottom: "0.5rem" }}>
              Momente de neuitat în restaurantul nostru
            </h2>
            <div className="gold-line-left" />
            <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", lineHeight: 1.9, margin: "1.5rem 0 2.5rem" }}>
              100 de locuri · Design elegant modern · Organizăm nunți, botezuri, aniversări, majorate, banchete corporate, conferințe și evenimente private. Echipa noastră se ocupă de toate detaliile.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/conferinte" className="btn-gold">Solicită ofertă</Link>
              <a href="tel:0732403464" className="btn-white">📞 0732 403 464</a>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "1px" }} className="events-grid">
            {["💍 Nunți", "🍼 Botezuri", "🥂 Corporate", "🎂 Aniversări", "🎭 Private", "🚛 Grupuri"].map((ev) => (
              <div key={ev} style={{ background: "rgba(255,255,255,0.06)", padding: "1.5rem 1rem", textAlign: "center", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.08)", transition: "background 0.25s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.18)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
              >
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", fontWeight: 600, color: "rgba(255,255,255,0.85)", letterSpacing: "0.05em" }}>{ev}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATERING — light grey */}
      <section style={{ padding: "7rem 2rem", background: "var(--bg-alt)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-label">Servicii alimentare</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>Catering ONYX</h2>
            <div className="gold-line" />
            <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.9rem", marginTop: "1rem" }}>
              Mâncare caldă pentru companii, instituții și evenimente de grup
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", marginBottom: "3rem" }} className="catering-grid">
            {cateringServices.map((s) => (
              <div key={s.title} style={{ background: "#fff", padding: "2.5rem 2rem", boxShadow: "var(--shadow)", transition: "box-shadow 0.3s, transform 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-lg)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--shadow)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "1.2rem" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.7rem" }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.82rem", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/catering" className="btn-gold">Solicită ofertă catering</Link>
          </div>
        </div>
      </section>

      {/* PENTRU COMPANII — white */}
      <section style={{ padding: "7rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="two-col">
          <div>
            <p className="section-label">Soluții B2B</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", marginBottom: "0.5rem" }}>Soluții complete pentru companii</h2>
            <div className="gold-line-left" />
            <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.9rem", lineHeight: 1.9, margin: "1.5rem 0" }}>
              Companii din Parcul Industrial Borș și din regiune beneficiază de pachete speciale: cazare pentru delegații, mese de afaceri, catering pentru angajați și contracte corporate cu facturare lunară.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "2.5rem" }}>
              {["Cazare business cu prețuri de contract", "Mese zilnice pentru angajați & delegații", "Catering pentru birouri și fabrici", "Sală pentru conferințe & training", "Facturare lunară și contracte preferențiale", "Parcare gratuită inclusiv vehicule grele"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                  <span style={{ color: "var(--gold)", fontSize: "0.65rem", flexShrink: 0 }}>✦</span>
                  <span style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.85rem" }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/companii" className="btn-gold">Pachete pentru companii</Link>
              <a href="mailto:rezervari@onyxhotel.ro" className="btn-outline-dark">Trimite email</a>
            </div>
          </div>
          <div style={{ position: "relative", height: 500 }}>
            <Image src="/images/hotel-facade.png" alt="Corporate ONYX B&B" fill style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "var(--gold)", padding: "1.5rem 2rem" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", fontWeight: 700, color: "#1a1a1a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.3rem" }}>Parcare industrială</p>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.8rem", fontWeight: 900, color: "#1a1a1a" }}>TIR</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIE band */}
      <div style={{ background: "var(--gold)", padding: "1.5rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center", gap: "3.5rem", flexWrap: "wrap" }}>
          {["📍 Borș, Jud. Bihor", "🛣️ Direct pe E60", "🇭🇺 100m frontiera RO-HU", "⭐⭐⭐ 3 Stele", "🅿️ Parcare gratuită TIR"].map((item) => (
            <span key={item} style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", fontWeight: 700, color: "#1a1a1a", letterSpacing: "0.1em", textTransform: "uppercase" }}>{item}</span>
          ))}
        </div>
      </div>

      {/* REVIEWS */}
      <Reviews />

      {/* CONTACT RAPID + HARTA */}
      <section style={{ padding: "7rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-label">Locație & Contact</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>Găsiți-ne ușor</h2>
            <div className="gold-line" />
            <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.9rem", marginTop: "1rem" }}>
              Șos. E60, Borșului nr. 157, Borș, Jud. Bihor — 100m de Vama Borș
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "3rem", alignItems: "start" }} className="contact-grid">
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: "📞", label: "Rezervări", value: "0732 403 464", href: "tel:0732403464" },
                { icon: "📞", label: "Recepție", value: "0753 527 114", href: "tel:0753527114" },
                { icon: "✉️", label: "Email", value: "rezervari@onyxhotel.ro", href: "mailto:rezervari@onyxhotel.ro" },
              ].map((c) => (
                <a key={c.label} href={c.href} style={{ display: "flex", gap: "1rem", padding: "1.2rem 1.5rem", background: "var(--bg-alt)", border: "1px solid var(--border)", textDecoration: "none", transition: "border-color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <span style={{ fontSize: "1.2rem" }}>{c.icon}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.2rem" }}>{c.label}</p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.88rem", color: "var(--text)", fontWeight: 600 }}>{c.value}</p>
                  </div>
                </a>
              ))}
              <Link href="/contact" className="btn-gold" style={{ textAlign: "center", marginTop: "0.5rem" }}>Formular rezervare</Link>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Soseaua+E60+Borsului+157+Bors+Bihor+Romania&z=17&output=embed"
              width="100%" height="380"
              style={{ border: 0, display: "block" }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locație ONYX B&B"
            />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .why-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .catering-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .rooms-grid { grid-template-columns: 1fr !important; }
          .events-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .catering-grid { grid-template-columns: 1fr !important; }
          .events-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
