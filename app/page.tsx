   export default function Home() {
  return (
    <main className="page">
      <style>{`
        body { margin: 0; font-family: Arial, sans-serif; }
        .page { min-height: 100vh; background: #08111f; color: white; }
        .wrap { width: min(1120px, calc(100% - 40px)); margin: 0 auto; }
        .nav { display: flex; justify-content: space-between; align-items: center; padding: 28px 0; }
        .brand { font-size: 26px; font-weight: 800; }
        .nav a { color: #dbeafe; text-decoration: none; margin-left: 18px; }
        .hero { background: radial-gradient(circle at 75% 20%, rgba(56,189,248,.22), transparent 30%), linear-gradient(135deg,#08111f,#0f172a); }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 52px; align-items: center; padding: 72px 0 90px; }
        .eyebrow { color: #38bdf8; font-weight: 800; margin: 0 0 16px; }
        h1 { font-size: clamp(42px, 6vw, 68px); line-height: 1.04; margin: 0 0 24px; }
        .lead { color: #cbd5e1; font-size: 20px; line-height: 1.65; margin: 0 0 30px; }
        .buttons { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn { display: inline-flex; align-items: center; justify-content: center; padding: 14px 22px; border-radius: 10px; text-decoration: none; font-weight: 800; border: 1px solid #334155; color: white; }
        .primary { background: #38bdf8; color: #020617; border-color: #38bdf8; }
        .card { background: rgba(15,23,42,.92); border: 1px solid #334155; border-radius: 22px; padding: 24px; box-shadow: 0 30px 90px rgba(0,0,0,.35); }
        .card h2 { margin: 0 0 10px; font-size: 30px; }
        .muted { color: #94a3b8; line-height: 1.6; }
        .drop { border: 1px dashed #475569; background: #020617; border-radius: 18px; padding: 28px; text-align: center; margin: 22px 0; }
        .pdf { display: inline-flex; align-items: center; justify-content: center; width: 58px; height: 58px; border-radius: 16px; background: #0f172a; color: #38bdf8; font-weight: 900; margin-bottom: 14px; }
        input { max-width: 320px; width: 100%; color: #cbd5e1; }
        .rows { display: grid; gap: 10px; }
        .row { display: flex; justify-content: space-between; gap: 16px; padding: 14px 16px; border-radius: 12px; background: #020617; border: 1px solid #1e293b; color: #cbd5e1; }
        .row strong { color: white; }
        .section { padding: 76px 0; }
        .light { background: white; color: #0f172a; }
        .head { max-width: 760px; margin-bottom: 32px; }
        .head h2 { font-size: clamp(32px, 4vw, 46px); line-height: 1.1; margin: 0 0 12px; }
        .cards, .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .feature { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; }
        .step { background: #0f172a; border: 1px solid #243247; border-radius: 16px; padding: 24px; }
        .num { width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; background: #38bdf8; color: #020617; border-radius: 10px; font-weight: 900; margin-bottom: 16px; }
        .cta { text-align: center; }
        @media (max-width: 850px) { .grid, .cards, .steps { grid-template-columns: 1fr; } .nav a:not(.btn) { display: none; } }
      `}</style>

      <header className="hero">
        <div className="wrap">
          <nav className="nav">
            <div className="brand">TarjousAI</div>
            <div>
              <a href="#upload">PDF-analyysi</a>
              <a href="#toimii">Näin se toimii</a>
              <a className="btn" href="#upload">Aloita ilmaiseksi</a>
            </div>
          </nav>

          <div className="grid">
            <section>
              <p className="eyebrow">Tekoäly kilpailutuksiin ja tarjouksiin</p>
              <h1>Tarjouspyynnöt auki nopeammin.</h1>
              <p className="lead">
                TarjousAI auttaa purkamaan tarjouspyynnöt, löytämään pakolliset vaatimukset
                ja luomaan ensimmäisen tarjousluonnoksen PDF-aineiston perusteella.
              </p>
              <div className="buttons">
                <a className="btn primary" href="#upload">Kokeile PDF-analyysia</a>
                <a className="btn" href="#toimii">Katso miten se toimii</a>
              </div>
            </section>

            <aside className="card" id="upload">
              <h2>Lataa tarjouspyyntö</h2>
              <p className="muted">Demo: seuraavaksi tähän liitetään oikea PDF-analyysi ja OpenAI-taustatoiminto.</p>
              <div className="drop">
                <div className="pdf">PDF</div>
                <strong>Pudota tarjouspyyntö tähän</strong>
                <p className="muted">PDF, DOCX tai TXT. Ensimmäisessä versiossa aloitetaan PDF-tiedostoista.</p>
                <input type="file" accept=".pdf,.doc,.docx,.txt" />
              </div>
              <div className="rows">
                <div className="row"><strong>Analyysi</strong><span>Vaatimukset ja määräajat</span></div>
                <div className="row"><strong>Riskit</strong><span>Puuttuvat tiedot ja kriittiset ehdot</span></div>
                <div className="row"><strong>Luonnos</strong><span>Tarjouksen runko muokattavaksi</span></div>
              </div>
            </aside>
          </div>
        </div>
      </header>

      <section className="section light">
        <div className="wrap">
          <div className="head">
            <h2>Uskottava apuri tarjouspyyntöjen lukemiseen</h2>
            <p className="muted">TarjousAI ei korvaa asiantuntijaa. Se nopeuttaa pitkien aineistojen lukemista, ehtojen etsimistä ja ensimmäisen vastausrungon kokoamista.</p>
          </div>
          <div className="cards">
            <div className="feature"><h3>Vaatimusten purku</h3><p className="muted">Tunnistaa pakolliset ehdot, pisteytyksen, liitteet ja kelpoisuusvaatimukset.</p></div>
            <div className="feature"><h3>Riskien tunnistus</h3><p className="muted">Nostaa esiin epäselvät kohdat, puuttuvat dokumentit ja tiukat aikataulut.</p></div>
            <div className="feature"><h3>Tarjousluonnos</h3><p className="muted">Luo ensimmäisen rungon, jota voit muokata yrityksesi tiedoilla.</p></div>
          </div>
        </div>
      </section>

      <section className="section" id="toimii">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">Näin se toimii</p>
            <h2>Kolme vaihetta tarjouspyynnöstä toimintalistaksi</h2>
          </div>
          <div className="steps">
            <div className="step"><div className="num">1</div><h3>Lataa aineisto</h3><p className="muted">Tuo PDF tai tarjouspyyntö palveluun.</p></div>
            <div className="step"><div className="num">2</div><h3>AI analysoi</h3><p className="muted">Palvelu etsii vaatimukset, riskit ja tarvittavat liitteet.</p></div>
            <div className="step"><div className="num">3</div><h3>Viimeistele tarjous</h3><p className="muted">Saat yhteenvedon ja luonnoksen muokattavaksi.</p></div>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="wrap">
          <h2>Seuraavaksi rakennetaan oikea PDF-analyysi.</h2>
          <p className="muted">Landing page on valmis ensimmäiseen esittelyyn. Seuraava tekninen askel on tiedoston vastaanotto ja analyysin muodostaminen tekoälyllä.</p>
          <a className="btn primary" href="#upload">Aloita ilmaiseksi</a>
        </div>
      </section>
    </main>
  );
}
