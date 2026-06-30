"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--border)" }}>

      {/* Map strip */}
      <div style={{ width: "100%", height: 260 }}>
        <iframe
          src="https://maps.google.com/maps?q=Soseaua+E60+Borsului+157+Bors+Bihor+Romania&z=17&output=embed"
          width="100%" height="260"
          style={{ border: 0, display: "block" }}
          allowFullScreen loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Locație ONYX B&B Hotel & Restaurant"
        />
      </div>

      {/* Main footer */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "4rem 2rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>

          {/* Brand */}
          <div>
            <div style={{ position: "relative", width: 200, height: 80, marginBottom: "1.2rem" }}>
              <Image src="/images/logo.png" alt="ONYX B&B Hotel & Restaurant" fill style={{ objectFit: "contain", objectPosition: "left center" }} />
            </div>
            <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.82rem", lineHeight: 1.8 }}>
              Hotel 3 stele la 100m de Vama Borș, direct pe E60. Cazare, restaurant, catering și evenimente.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontFamily: "var(--font-inter)", fontSize: "0.67rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text)", marginBottom: "1.2rem", fontWeight: 700 }}>Navigare</h4>
            {[["Acasă", "/"], ["Hotel & Camere", "/camere"], ["Restaurant", "/restaurant"], ["Evenimente", "/conferinte"], ["Catering", "/catering"], ["Companii", "/companii"], ["Galerie", "/galerie"], ["Contact", "/contact"]].map(([label, href]) => (
              <div key={href} style={{ marginBottom: "0.55rem" }}>
                <Link href={href} style={{ color: "var(--text-mid)", textDecoration: "none", fontFamily: "var(--font-inter)", fontSize: "0.82rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-mid)")}
                >{label}</Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "var(--font-inter)", fontSize: "0.67rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text)", marginBottom: "1.2rem", fontWeight: 700 }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.82rem", lineHeight: 1.6 }}>
                📍 Șos. E60, Borșului nr. 157<br />Borș, Jud. Bihor, România
              </p>
              {[["📞 0732 403 464", "tel:0732403464"], ["📞 0753 527 114", "tel:0753527114"], ["✉️ rezervari@onyxhotel.ro", "mailto:rezervari@onyxhotel.ro"]].map(([label, href]) => (
                <a key={href} href={href} style={{ color: "var(--text-mid)", textDecoration: "none", fontFamily: "var(--font-inter)", fontSize: "0.82rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-mid)")}
                >{label}</a>
              ))}
              <a href="https://wa.me/40732403464" target="_blank" rel="noopener noreferrer"
                style={{ color: "#25D366", fontFamily: "var(--font-inter)", fontSize: "0.82rem", textDecoration: "none" }}>
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 style={{ fontFamily: "var(--font-inter)", fontSize: "0.67rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text)", marginBottom: "1.2rem", fontWeight: 700 }}>Locație strategică</h4>
            <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.82rem", lineHeight: 1.9, marginBottom: "1.2rem" }}>
              100m de frontiera România–Ungaria<br />
              Acces direct de pe E60<br />
              Parcul Industrial Borș — 5 min<br />
              Ideal pentru transportatori & corporate
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Soseaua+E60+Borsului+157+Bors+Bihor+Romania"
              target="_blank" rel="noopener noreferrer"
              className="btn-outline-dark"
              style={{ fontSize: "0.64rem", padding: "0.6rem 1.2rem" }}
            >
              Deschide în Google Maps
            </a>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ color: "var(--text-light)", fontFamily: "var(--font-inter)", fontSize: "0.72rem" }}>
            © 2026 ONYX B&B Hotel & Restaurant — Borș, Bihor. Toate drepturile rezervate.
          </p>
          <p style={{ color: "var(--text-light)", fontFamily: "var(--font-inter)", fontSize: "0.72rem" }}>
            Hotel 3 stele · Vama Borș · E60
          </p>
        </div>
      </div>
    </footer>
  );
}
