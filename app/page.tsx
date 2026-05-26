export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      fontFamily: "Arial, sans-serif"
    }}>
      <section style={{
        maxWidth: "1120px",
        margin: "0 auto",
        padding: "72px 24px"
      }}>
        <nav style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "96px"
        }}>
          <strong style={{ fontSize: "24px" }}>TarjousAI</strong>
          <a href="#aloita" style={{
            color: "white",
            textDecoration: "none",
            border: "1px solid #334155",
            padding: "10px 16px",
            borderRadius: "8px"
          }}>
            Aloita ilmaiseksi
          </a>
        </nav>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "48px",
          alignItems: "center"
        }}>
          <div>
            <p style={{
              color: "#38bdf8",
              fontWeight: 700,
              marginBottom: "16px"
            }}>
              Tekoäly kilpailutuksiin ja tarjouksiin
            </p>

            <h1 style={{
              fontSize: "56px",
              lineHeight: "1.05",
              margin: "0 0 24px"
            }}>
              Voita enemmän kilpailutuksia tekoälyn avulla.
            </h1>

            <p style={{
              fontSize: "20px",
              lineHeight: "1.6",
              color: "#cbd5e1",
              marginBottom: "32px"
            }}>
              Lataa tarjouspyyntö tai PDF. TarjousAI analysoi vaatimukset,
              nostaa riskit esiin ja luo ensimmäisen tarjousluonnoksen puolestasi.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a id="aloita" href="#upload" style={{
                background: "#38bdf8",
                color: "#020617",
                padding: "14px 22px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: 700
              }}>
                Aloita ilmaiseksi
              </a>

              <a href="#ominaisuudet" style={{
                color: "white",
                padding: "14px 22px",
                borderRadius: "10px",
                textDecoration: "none",
                border: "1px solid #334155"
              }}>
                Katso ominaisuudet
              </a>
            </div>
          </div>

          <div style={{
            background: "#111827",
            border: "1px solid #334155",
            borderRadius: "18px",
            padding: "24px",
            boxShadow: "0 24px 80px rgba(0,0,0,0.35)"
          }}>
            <h2 style={{ marginTop: 0 }}>Tarjousanalyysi</h2>

            <div style={{
              background: "#020617",
              border: "1px solid #1e293b",
              borderRadius: "12px",
              padding: "18px",
              marginBottom: "14px"
            }}>
              <strong>1. Lataa tarjouspyyntö</strong>
              <p style={{ color: "#94a3b8" }}>PDF, Word tai tekstimuotoinen aineisto.</p>
            </div>

            <div style={{
              background: "#020617",
              border: "1px solid #1e293b",
              borderRadius: "12px",
              padding: "18px",
              marginBottom: "14px"
            }}>
              <strong>2. AI löytää vaatimukset</strong>
              <p style={{ color: "#94a3b8" }}>Määräajat, pakolliset liitteet, pisteytys ja riskit.</p>
            </div>

            <div style={{
              background: "#020617",
              border: "1px solid #1e293b",
              borderRadius: "12px",
              padding: "18px"
            }}>
              <strong>3. Saat tarjousluonnoksen</strong>
              <p style={{ color: "#94a3b8" }}>Valmis runko, jota voit muokata ja lähettää eteenpäin.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="ominaisuudet" style={{
        background: "white",
        color: "#0f172a",
        padding: "72px 24px"
      }}>
        <div style={{
          maxWidth: "1120px",
          margin: "0 auto"
        }}>
          <h2 style={{ fontSize: "36px", marginBottom: "32px" }}>
            Mitä TarjousAI tekee?
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px"
          }}>
            {[
              ["Vaatimusten purku", "Tunnistaa tarjouspyynnöstä pakolliset ehdot, pisteytyksen ja määräajat."],
              ["Riskien tunnistus", "Nostaa esiin epäselvät kohdat, puuttuvat liitteet ja kriittiset vaatimukset."],
              ["Tarjousluonnos", "Luo ensimmäisen luonnoksen, jota voit täydentää omilla tiedoilla."]
            ].map(([title, text]) => (
              <div key={title} style={{
                border: "1px solid #e2e8f0",
                borderRadius: "14px",
                padding: "24px",
                background: "#f8fafc"
              }}>
                <h3>{title}</h3>
                <p style={{ color: "#475569", lineHeight: "1.6" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
