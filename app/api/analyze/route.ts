import OpenAI from "openai";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "OPENAI_API_KEY puuttuu Vercelin Environment Variables -asetuksista." },
        { status: 500 }
      );
    }

    const client = new OpenAI({ apiKey });

    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return Response.json({ error: "PDF-tiedostoa ei löytynyt." }, { status: 400 });
    }

    if (file.size > 8 * 1024 * 1024) {
      return Response.json(
        { error: "Tiedosto on liian suuri tähän demoon. Käytä alle 8 Mt PDF:ää." },
        { status: 400 }
      );
    }

    const bytes = Buffer.from(await file.arrayBuffer());
    const base64 = bytes.toString("base64");

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-4.1",
      input: [
        {
          role: "system",
          content:
            "Olet suomalainen tarjousasiantuntija. Analysoit tarjouspyyntöjä yrityksille. Vastaa suomeksi, käytännöllisesti ja selkeästi. Älä keksi tietoja, joita aineistosta ei löydy.",
        },
        {
          role: "user",
          content: [
            {
              type: "input_file",
              filename: file.name || "tarjouspyynto.pdf",
              file_data: `data:${file.type || "application/pdf"};base64,${base64}`,
            },
            {
              type: "input_text",
              text:
                "Analysoi tämä tarjouspyyntö. Palauta: 1) tiivistelmä, 2) pakolliset vaatimukset, 3) määräajat, 4) tarvittavat liitteet, 5) riskit ja epäselvät kohdat, 6) alustava tarjousrunko, 7) seuraavat toimenpiteet. Käytä otsikoita ja bullet-listoja.",
            },
          ],
        },
      ],
    });

    return Response.json({ result: response.output_text });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Analyysi epäonnistui. Tarkista API-avain, malli ja PDF-tiedosto." },
      { status: 500 }
    );
  }
}
