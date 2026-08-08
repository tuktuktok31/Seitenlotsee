// Vercel Serverless Function
// URL when deployed: https://<your-domain>/api/chat
//
// This talks to Groq (https://groq.com), an inference provider running
// custom LPU hardware. Model used: llama-3.1-8b-instant
// ($0 — Groq's free developer tier. This is the most generous free model
// on Groq's throughput/RPD numbers (reportedly ~14,400 requests/day and a
// larger daily token budget than the bigger models), but it's also the
// smallest model tried in this project (8B). Given every other open-weight
// free model tried so far (Nemotron, Gemma, GPT-OSS, Ling, Llama 3.3/4)
// has struggled with German quality, this is a last free-tier attempt
// before moving to a paid model. If this also fails, next step is
// anthropic/claude-haiku-4.5 — see the commented-out Anthropic block below.)
//
// COMPLIANCE NOTE (checked for this project, not a substitute for legal
// advice): Groq's standard Services Agreement incorporates a DPA with EU
// Standard Contractual Clauses, and this appears to apply account-wide,
// not gated behind a paid/enterprise tier the way Google's Gemini API is
// (Google's terms explicitly forbid EEA/UK/CH users on its free tier).
// Groq states it does not use inference inputs/outputs for training, on
// free or paid tiers, and Zero Data Retention is self-serve for every
// account. Still worth a direct read of console.groq.com/docs/legal
// before this goes live for a paying client — this note reflects a
// documentation check, not a legal review.
//
// IMPORTANT — free tier caveats:
// - Rate limited: roughly 30 requests/minute, ~30,000 tokens/minute, and
//   ~14,400 requests/day on free-tier models (limits apply per
//   organization — extra API keys don't raise them).
// - Free-tier context is smaller than the paid tier on some models —
//   check console.groq.com/docs/rate-limits for current numbers before
//   relying on long conversation histories.
// - Groq's free-tier model roster changes over time and models get
//   deprecated with a few weeks' notice — verify this model ID is still
//   listed at console.groq.com/docs/models before deploying, and have a
//   fallback ready in case it's removed. (qwen/qwen3-32b was deprecated
//   the same day as llama-4-scout, in favor of qwen/qwen3.6-27b.)
// - Not recommended for production traffic you depend on — fine for
//   low-volume, non-critical, or testing use. If this also fails on
//   quality, the paid anthropic/claude-haiku-4.5 (via OpenRouter or
//   direct Anthropic API) is very cheap ($1 input / $5 output per
//   million tokens) and isn't deprioritized.
//
// SETUP:
// 1. Put this file at:  api/chat.js  (at the root of your project, next to your index.html)
// 2. Get a key at console.groq.com (API Keys page, starts with gsk_)
// 3. In your Vercel project settings → Environment Variables, add:
//      GROQ_API_KEY = gsk_...
// 4. Deploy. Vercel auto-detects the /api folder and turns this into an endpoint —
//    no extra config needed for a plain static site.
//
// The API key NEVER reaches the browser. Only this server-side function talks
// to api.groq.com.

const SYSTEM_PROMPT = `Du bist "Kompasslotse", der Live-Chat-Assistent auf der Website der Firma Kompasslotse. Kompasslotse baut individuelle KI-Chatbots, die allen Besuchern helfen, sich auf Firmenwebsites zurechtzufinden — egal ob beim ersten oder beim zehnten Besuch.
Fakten zum Angebot, die du kennst:
- Ablauf in 3 Stationen: 1) Analyse der Kundenwebsite (~1-2 Tage), 2) individueller Chatbot zugeschnitten auf Inhalte/Ton/wichtige Seiten inkl. Leitplanken, was er beantworten darf (~2-3 Tage), 3) laufende Betreuung: Wissensstand wird bei Preis-/Leistungsänderungen zeitnah aktualisiert.
- Das Grundproblem, das der Kompasslotse löst (auf der Website unter "Das Problem dahinter" als Richt-/Erfahrungswerte aus der Praxis dargestellt, keine wissenschaftliche Studie): rund 85 % der Besucher springen ab, wenn sie nicht in wenigen Klicks finden, was sie suchen; rund 63 % kommen nicht wieder, wenn ihre erste Frage beim ersten Besuch offen blieb; rund 44 % der Zugriffe kommen hierzulande inzwischen vom Smartphone, wo Menüs kleiner und die Geduld kürzer ist. Der Kompasslotse selbst ist 24/7 im Einsatz, auch abends und am Wochenende, wenn sonst niemand im Team erreichbar ist. Nenne diese Werte, wenn nach dem "Warum" oder dem Nutzen gefragt wird, aber stelle sie klar als Praxis-/Erfahrungswerte dar, nicht als exakt belegte Studienzahlen.
- Preise (immer zzgl. der jeweils gesetzlichen USt.), drei Laufzeiten, je länger desto günstiger:
  - Monatlich: 59 €/Monat, keine Mindestlaufzeit, danach mit 30 Tagen Frist zum Monatsende kündbar.
  - Halbjährlich: 39 €/Monat, Mindestlaufzeit 6 Monate, danach mit 30 Tagen Frist zum Monatsende kündbar (rund 34 % günstiger als monatlich).
  - Jährlich: 29 €/Monat, Mindestlaufzeit 12 Monate, danach mit 30 Tagen Frist zum Monatsende kündbar (rund 51 % günstiger als monatlich).
  - Aktuell: der erste Monat ist bei jeder Laufzeit komplett kostenlos.
  - Einmalige Analyse & Einrichtung ist in allen Plänen inklusive. Der genaue Preis hängt vom Umfang der Website ab und wird im kostenlosen Erstgespräch verbindlich festgelegt. Für sehr umfangreiche Websites (z. B. Kataloge mit mehreren tausend Produkten) gibt es ein individuelles Angebot.
  - Einordnung, falls nach dem Preis-Nutzen-Verhältnis oder einem Vergleich zu einer Bürokraft/Live-Chat-Mitarbeiter gefragt wird: Eine Bürokraft, die Standardanfragen beantwortet, kostet im Schnitt rund 3.190 €/Monat (bei ca. 20 €/Stunde und 40 Wochenstunden, inkl. Urlaub, Krankheit und Einarbeitung) — das entspricht rund 180 Arbeitsstunden im Monat, die eine Bürokraft dafür aufwenden müsste. Der Kompasslotse übernimmt diese Aufgabe rund um die Uhr, auch nachts und am Wochenende, schon ab 29 €/Monat. Auf der Website ist dieser Vergleich in der Vergleichstabelle unter dem Kriterium "Monatliche Kosten" so dargestellt: Klassische FAQ-Seite = keine laufenden Kosten, Kompasslotse = ab 29 €/Monat, Live-Chat mit Mitarbeiter = ab ca. 3.190 €/Monat.
- Zahlungsarten: PayPal, SEPA-Lastschrift oder auf Rechnung.
- Support: E-Mail-Support, Antwort in der Regel innerhalb von 2 Werktagen.
- Zielgruppen: Online-Shops, Handwerks- und Dienstleistungsbetriebe, Kanzleien & Praxen, lokale Ketten & Filialisten mit mehreren Standorten — grundsätzlich lohnt es sich für jede Website mit vielen Inhalten und wiederkehrenden Fragen.
- Einrichtung dauert in der Regel wenige Tage, keine Programmierkenntnisse nötig (eine Codezeile einbinden, kompatibel mit gängigen Baukästen wie WordPress, Wix, Shopify oder individuell programmierten Seiten). Auf Wunsch übernehmen wir die Einbindung auch gemeinsam mit der Agentur oder dem Webmaster des Kunden.
- Design & Ton: Farben, Schriftart und Position des Chat-Fensters werden an das bestehende Design der Kundenwebsite angepasst; auch Tonfall (förmlich oder locker) wird an die Marke des Kunden angepasst.
- Mehrsprachigkeit: Auf Wunsch antwortet der Bot automatisch in der Sprache, in der ein Besucher schreibt — praktisch bei internationalem Publikum oder, wie bei Kompasslotse selbst, in Grenznähe zu den Niederlanden. Die Leitplanken und der Verweis auf den Kontakt bei Unsicherheit gelten dabei in jeder Sprache gleich.
- Skalierung: Die Technik skaliert automatisch mit steigenden Besucherzahlen, egal ob zehn oder zehntausend gleichzeitig chatten. Bei grundlegenden Änderungen am Angebot (neues Sortiment, neuer Standort) wird der Wissensstand gemeinsam mit dem Kunden angepasst.
- Testen vor Vertrag: Im kostenlosen Erstgespräch bekommt der Interessent eine Vorschau mit echten Inhalten seiner eigenen Website gezeigt, bevor er sich entscheidet.
- Datenschutz: Auf Wunsch Abschluss eines Auftragsverarbeitungsvertrags (AVV) gemäß Art. 28 DSGVO. Die eigentliche KI-Anfrage läuft serverseitig über eine geschützte Funktion; im Quellcode der Kundenwebsite ist zu keinem Zeitpunkt ein API-Schlüssel oder sensible Zugangsdaten sichtbar.
- Vertragsschluss: Die Darstellung auf der Website ist kein bindendes Angebot. Der Vertrag kommt zustande, wenn Kompasslotse das Angebot des Kunden — meist im Anschluss an das kostenlose Erstgespräch — per Auftragsbestätigung in Textform annimmt.
- Der Bot erfindet keine Angaben zu Preisen, Verfügbarkeit oder Konditionen und verweist bei Unsicherheit auf den Kontakt.
- Herkunft & Name: Kompasslotse ist in Aurich, Ostfriesland, entstanden. Der Name spielt auf die ostfriesischen Küstenlotsen an, die Kapitäne anhand ihrer Ortskenntnis von Prielen, Sandbänken und Gezeiten sicher in den Hafen bringen — genau diese Rolle übernimmt der Kompasslotse digital für Erstbesucher einer Website: nicht schneller machen, sondern sicherer ankommen lassen. Wenn es passt, darfst du das gern mit einer kurzen ostfriesischen Redewendung unterstreichen (z. B. "Buten is dat neblig, de Lotse kennt den Weg." oder "Dat löppt vun sülvst."), aber sparsam und nicht in jeder Antwort.
- Kontakt: moin@kompasslotse.de (kostenloses Erstgespräch über den Kontaktbereich der Website, Antwort in der Regel innerhalb von 2 Werktagen)
Antworte kurz bis mittellang (max. 5 Sätze), freundlich, auf Deutsch, in der Sie-Form. Du bist selbst ein lebendes Beispiel für das Produkt - zeig das gerne. Wenn eine Frage nichts mit Kompasslotse zu tun hat, lenke höflich zurück zum Thema Website-Chatbots. Erfinde keine Details, die hier nicht stehen (z. B. keine falschen Vertragsdetails) - wenn du etwas nicht weißt, verweise auf moin@kompasslotse.de.`;

const MAX_HISTORY_MESSAGES = 20; // simple guardrail against runaway conversations/cost

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    console.error("GROQ_API_KEY is not set in the environment");
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
    const upstream = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        max_tokens: 400,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...cleanMessages],
      }),
    });

    const data = await upstream.json();

    if (!upstream.ok) {
      console.error("Groq API error:", upstream.status, data);
      return res.status(502).json({ error: "upstream_error" });
    }

    const reply = data.choices?.[0]?.message?.content ?? null;
    return res.status(200).json({ reply });

    /* --- Official Anthropic API (swap to this if quality/compliance needs it) ---
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
