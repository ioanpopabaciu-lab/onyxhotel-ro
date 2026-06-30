"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const PRICES: Record<string, number> = {
  single: 195,
  dubla: 230,
  tripla: 300,
};

const LABELS: Record<string, string> = {
  single: "Single (195 lei/noapte)",
  dubla: "Dublă (230 lei/noapte)",
  tripla: "Triplă (300 lei/noapte)",
};

export default function BookingWidget() {
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("1");
  const [roomType, setRoomType] = useState("single");
  const [payCard, setPayCard] = useState(false);
  const [result, setResult] = useState<null | {
    nopti: number;
    bazaTotal: number;
    discountOnline: number;
    discountSejur: number;
    discountCard: number;
    totalFinal: number;
    economie: number;
  }>(null);

  const calculeaza = () => {
    if (!checkin || !checkout) return;
    const d1 = new Date(checkin);
    const d2 = new Date(checkout);
    const nopti = Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
    if (nopti <= 0) return;

    const pretNoapte = PRICES[roomType];
    const bazaTotal = pretNoapte * nopti;

    // Reduceri
    const discountOnline = Math.round(bazaTotal * 0.02); // 2% online
    const discountSejur = nopti > 5 ? Math.round(bazaTotal * 0.10) : 0; // 10% peste 5 nopti
    const subtotal = bazaTotal - discountOnline - discountSejur;
    const discountCard = payCard ? Math.round(subtotal * 0.05) : 0; // 5% card
    const totalFinal = subtotal - discountCard;
    const economie = bazaTotal - totalFinal;

    setResult({ nopti, bazaTotal, discountOnline, discountSejur, discountCard, totalFinal, economie });
  };

  useEffect(() => {
    if (checkin && checkout) calculeaza();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkin, checkout, roomType, payCard]);

  const inputStyle: React.CSSProperties = {
    background: "rgba(0,0,0,0.5)",
    border: "1px solid rgba(201,168,76,0.4)",
    color: "#fff",
    padding: "0.75rem 1rem",
    fontFamily: "var(--font-inter)",
    fontSize: "0.85rem",
    width: "100%",
    outline: "none",
    backdropFilter: "blur(4px)",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-inter)",
    fontSize: "0.6rem",
    fontWeight: 700,
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    color: "var(--gold)",
    display: "block",
    marginBottom: "0.4rem",
  };

  return (
    <div style={{
      background: "rgba(22,22,22,0.92)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(201,168,76,0.3)",
      padding: "2rem",
      maxWidth: 900,
      margin: "0 auto",
    }}>
      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.2rem", textAlign: "center" }}>
        Rezervare online · Reducere garantată
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
        <div>
          <label style={labelStyle}>Check-in</label>
          <input type="date" value={checkin} min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setCheckin(e.target.value)} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Check-out</label>
          <input type="date" value={checkout} min={checkin || new Date().toISOString().split("T")[0]}
            onChange={(e) => setCheckout(e.target.value)} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Tip cameră</label>
          <select value={roomType} onChange={(e) => setRoomType(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
            {Object.entries(LABELS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </div>
        <div>
          <label style={labelStyle}>Persoane</label>
          <select value={guests} onChange={(e) => setGuests(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
            {["1","2","3"].map(n => <option key={n} value={n}>{n} {n === "1" ? "persoană" : "persoane"}</option>)}
          </select>
        </div>
      </div>

      {/* Plată card */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem", cursor: "pointer" }} onClick={() => setPayCard(!payCard)}>
        <div style={{
          width: 18, height: 18, border: "2px solid var(--gold)",
          background: payCard ? "var(--gold)" : "transparent",
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          transition: "background 0.2s",
        }}>
          {payCard && <span style={{ color: "#222", fontSize: "0.7rem", fontWeight: 900 }}>✓</span>}
        </div>
        <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "#ddd" }}>
          Plătesc cu cardul acum <span style={{ color: "var(--gold)", fontWeight: 700 }}>(-5% reducere suplimentară)</span>
        </span>
      </div>

      {/* Rezultat calcul */}
      {result && (
        <div style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", padding: "1.2rem 1.5rem", marginBottom: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
            <div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", color: "#888", marginBottom: "0.3rem" }}>
                {result.nopti} {result.nopti === 1 ? "noapte" : "nopți"} × {PRICES[roomType]} lei
              </p>
              {result.discountOnline > 0 && (
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", color: "#6dbf6d" }}>✓ Reducere online: -{result.discountOnline} lei (2%)</p>
              )}
              {result.discountSejur > 0 && (
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", color: "#6dbf6d" }}>✓ Sejur {'>'} 5 nopți: -{result.discountSejur} lei (10%)</p>
              )}
              {result.discountCard > 0 && (
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", color: "#6dbf6d" }}>✓ Plată cu cardul: -{result.discountCard} lei (5%)</p>
              )}
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Total</p>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{result.totalFinal} lei</p>
              {result.economie > 0 && (
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", color: "#6dbf6d", marginTop: "0.2rem" }}>Economisești {result.economie} lei</p>
              )}
            </div>
          </div>
        </div>
      )}

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Link
          href={`/contact?checkin=${checkin}&checkout=${checkout}&camera=${roomType}&persoane=${guests}&card=${payCard}`}
          className="btn-gold"
          style={{ flex: 1, textAlign: "center", opacity: !result ? 0.5 : 1, pointerEvents: !result ? "none" : "auto" }}
        >
          {payCard ? "Rezervă & Plătește cu cardul" : "Rezervă acum"}
        </Link>
        <a href="tel:0732403464" className="btn-outline-gold" style={{ whiteSpace: "nowrap", fontSize: "0.68rem" }}>
          📞 Rezervă telefonic
        </a>
      </div>

      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", color: "#555", marginTop: "0.8rem", textAlign: "center" }}>
        ✓ -2% rezervare online &nbsp;|&nbsp; ✓ -10% sejur {'>'} 5 nopți &nbsp;|&nbsp; ✓ -5% plată card imediat
      </p>
    </div>
  );
}
