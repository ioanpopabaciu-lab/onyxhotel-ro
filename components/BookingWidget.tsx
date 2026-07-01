"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const PRICES: Record<string, number> = {
  single: 195,
  dubla: 230,
  tripla: 300,
  apartament: 350,
};

const LABELS: Record<string, string> = {
  single: "Single (195 lei/noapte)",
  dubla: "Dublă (230 lei/noapte)",
  tripla: "Triplă (300 lei/noapte)",
  apartament: "Apartament (350 lei/noapte)",
};

const ORA_PRICES: { durata: string; ore: number; pret: number }[] = [
  { durata: "3 ore", ore: 3, pret: 90 },
  { durata: "5 ore", ore: 5, pret: 130 },
  { durata: "7 ore", ore: 7, pret: 150 },
];

export default function BookingWidget() {
  const [mode, setMode] = useState<"noapte" | "ora">("noapte");

  // Per noapte
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("1");
  const [roomType, setRoomType] = useState("single");
  const [payCard, setPayCard] = useState(false);
  const [result, setResult] = useState<null | {
    nopti: number; bazaTotal: number; discountOnline: number;
    discountSejur: number; discountCard: number; totalFinal: number; economie: number;
  }>(null);

  // Per oră
  const [oraSelectata, setOraSelectata] = useState(0);
  const [oraStart, setOraStart] = useState("");

  const calculeaza = () => {
    if (!checkin || !checkout) return;
    const d1 = new Date(checkin), d2 = new Date(checkout);
    const nopti = Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
    if (nopti <= 0) return;
    const pretNoapte = PRICES[roomType];
    const bazaTotal = pretNoapte * nopti;
    const discountOnline = Math.round(bazaTotal * 0.02);
    const discountSejur = nopti > 5 ? Math.round(bazaTotal * 0.10) : 0;
    const subtotal = bazaTotal - discountOnline - discountSejur;
    const discountCard = payCard ? Math.round(subtotal * 0.05) : 0;
    const totalFinal = subtotal - discountCard;
    const economie = bazaTotal - totalFinal;
    setResult({ nopti, bazaTotal, discountOnline, discountSejur, discountCard, totalFinal, economie });
  };

  useEffect(() => {
    if (checkin && checkout) calculeaza();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkin, checkout, roomType, payCard]);

  const inputStyle: React.CSSProperties = {
    background: "rgba(0,0,0,0.5)", border: "1px solid rgba(201,168,76,0.4)",
    color: "#fff", padding: "0.75rem 1rem", fontFamily: "var(--font-inter)",
    fontSize: "0.85rem", width: "100%", outline: "none", backdropFilter: "blur(4px)",
    colorScheme: "dark",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-inter)", fontSize: "0.6rem", fontWeight: 700,
    letterSpacing: "0.15em", textTransform: "uppercase" as const,
    color: "var(--gold)", display: "block", marginBottom: "0.4rem",
  };

  const tabStyle = (active: boolean): React.CSSProperties => ({
    fontFamily: "var(--font-inter)", fontSize: "0.72rem", fontWeight: 700,
    letterSpacing: "0.14em", textTransform: "uppercase",
    padding: "0.7rem 2rem", border: "none", cursor: "pointer",
    transition: "all 0.25s",
    background: active ? "var(--gold)" : "rgba(255,255,255,0.06)",
    color: active ? "#1a1a1a" : "rgba(255,255,255,0.55)",
    borderBottom: active ? "2px solid var(--gold)" : "2px solid transparent",
  });

  return (
    <div style={{ background: "rgba(22,22,22,0.97)", backdropFilter: "blur(12px)", padding: "0 0 1.8rem" }}>

      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid rgba(201,168,76,0.2)", marginBottom: "1.5rem" }}>
        <button style={tabStyle(mode === "noapte")} onClick={() => setMode("noapte")}>
          🛏 Rezervare pe noapte
        </button>
        <button style={tabStyle(mode === "ora")} onClick={() => setMode("ora")}>
          ⏱ Rezervare pe oră
        </button>
      </div>

      {mode === "noapte" && (
        <div style={{ padding: "0 2rem" }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.2rem", textAlign: "center" }}>
            Rezervare online · Reducere garantată
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1rem", marginBottom: "1rem" }} className="booking-grid">
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
                {["1", "2", "3"].map(n => <option key={n} value={n}>{n} {n === "1" ? "persoană" : "persoane"}</option>)}
              </select>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem", cursor: "pointer" }} onClick={() => setPayCard(!payCard)}>
            <div style={{ width: 18, height: 18, border: "2px solid var(--gold)", background: payCard ? "var(--gold)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.2s" }}>
              {payCard && <span style={{ color: "#222", fontSize: "0.7rem", fontWeight: 900 }}>✓</span>}
            </div>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "#ddd" }}>
              Plătesc cu cardul acum <span style={{ color: "var(--gold)", fontWeight: 700 }}>(-5% reducere suplimentară)</span>
            </span>
          </div>

          {result && (
            <div style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", padding: "1.2rem 1.5rem", marginBottom: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", color: "#888", marginBottom: "0.3rem" }}>
                    {result.nopti} {result.nopti === 1 ? "noapte" : "nopți"} × {PRICES[roomType]} lei
                  </p>
                  {result.discountOnline > 0 && <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", color: "#6dbf6d" }}>✓ Reducere online: -{result.discountOnline} lei (2%)</p>}
                  {result.discountSejur > 0 && <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", color: "#6dbf6d" }}>✓ Sejur &gt; 5 nopți: -{result.discountSejur} lei (10%)</p>}
                  {result.discountCard > 0 && <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", color: "#6dbf6d" }}>✓ Plată cu cardul: -{result.discountCard} lei (5%)</p>}
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Total</p>
                  <p style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{result.totalFinal} lei</p>
                  {result.economie > 0 && <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", color: "#6dbf6d", marginTop: "0.2rem" }}>Economisești {result.economie} lei</p>}
                </div>
              </div>
            </div>
          )}

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href={result ? `https://wa.me/40732403464?text=${encodeURIComponent(
                `Bună ziua! Doresc să rezerv o cameră la ONYX B&B:\n\n` +
                `📅 Check-in: ${checkin}\n` +
                `📅 Check-out: ${checkout}\n` +
                `🛏 Tip cameră: ${LABELS[roomType]}\n` +
                `👤 Persoane: ${guests}\n` +
                `💰 Total estimat: ${result.totalFinal} lei (${result.nopti} ${result.nopti === 1 ? "noapte" : "nopți"})\n` +
                (payCard ? `💳 Doresc să plătesc cu cardul\n` : ``) +
                `\nVă rog să confirmați disponibilitatea. Mulțumesc!`
              )}` : undefined}
              className="btn-gold"
              target="_blank"
              rel="noopener noreferrer"
              style={{ flex: 1, textAlign: "center", opacity: !result ? 0.5 : 1, pointerEvents: !result ? "none" : "auto" }}
            >
              💬 {payCard ? "Rezervă & confirmă WhatsApp" : "Rezervă acum — WhatsApp"}
            </a>
            <a href="tel:0732403464" className="btn-outline-gold" style={{ whiteSpace: "nowrap", fontSize: "0.68rem" }}>
              📞 Rezervă telefonic
            </a>
          </div>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", color: "#555", marginTop: "0.8rem", textAlign: "center" }}>
            ✓ -2% rezervare online &nbsp;|&nbsp; ✓ -10% sejur &gt; 5 nopți &nbsp;|&nbsp; ✓ -5% plată card imediat
          </p>
        </div>
      )}

      {mode === "ora" && (
        <div style={{ padding: "0 2rem" }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.5rem", textAlign: "center" }}>
            Cameră cu ora · Recepție 24/7 · Max. check-out 23:00
          </p>

          {/* Durata */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "1.2rem" }} className="ora-grid">
            {ORA_PRICES.map((opt, idx) => {
              // Calculate max start hour so end <= 23:00
              const maxStartH = 23 - opt.ore;
              const startH = oraStart ? parseInt(oraStart.split(":")[0]) : null;
              const endTime = startH !== null ? `${String(startH + opt.ore).padStart(2, "0")}:00` : null;
              const isOver = startH !== null && startH + opt.ore > 23;
              return (
                <div key={opt.durata}
                  onClick={() => { setOraSelectata(idx); if (oraStart) { const h = parseInt(oraStart.split(":")[0]); if (h + opt.ore > 23) setOraStart(`${String(23 - opt.ore).padStart(2, "0")}:00`); } }}
                  style={{
                    border: `2px solid ${oraSelectata === idx ? "var(--gold)" : "rgba(201,168,76,0.2)"}`,
                    background: oraSelectata === idx ? "rgba(201,168,76,0.12)" : "rgba(0,0,0,0.3)",
                    padding: "1.2rem 0.8rem", textAlign: "center", cursor: "pointer", transition: "all 0.25s",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", fontWeight: 700, color: "var(--gold)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>{opt.durata}</p>
                  <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.8rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{opt.pret}</p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", color: "#888", marginTop: "0.2rem" }}>lei</p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", color: "rgba(201,168,76,0.6)", marginTop: "0.4rem" }}>max. intrare {String(maxStartH).padStart(2, "0")}:00</p>
                </div>
              );
            })}
          </div>

          {/* Ora intrare */}
          <div style={{ marginBottom: "1.2rem" }}>
            <label style={labelStyle}>Ora intrare</label>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              <input
                type="time"
                value={oraStart}
                min="00:00"
                max={`${String(23 - ORA_PRICES[oraSelectata].ore).padStart(2, "0")}:00`}
                onChange={(e) => {
                  const val = e.target.value;
                  const h = parseInt(val.split(":")[0]);
                  if (h + ORA_PRICES[oraSelectata].ore > 23) {
                    setOraStart(`${String(23 - ORA_PRICES[oraSelectata].ore).padStart(2, "0")}:00`);
                  } else {
                    setOraStart(val);
                  }
                }}
                style={{ ...inputStyle, width: "auto", minWidth: 140 }}
              />
              {oraStart && (
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "#888" }}>→ check-out:</span>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", fontWeight: 700, color: "var(--gold)" }}>
                    {String(parseInt(oraStart.split(":")[0]) + ORA_PRICES[oraSelectata].ore).padStart(2, "0")}:00
                  </span>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", color: "#6dbf6d" }}>✓ în limita 23:00</span>
                </div>
              )}
            </div>
          </div>

          <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", padding: "1rem 1.5rem", marginBottom: "1.2rem" }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "#ccc", lineHeight: 1.8 }}>
              ✓ Cameră disponibilă imediat · Recepție 24/7<br />
              ✓ Ideal pentru popas scurt înainte/după vamă<br />
              ✓ Parcare gratuită inclusă · Lenjerie proaspătă
            </p>
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href={`tel:0732403464`}
              className="btn-gold"
              style={{ flex: 1, textAlign: "center" }}
            >
              📞 Sună — {ORA_PRICES[oraSelectata].durata} / {ORA_PRICES[oraSelectata].pret} lei{oraStart ? ` · intrare ${oraStart}` : ""}
            </a>
            <a href="https://wa.me/40732403464" target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ whiteSpace: "nowrap", fontSize: "0.72rem" }}>
              💬 WhatsApp
            </a>
          </div>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", color: "#555", marginTop: "0.8rem", textAlign: "center" }}>
            Rezervarea pe oră se confirmă telefonic sau WhatsApp · Check-out maxim 23:00
          </p>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .booking-grid { grid-template-columns: 1fr 1fr !important; }
          .ora-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .booking-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
