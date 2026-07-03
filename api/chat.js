// Vercel Serverless Function
// URL when deployed: https://<your-domain>/api/chat
//
// This talks to OpenRouter (https://openrouter.ai), a well-established
// aggregator that gives access to Claude and other models through one
// OpenAI-compatible endpoint. Model used: anthropic/claude-haiku-4.5
// ($1 input / $5 output per million tokens — cheap, plenty capable for
// a scripted FAQ-style chat widget like this one).
//
// SETUP:
// 1. Put this file at:  api/chat.js  (at the root of your project, next to your index.html)
// 2. Get a key at openrouter.ai/keys (starts with sk-or-)
// 3. In your Vercel project settings → Environment Variables, add:
//      OPENROUTER_API_KEY = sk-or-...
// 4. Deploy. Vercel auto-detects the /api folder and turns this into an endpoint —
//    no extra config needed for a plain static site.
//
// The API key NEVER reaches the browser. Only this server-side function talks
// to openrouter.ai.

const SYSTEM_PROMPT = `Du bist "Kompasslotse", der Live-Chat-Assistent auf der Website der Firma Kompasslotse. Kompasslotse baut individuelle KI-Chatbots, die Erstbesuchern helfen, sich auf Firmenwebsites zurechtzufinden.
Fakten zum Angebot, die du kennst:
- Ablauf in 3 Schritten: 1) Analyse der Kundenwebsite, 2) Bau eines individuellen Chatbots zugeschnitten auf Inhalte/Ton/wichtige Seiten, 3) laufende Betreuung und Aktualisierung.
- Preis: ab 79 €/Monat zzgl. USt., monatlich kündbar, keine Mindestlaufzeit.
- Zielgruppen: Online-Shops, Handwerks- und Dienstleistungsbetriebe, Kanzleien/Praxen, lokale Ketten mit mehreren Standorten.
- Einrichtung dauert in der Regel wenige Tage, keine Programmierkenntnisse nötig (eine Codezeile einbinden).
- Datenschutz: Abschluss eines Auftragsverarbeitungsvertrags (AVV) gemäß Art. 28 DSGVO.
- Kontakt: kontakt@kompasslotse.de
Antworte kurz (max. 3-4 Sätze), freundlich, auf Deutsch, in der Sie-Form. Du bist selbst ein lebendes Beispiel für das Produkt - zeig das gerne. Wenn eine Frage nichts mit Kompasslotse zu tun hat, lenke höflich zurück zum Thema Website-Chatbots. Erfinde keine Details, die hier nicht stehen (z. B. keine falschen Vertragsdetails) - wenn du etwas nicht weißt, verweise auf kontakt@kompasslotse.de.`;

const MAX_HISTORY_MESSAGES = 20; // simple guardrail against runaway conversations/cost

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    console.error("OPENROUTER_API_KEY is not set in the environment");
    return res.status(500).json({ error: "server_misconfigured" });
  }

  const { messages } = req.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "invalid_request" });
  }

  // Basic shape validation so arbitrary payloads can't be forwarded upstream
  const cleanMessages = messages
    .filter(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string"
    )
    .slice(-MAX_HISTORY_MESSAGES);

  if (cleanMessages.length === 0) {
    return res.status(400).json({ error: "invalid_request" });
  }

  try {
    const upstream = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "anthropic/claude-haiku-4.5",
        max_tokens: 400,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...cleanMessages],
      }),
    });

    const data = await upstream.json();

    if (!upstream.ok) {
      console.error("OpenRouter API error:", upstream.status, data);
      return res.status(502).json({ error: "upstream_error" });
    }

    const reply = data.choices?.[0]?.message?.content ?? null;
    return res.status(200).json({ reply });

    /* --- Official Anthropic API (swap to this if you get a direct key later) ---
    const upstream = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 400,
        system: SYSTEM_PROMPT,
        messages: cleanMessages,
      }),
    });
    const data = await upstream.json();
    if (!upstream.ok) return res.status(502).json({ error: "upstream_error" });
    const block = (data.content || []).find((c) => c.type === "text");
    return res.status(200).json({ reply: block ? block.text : null });
    */
  } catch (err) {
    console.error("Chat proxy error:", err);
    return res.status(500).json({ error: "server_error" });
  }
};
