"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  async function analyze() {
    if (!file) {
      setError("Valitse ensin PDF-tiedosto.");
      return;
    }

    setLoading(true);
    setError("");
    setResult("");

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/analyze", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error || "Analyysi epäonnistui.");
      return;
    }

    setResult(data.result || "Analyysi valmistui, mutta vastaus oli tyhjä.");
  }

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
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 52px; align-items: center; padding: 50px 0 70px; }
        .eyebrow { color: #38bdf8; font-weight: 800; margin: 0 0 16px; }
        h1 { font-size: clamp(38px, 5vw, 58px); line-height: 1.04; margin: 0 0 22px; }
        .lead { color: #cbd5e1; font-size: 20px; line-height: 1.65; margin: 0 0 30px; }
        .btn { cursor: pointer; display: inline-flex; align-items: center; justify-content: center; padding: 14px 22px; border-radius: 10px; text-decoration: none; font-weight: 800; border: 1px solid #38bdf8; background: #38bdf8; color: #020617; }
        .btn:disabled { opacity: .55; cursor: not-allowed; }
        .card { background: rgba(15,23,42,.92); border: 1px solid #334155; border-radius: 22px; padding: 24px; box-shadow: 0 30px 90px rgba(0,0,0,.35); }
        .muted { color: #94a3b8; line-height: 1.6; }
        .drop { border: 1px dashed #475569; background: #020617; border-radius: 18px; padding: 26px; text-align: center; margin: 22px 0; }
        input { max-width: 340px; width: 100%; color: #cbd5e1; }
        .section { padding: 70px 0; }
        .light { background: white; color: #0f172a; }
        .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .feature { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; }
        .result { white-space: pre-wrap; background: #020617; border: 1px solid #334155; border-radius: 16px; padding: 22px; color: #e5e7eb; line-height: 1.55; margin-top: 20px; }
        .error { background: #450a0a; border: 1px solid #991b1b; border-radius: 12px; padding: 14px; color: #fee2e2; margin-top: 16px; }
        @media (max-width: 850px) { .grid, .cards { grid-template-columns: 1fr; } .nav a { display: none; } }
      `}</style>

      <header className="hero">
        <div className="wrap">
          <nav className="nav">
            <div className="brand">TarjousAI</div>
            <div>
              <a href="#upload">PDF-analyysi</a>
              <a href="#toimii">Näin se toimii</a>
            </div>
          </nav>

          <div className="grid">
            <section>
              <p className="eyebrow">Tekoäly kilpailutuksiin ja tarjouksiin</p>
              <h1>Tarjouspyynnöt auki nopeammin.</h1>
              <p className="lead">
                Lataa tarjouspyyntö PDF:nä. TarjousAI etsii vaatimukset, määräajat,
                riskit ja luo ensimmäisen tarjousrungon.
              </p>
              <a className="btn" href="#upload">Kokeile analyysia</a>
            </section>

            <aside className="card" id="upload">
              <h2>Lataa tarjouspyyntö</h2>
              <p className="muted">Valitse PDF ja käynnistä tekoälyanalyysi.</p>
              <div className="drop">
                <strong>PDF-tiedosto</strong>
                <p className="muted">Aloita alle 8 Mt tiedostolla.</p>
                <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} />
              </div>
              <button className="btn" onClick={analyze} disabled={loading}>
                {loading ? "Analysoidaan..." : "Analysoi tarjouspyyntö"}
              </button>
              {error && <div className="error">{error}</div>}
            </aside>
          </div>
        </div>
      </header>

      <section className="section light">
        <div className="wrap">
          <h2>Mitä analyysi palauttaa?</h2>
          <div className="cards">
            <div className="feature"><h3>Vaatimukset</h3><p className="muted">Pakolliset ehdot, liitteet, kelpoisuudet ja pisteytys.</p></div>
            <div className="feature"><h3>Riskit</h3><p className="muted">Epäselvät kohdat, puuttuvat tiedot ja kriittiset määräajat.</p></div>
            <div className="feature"><h3>Tarjousrunko</h3><p className="muted">Ensimmäinen luonnos, jota voit muokata ja täydentää.</p></div>
          </div>
        </div>
      </section>

      <section className="section" id="toimii">
        <div className="wrap">
          <p className="eyebrow">Näin se toimii</p>
          <h2>1. Lataa PDF  2. AI analysoi  3. Viimeistele tarjous</h2>
          {result && <div className="result">{result}</div>}
        </div>
      </section>
    </main>
  );
}
