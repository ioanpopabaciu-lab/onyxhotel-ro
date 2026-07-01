import Image from "next/image";
import Link from "next/link";

const events = [
  {
    icon: "💍",
    title: "Nunți",
    capacity: "până la 300 invitați",
    desc: "Transformăm visul nunții tale în realitate. Salon elegant cu pardoseală de lemn, candelabre de cristal și terasa exterioară pentru cocktail. Echipa noastră coordonează fiecare detaliu — de la decor la meniu.",
    includes: ["Coordonator eveniment dedicat", "Meniu gastronomic personalizat", "Muzică live & DJ", "Decoruri florale", "Tort de nuntă", "Cazare pentru miri inclusă"],
    img: "/images/photo-1.jpg",
  },
  {
    icon: "🍼",
    title: "Botezuri",
    capacity: "până la 150 invitați",
    desc: "Celebrați venirea pe lume a celui mic într-un cadru elegant și cald. Oferim pachete complete cu decor tematic, tort personalizat și meniu special adaptat pentru toate vârstele.",
    includes: ["Decor tematic personalizat", "Tort botez inclus", "Meniu pentru copii și adulți", "Animator copii (opțional)", "Fotograf recomandat", "Pachet cadouri invitați"],
    img: "/images/photo-2.jpg",
  },
  {
    icon: "🥂",
    title: "Banchete & Corporate",
    capacity: "până la 200 persoane",
    desc: "Spații versatile pentru conferințe, gale de premiere, cine de afaceri și team building-uri. Echipament tehnic de ultimă generație, conexiune internet de mare viteză și personal profesionist.",
    includes: ["Sală de conferință echipată", "Proiector & ecran LED", "Coffee break inclus", "Meniu business personalizat", "Wi-Fi dedicat 1Gbps", "Parcare gratuită"],
    img: "/images/photo-3.jpg",
  },
  {
    icon: "🎂",
    title: "Zile de naștere",
    capacity: "10 – 200 persoane",
    desc: "De la petreceri intime cu prieteni apropiați la aniversări grandioase, creăm experiențe pe măsura personalității tale. Surprize, tort personalizat și o atmosferă de neuitat.",
    includes: ["Decor tematic ales de tine", "Tort personalizat", "Playlist muzical personalizat", "Foto booth (opțional)", "Meniu special", "Surprize incluse"],
    img: "/images/photo-4.jpg",
  },
  {
    icon: "💼",
    title: "Conferințe",
    capacity: "până la 100 persoane",
    desc: "Sală modernă cu layout flexibil, perfect echipată pentru prezentări, training-uri și workshop-uri. Lumina naturală, aer condiționat silențios și tot ce ai nevoie pentru o întâlnire de succes.",
    includes: ["Flipchart & markere", "Microfon wireless", "Streaming live (opțional)", "Pauze de cafea incluse", "Materiale tipărite", "Secretariat disponibil"],
    img: "/images/photo-5.jpg",
  },
  {
    icon: "🎭",
    title: "Evenimente private",
    capacity: "personalizat",
    desc: "Orice ocazie merită să fie celebrată în stil. Petreceri tematice, lansări de produse, logodne sau orice alt eveniment — imaginația este singura limită.",
    includes: ["Concept personalizat 100%", "Consultanță eveniment", "Furnizori parteneri", "Catering exclusiv", "Suport complet pre & post eveniment", "Confidențialitate garantată"],
    img: "/images/photo-6.jpg",
  },
];

export default function EvenimentePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "55vh", minHeight: 400, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image src="/images/hotel-4.jpg" alt="Evenimente Onyx Hotel" fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 2rem" }}>
          <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.8rem" }}>Momente de neuitat</p>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 300, color: "#fff" }}>Evenimente <span style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }}>&</span> Celebrări</h1>
          <div className="gold-line" />
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "5rem 2rem", maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-montserrat)", color: "#aaa", fontSize: "0.95rem", lineHeight: 1.9 }}>
          La Onyx Hotel, fiecare eveniment este unic. Echipa noastră de profesioniști se ocupă de fiecare detaliu, astfel încât tu să te bucuri de fiecare moment alături de cei dragi.
        </p>
      </section>

      {/* Events grid */}
      <section style={{ padding: "3rem 2rem 7rem", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2rem" }}>
          {events.map((ev) => (
            <div key={ev.title} style={{ background: "var(--onyx-soft)", overflow: "hidden" }}>
              <div style={{ position: "relative", height: 220 }}>
                <Image src={ev.img} alt={ev.title} fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)" }} />
                <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem" }}>
                  <span style={{ fontSize: "2rem" }}>{ev.icon}</span>
                </div>
              </div>
              <div style={{ padding: "2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.8rem" }}>
                  <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.8rem", fontWeight: 300, color: "var(--cream)" }}>{ev.title}</h2>
                  <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.68rem", color: "var(--gold)", letterSpacing: "0.05em" }}>{ev.capacity}</span>
                </div>
                <div className="gold-line-left" />
                <p style={{ fontFamily: "var(--font-montserrat)", color: "#888", fontSize: "0.83rem", lineHeight: 1.8, marginTop: "1rem", marginBottom: "1.5rem" }}>{ev.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {ev.includes.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <span style={{ color: "var(--gold)", fontSize: "0.6rem" }}>✦</span>
                      <span style={{ fontFamily: "var(--font-montserrat)", color: "#bbb", fontSize: "0.78rem" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "5rem", padding: "4rem 2rem", border: "1px solid rgba(201,168,76,0.2)" }}>
          <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Hai să planificăm împreună</p>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "var(--cream)", marginBottom: "1rem" }}>
            Spune-ne despre evenimentul tău
          </h2>
          <div className="gold-line" />
          <p style={{ fontFamily: "var(--font-montserrat)", color: "#888", fontSize: "0.88rem", maxWidth: 500, margin: "1.5rem auto 2rem", lineHeight: 1.8 }}>
            Completați formularul de contact sau sunați-ne direct. Consultanța este gratuită.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-gold">Cerere ofertă</Link>
            <a href="tel:+40700000000" className="btn-outline-gold">📞 +40 700 000 000</a>
          </div>
        </div>
      </section>
    </>
  );
}
