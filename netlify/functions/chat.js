// Netlify Function
// Deployed URL: https://<your-site>.netlify.app/.netlify/functions/chat
// Combined with netlify.toml (included in this project), it's also reachable
// at /api/chat, matching what index.html calls.
//
// This currently talks to NaraRouter (https://router.naraya.ai), a third-party
// gateway offering free daily token quotas via an OpenAI-compatible endpoint.
// NOTE: NaraRouter is NOT operated by Anthropic. It's fine for testing/demos,
// but for a paid, customer-facing product you should evaluate its reliability
// and terms of service before relying on it long-term — and consider switching
// to an official Anthropic API key (see the commented-out block below).
//
// SETUP:
// 1. Put this file at:  netlify/functions/chat.js
// 2. Put netlify.toml at the root of your project.
// 3. In Netlify → Site settings → Environment variables, add:
//      NARAROUTER_API_KEY = sk-nry-...   (from https://router.naraya.ai/keys)
// 4. Deploy (drag-and-drop or git push). No build step required for a static site.
//
// The API key NEVER reaches the browser. Only this server-side function talks
// to the upstream API.

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

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const apiKey = process.env.NARAROUTER_API_KEY;
  if (!apiKey) {
    console.error("NARAROUTER_API_KEY is not set in the environment");
    return { statusCode: 500, body: JSON.stringify({ error: "server_misconfigured" }) };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "invalid_json" }) };
  }

  const messages = payload.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return { statusCode: 400, body: JSON.stringify({ error: "invalid_request" }) };
  }

  const cleanMessages = messages
    .filter(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string"
    )
    .slice(-MAX_HISTORY_MESSAGES);

  if (cleanMessages.length === 0) {
    return { statusCode: 400, body: JSON.stringify({ error: "invalid_request" }) };
  }

  try {
    // --- NaraRouter (OpenAI-compatible) ---
    const upstream = await fetch("https://router.naraya.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "claude-sonnet-4.5", // NaraRouter's alias for Claude; check router.naraya.ai/docs for current aliases
        max_tokens: 400,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...cleanMessages],
      }),
    });

    const data = await upstream.json();

    if (!upstream.ok) {
      console.error("NaraRouter API error:", upstream.status, data);
      return { statusCode: 502, body: JSON.stringify({ error: "upstream_error" }) };
    }

    const reply = data.choices?.[0]?.message?.content ?? null;
    return { statusCode: 200, body: JSON.stringify({ reply }) };

    /* --- Official Anthropic API (swap to this later) ---
    const upstream = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-5",
        max_tokens: 400,
        system: SYSTEM_PROMPT,
        messages: cleanMessages,
      }),
    });
    const data = await upstream.json();
    if (!upstream.ok) return { statusCode: 502, body: JSON.stringify({ error: "upstream_error" }) };
    const block = (data.content || []).find((c) => c.type === "text");
    return { statusCode: 200, body: JSON.stringify({ reply: block ? block.text : null }) };
    */
  } catch (err) {
    console.error("Chat proxy error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: "server_error" }) };
  }
};
