# Kompasslotse — Vercel-only Setup

This is the trimmed-down version with only the 2 files Vercel needs. No `netlify.toml`,
no `netlify/` folder — leaving those out avoids the confusion you ran into on Netlify.

```
kompasslotse-website/
├── index.html
└── api/
    └── chat.js
```

## Step 1 — Upload to GitHub

If you still have the old repo you used for Netlify, easiest is to **delete it and start a
fresh one** — that avoids carrying over any leftover mixed-up files.

1. Go to github.com → **New repository** → give it a name (e.g. `kompasslotse-website`) → Create
2. On the new repo page, click **uploading an existing file**
3. Drag the **whole unzipped folder** (`index.html` + the `api` folder together) into the
   browser window — not the files one by one. This keeps `chat.js` inside `api/` where Vercel
   expects it.
4. Scroll down, click **Commit changes**
5. Confirm on GitHub that you see exactly this in the repo: `index.html` and a folder called
   `api` containing `chat.js` — nothing else, nothing named `netlify` anywhere.

## Step 2 — Deploy on Vercel

1. Go to vercel.com → sign up/log in with your GitHub account (simplest option)
2. Click **Add New… → Project**
3. Find your repo in the list → click **Import**
4. Leave all settings as default (Framework Preset: "Other" is fine, no build command needed)
5. **Before** clicking Deploy, expand **Environment Variables** and add:
   - Key: `NARAROUTER_API_KEY`
   - Value: your NaraRouter key (use a freshly rotated one — see note below)
6. Click **Deploy**
7. Wait for it to finish — Vercel gives you a URL like `https://kompasslotse-website.vercel.app`

## Step 3 — Test

Open that URL, click the chat bubble, ask something. If you get a real reply, you're done.

If you ever add the environment variable *after* the first deploy instead of during it, remember
you need to redeploy for it to take effect: **Deployments** tab → ⋯ on the latest one → **Redeploy**.

## About your NaraRouter key

You pasted your actual API key into our chat earlier in this conversation. Please rotate/regenerate
it at router.naraya.ai before using it here, and only paste the new one directly into Vercel's
environment variable field — never into a chat, a code file, or anything that gets committed to
GitHub.
