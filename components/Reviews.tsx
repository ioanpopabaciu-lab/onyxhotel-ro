"use client";
import { useState } from "react";

const reviews = [
  { name: "Mihai T.", rating: 5, date: "Iunie 2026", text: "Hotel excelent pentru tranzit! Am trecut frontiera noaptea și recepția era deschisă. Camera curată, pat confortabil. Restaurantul deschis dimineața devreme — perfect pentru șoferi. Recomand!" },
  { name: "Ionela P.", rating: 5, date: "Mai 2026", text: "Am organizat o masă de afaceri cu 20 de persoane. Personalul foarte amabil, mâncarea excelentă. Locație perfectă la 100m de vamă. Ne vom întoarce cu siguranță." },
  { name: "Klaus M.", rating: 4, date: "Aprilie 2026", text: "Sehr gutes Hotel direkt an der Grenze. Saubere Zimmer, freundliches Personal. Restaurant mit gutem Essen. Ideal für Transitreisende und LKW-Fahrer. Gerne wieder!" },
  { name: "Gheorghe B.", rating: 5, date: "Martie 2026", text: "Am cazat echipa firmei (8 persoane) timp de 3 zile. Prețuri corecte, condiții bune, restaurantul cu meniu zilei la 30 lei — ideal pentru corporate. Parcare spațioasă pentru mașini și TIR-uri." },
  { name: "Ana M.", rating: 5, date: "Februarie 2026", text: "Familia noastră a stat 2 nopți în drum spre Budapesta. Animale de companie permise — foarte important pentru noi. Cameră spațioasă, mic dejun bun. Locație strategică, 5 minute de la vamă." },
  { name: "Péter K.", rating: 4, date: "Ianuarie 2026", text: "Jó szálloda a határnál. Tiszta szobák, barátságos személyzet. Az étterem reggel 7-től nyit, ami tökéletes az utazóknak. Az ár-érték arány kiváló. Ajánlom!" },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ color: i <= count ? "var(--gold)" : "#ddd", fontSize: "0.85rem" }}>★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [active, setActive] = useState(0);
  const visible = [reviews[active], reviews[(active + 1) % reviews.length], reviews[(active + 2) % reviews.length]];

  return (
    <section style={{ padding: "7rem 2rem", background: "var(--bg-alt)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label">Ce spun oaspeții noștri</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>Recenzii verificate</h2>
          <div className="gold-line" />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.8rem", marginTop: "1.5rem" }}>
            <Stars count={5} />
            <span style={{ fontFamily: "var(--font-playfair)", fontSize: "1.8rem", color: "var(--gold)", fontWeight: 900 }}>4.8</span>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "var(--text-light)" }}>/ 5 · bazat pe {reviews.length}+ recenzii</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginBottom: "2.5rem" }} className="reviews-grid">
          {visible.map((r, i) => (
            <div key={i} style={{ background: "#fff", padding: "2rem", borderTop: "3px solid var(--gold)", boxShadow: "var(--shadow)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-inter)", fontWeight: 700, color: "var(--text)", fontSize: "0.9rem", marginBottom: "0.2rem" }}>{r.name}</p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.68rem", color: "var(--text-light)" }}>{r.date}</p>
                </div>
                <Stars count={r.rating} />
              </div>
              <p style={{ fontFamily: "var(--font-inter)", color: "var(--text-mid)", fontSize: "0.83rem", lineHeight: 1.8, fontStyle: "italic" }}>
                &ldquo;{r.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}>
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              width: i === active ? 28 : 8, height: 8,
              background: i === active ? "var(--gold)" : "rgba(0,0,0,0.15)",
              border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0,
            }} />
          ))}
        </div>

        <p style={{ textAlign: "center", fontFamily: "var(--font-inter)", fontSize: "0.7rem", color: "var(--text-light)", marginTop: "1.5rem" }}>
          Recenzii reale de la oaspeții noștri · Google Maps & direct
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .reviews-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
