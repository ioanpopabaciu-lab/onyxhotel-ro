"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [form, setForm] = useState({ nume: "", email: "", telefon: "", tip: "cazare", perioada: "", mesaj: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSent(true);
    setLoading(false);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#fff",
    border: "1px solid var(--border)",
    color: "var(--text)",
    padding: "0.9rem 1.1rem",
    fontFamily: "var(--font-inter)",
    fontSize: "0.88rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-inter)",
    fontSize: "0.63rem",
    fontWeight: 700,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "var(--gold)",
    display: "block",
    marginBottom: "0.5rem",
  };

  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "40vh", minHeight: 300, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image src="/images/hotel-facade.png" alt="Contact ONYX B&B" fill style={{ objectFit: "cover", objectPosition: "center 50%" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <p className="section-label">Suntem la dispoziția dvs.</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#fff", lineHeight: 1.1 }}>Contact <span style={{ fontFamily: "var(--font-inter)", fontWeight: 900 }}>&</span> Rezervări</h1>
          <div className="gold-line" />
        </div>
      </section>

      <section style={{ padding: "6rem 2rem", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "5rem", alignItems: "start" }} className="contact-grid">

          {/* Info */}
          <div>
            <p className="section-label">Informații</p>
            <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Date de contact</h2>
            <div className="gold-line-left" />
            <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ padding: "1.5rem", background: "var(--bg-alt)", border: "1px solid var(--border)", borderLeft: "3px solid var(--gold)" }}>
                <p style={{ ...labelStyle, marginBottom: "0.3rem" }}>Adresă</p>
                <p style={{ fontFamily: "var(--font-inter)", color: "var(--text)", fontSize: "0.88rem", lineHeight: 1.7 }}>
                  Șos. E60, Borșului nr. 157<br />Borș, Județul Bihor, România
                </p>
              </div>
              {[
                { label: "Telefon rezervări", value: "0732 403 464", href: "tel:0732403464" },
                { label: "Telefon recepție", value: "0753 527 114", href: "tel:0753527114" },
                { label: "Email rezervări", value: "rezervari@onyxhotel.ro", href: "mailto:rezervari@onyxhotel.ro" },
              ].map((c) => (
                <div key={c.label} style={{ padding: "1.2rem 1.5rem", background: "var(--bg-alt)", border: "1px solid var(--border)" }}>
                  <p style={{ ...labelStyle, marginBottom: "0.2rem" }}>{c.label}</p>
                  <a href={c.href} style={{ fontFamily: "var(--font-inter)", color: "var(--text)", fontSize: "0.92rem", textDecoration: "none", fontWeight: 600, transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
                  >{c.value}</a>
                </div>
              ))}
              <div style={{ padding: "1.2rem 1.5rem", background: "var(--bg-alt)", border: "1px solid var(--border)" }}>
                <p style={{ ...labelStyle, marginBottom: "0.2rem" }}>WhatsApp</p>
                <a href="https://wa.me/40732403464" target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "var(--font-inter)", color: "#25D366", fontSize: "0.92rem", textDecoration: "none", fontWeight: 600 }}>
                  💬 Trimite mesaj pe WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <p className="section-label">Rezervare</p>
            <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Formular de contact</h2>
            <div className="gold-line-left" />

            {sent ? (
              <div style={{ marginTop: "3rem", padding: "3rem", border: "2px solid var(--gold)", textAlign: "center", background: "#fff" }}>
                <p style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✦</p>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.8rem", color: "var(--gold)", marginBottom: "0.5rem" }}>Mesaj trimis cu succes!</h3>
                <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.85rem" }}>Vă vom contacta în cel mai scurt timp la numărul sau emailul furnizat.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                  <div>
                    <label style={labelStyle}>Nume complet *</label>
                    <input type="text" required placeholder="Ion Popescu" value={form.nume} onChange={(e) => setForm({ ...form, nume: e.target.value })} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Telefon *</label>
                    <input type="tel" required placeholder="0700 000 000" value={form.telefon} onChange={(e) => setForm({ ...form, telefon: e.target.value })} style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input type="email" placeholder="ion@exemplu.ro" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                  <div>
                    <label style={labelStyle}>Tip solicitare</label>
                    <select value={form.tip} onChange={(e) => setForm({ ...form, tip: e.target.value })} style={{ ...inputStyle, cursor: "pointer", background: "#fff" }}>
                      <option value="cazare">Rezervare cameră</option>
                      <option value="restaurant">Rezervare restaurant</option>
                      <option value="eveniment">Eveniment privat</option>
                      <option value="catering">Catering</option>
                      <option value="corporate">Parteneriat corporate</option>
                      <option value="altele">Altele</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Perioadă / Dată</label>
                    <input type="text" placeholder="ex: 15-17 iulie 2026" value={form.perioada} onChange={(e) => setForm({ ...form, perioada: e.target.value })} style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Mesaj / Detalii *</label>
                  <textarea rows={5} required placeholder="Scrieți detalii — număr persoane, tip cameră, cerințe speciale..." value={form.mesaj} onChange={(e) => setForm({ ...form, mesaj: e.target.value })} style={{ ...inputStyle, resize: "vertical" }} />
                </div>
                <button type="submit" className="btn-gold" disabled={loading} style={{ marginTop: "0.5rem", opacity: loading ? 0.7 : 1 }}>
                  {loading ? "Se trimite..." : "Trimite solicitarea"}
                </button>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", color: "var(--text-light)" }}>
                  Sau contactați-ne direct: <a href="tel:0732403464" style={{ color: "var(--gold)", textDecoration: "none" }}>0732 403 464</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Hartă */}
      <section style={{ padding: "0 2rem 7rem", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="section-label">Locație</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>Găsiți-ne pe hartă</h2>
          <div className="gold-line" />
          <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.85rem", marginTop: "1rem" }}>
            La 100m de Vama Borș, direct pe E60 — primul hotel din România după intrarea din Ungaria.
          </p>
        </div>
        <iframe
          src="https://maps.google.com/maps?q=Soseaua+E60+Borsului+157+Bors+Bihor+Romania&z=17&output=embed"
          width="100%" height="450"
          style={{ border: 0, display: "block", marginBottom: "1.5rem" }}
          allowFullScreen loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Locație ONYX B&B Hotel & Restaurant"
        />
        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <a href="https://www.google.com/maps/search/?api=1&query=Soseaua+E60+Borsului+157+Bors+Bihor+Romania" target="_blank" rel="noopener noreferrer" className="btn-gold">
            🗺️ Deschide în Google Maps
          </a>
        </div>
        <div style={{ marginTop: "2rem", padding: "1.5rem 2rem", background: "var(--bg-alt)", borderLeft: "3px solid var(--gold)" }}>
          <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.85rem", lineHeight: 1.8 }}>
            <strong style={{ color: "var(--text)" }}>Poziție strategică:</strong> ONYX B&B Hotel & Restaurant se află la 100 de metri de frontiera România–Ungaria (Vama Borș), cu acces direct de pe șoseaua europeană E60. Locație ideală pentru tranzit, transportatori TIR și delegații corporate.
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
