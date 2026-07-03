# Kompasslotse

Static marketing site for Kompasslotse, a service that builds custom AI chat assistants for company websites, plus a Netlify Function backing the on-page chat widget.

- `index.html` — the site.
- `netlify/functions/chat.js` — serverless endpoint powering the chat widget, reachable at `/api/chat` (see `netlify.toml` for the redirect). Requires a `NARAROUTER_API_KEY` environment variable to be set in the site's environment variables.
