"use client";
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/40732403464"
      target="_blank"
      rel="noopener noreferrer"
      title="Contactați-ne pe WhatsApp — 0732 403 464"
      style={{
        position: "fixed", bottom: "1.8rem", right: "1.8rem", zIndex: 500,
        width: 58, height: 58,
        background: "#25D366",
        borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
        textDecoration: "none",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0 6px 28px rgba(37,211,102,0.65)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.45)"; }}
    >
      <svg viewBox="0 0 32 32" width="30" height="30" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.334L4.5 28l6.834-1.773A11.93 11.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.94 9.94 0 0 1-4.953-1.32l-.354-.21-3.902 1.013 1.012-3.8-.22-.362A9.93 9.93 0 0 1 6 15c0-5.523 4.477-10 10-10zm-2.47 4.5c-.198 0-.52.074-.793.371-.273.297-1.043 1.02-1.043 2.488 0 1.467 1.068 2.887 1.217 3.086.15.198 2.07 3.293 5.1 4.492 2.53 1 3.043.8 3.59.75.547-.05 1.762-.72 2.01-1.416.248-.695.248-1.29.174-1.416-.074-.124-.273-.198-.571-.347-.3-.149-1.762-.87-2.035-.968-.273-.1-.471-.149-.67.148-.198.297-.769.968-.942 1.167-.174.198-.348.222-.645.074-.297-.149-1.253-.462-2.386-1.47-.881-.787-1.477-1.758-1.65-2.055-.174-.297-.019-.457.13-.605.134-.134.298-.347.447-.521.149-.174.199-.297.298-.496.1-.198.05-.372-.025-.521-.074-.149-.67-1.617-.918-2.21-.242-.578-.488-.5-.67-.5z"/>
      </svg>
    </a>
  );
}
