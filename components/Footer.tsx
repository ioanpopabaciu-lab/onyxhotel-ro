"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#161616", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
      {/* Map */}
      <div style={{ width: "100%", height: 300, position: "relative" }}>
        <iframe
          src="https://maps.google.com/maps?q=Soseaua+E60+Borsului+157+Bors+Bihor+Romania&z=17&output=embed"
          width="100%"
          height="300"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Locație ONYX B&B Hotel & Restaurant"
        />
      </div>

      {/* Main footer */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "4rem 2rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.2rem" }}>
              <Image src="/images/logo.png" alt="ONYX B&B" width={50} height={50} style={{ objectFit: "contain" }} />
              <div>
                <div style={{ fontFamily: "var(--font-playfair)", fontSize: "1.1rem", fontWeight: 800, color: "var(--gold)" }}>ONYX B&B</div>
                <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", color: "#888", letterSpacing: "0.2em", textTransform: "uppercase" }}>Hotel & Restaurant</div>
              </div>
            </div>
            <p style={{ fontFamily: "var(--font-inter)", color: "#777", fontSize: "0.83rem", lineHeight: 1.8 }}>
              Hotel 3 stele la 100m de Vama Borș, direct pe E60. Cazare, restaurant și conferințe pentru clienți corporate și de tranzit.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontFamily: "var(--font-inter)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.2rem", fontWeight: 600 }}>Navigare</h4>
            {[["Acasă", "/"], ["Camere", "/camere"], ["Restaurant", "/restaurant"], ["Evenimente", "/conferinte"], ["Despre", "/despre"], ["Contact", "/contact"]].map(([label, href]) => (
              <div key={href} style={{ marginBottom: "0.5rem" }}>
                <Link href={href} style={{ color: "#888", textDecoration: "none", fontFamily: "var(--font-inter)", fontSize: "0.83rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
                >{label}</Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "var(--font-inter)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.2rem", fontWeight: 600 }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <p style={{ fontFamily: "var(--font-inter)", color: "#888", fontSize: "0.83rem", lineHeight: 1.6 }}>
                📍 Șos. E60, Borșului nr. 157<br />Borș, Jud. Bihor, România
              </p>
              <a href="tel:0732403464" style={{ color: "#888", textDecoration: "none", fontFamily: "var(--font-inter)", fontSize: "0.83rem" }}>📞 0732 403 464</a>
              <a href="tel:0753527114" style={{ color: "#888", textDecoration: "none", fontFamily: "var(--font-inter)", fontSize: "0.83rem" }}>📞 0753 527 114</a>
              <a href="mailto:rezervari@onyxhotel.ro" style={{ color: "#888", textDecoration: "none", fontFamily: "var(--font-inter)", fontSize: "0.83rem" }}>✉️ rezervari@onyxhotel.ro</a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 style={{ fontFamily: "var(--font-inter)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.2rem", fontWeight: 600 }}>Locație strategică</h4>
            <p style={{ fontFamily: "var(--font-inter)", color: "#888", fontSize: "0.83rem", lineHeight: 1.8, marginBottom: "1rem" }}>
              100m de frontiera România–Ungaria<br />
              Acces direct de pe E60<br />
              Ideal pentru transportatori & corporate
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=47.115107,21.806085"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
              style={{ fontSize: "0.65rem", padding: "0.6rem 1.2rem" }}
            >
              Deschide în Google Maps
            </a>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ color: "#444", fontFamily: "var(--font-inter)", fontSize: "0.73rem" }}>
            © 2026 ONYX B&B Hotel & Restaurant — Borș, Bihor. Toate drepturile rezervate.
          </p>
          <a href="mailto:rezervari@onyxhotel.ro" style={{ color: "#444", fontFamily: "var(--font-inter)", fontSize: "0.73rem", textDecoration: "none" }}>
            rezervari@onyxhotel.ro
          </a>
        </div>
      </div>
    </footer>
  );
}
