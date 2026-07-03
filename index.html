<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Kompasslotse — Der KI-Lotse für Ihre Website-Besucher</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root{
    --paper:#EEE7D6;
    --paper-2:#E5DCC5;
    --paper-3:#DED2B4;
    --navy:#17263A;
    --navy-soft:#33465D;
    --navy-2:#1F3550;
    --brass:#AE7F35;
    --brass-light:#C89A50;
    --teal:#1F4E4A;
    --route:#9C4630;
    --line: rgba(23,38,58,0.16);
    --shadow: 0 10px 30px -12px rgba(23,38,58,0.25);
  }
  *{box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{
    margin:0;
    background:var(--paper);
    color:var(--navy);
    font-family:'Inter',sans-serif;
    line-height:1.6;
  }
  .chartbg{
    background-image:
      radial-gradient(circle at 15% 10%, rgba(23,38,58,0.06) 0, transparent 45%),
      radial-gradient(circle at 90% 70%, rgba(174,127,53,0.10) 0, transparent 42%);
  }
  h1,h2,h3{font-family:'Fraunces',serif;margin:0;color:var(--navy);}
  .wrap{max-width:1120px;margin:0 auto;padding:0 32px;}
  .mono{font-family:'IBM Plex Mono',monospace;}
  .eyebrow{font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:0.16em;text-transform:uppercase;color:var(--brass);margin-bottom:14px;display:inline-block;}

  .reveal{opacity:0;transform:translateY(18px);transition:opacity .6s ease, transform .6s ease;}
  .reveal.visible{opacity:1;transform:translateY(0);}

  header{position:sticky;top:0;z-index:80;background:rgba(238,231,214,0.9);backdrop-filter:blur(8px);border-bottom:1px solid var(--line);}
  .navrow{display:flex;align-items:center;justify-content:space-between;padding:16px 32px;max-width:1120px;margin:0 auto;}
  .logo{font-family:'Fraunces',serif;font-weight:600;font-size:19px;color:var(--navy);display:flex;align-items:center;gap:8px;}
  .logo svg{width:20px;height:20px;}
  nav{display:flex;align-items:center;}
  nav a{color:var(--navy-soft);text-decoration:none;font-size:13.5px;margin-left:26px;font-weight:500;}
  nav a:hover{color:var(--brass);}
  .cta-btn{background:var(--navy);color:var(--paper);padding:9px 18px;border-radius:3px;font-size:13px;font-weight:500;text-decoration:none;margin-left:26px;border:1px solid var(--navy);}
  .cta-btn:hover{background:var(--brass);border-color:var(--brass);color:var(--navy);}

  .hero{padding:88px 32px 76px;position:relative;overflow:hidden;}
  .hero-inner{max-width:1120px;margin:0 auto;display:grid;grid-template-columns:1.05fr 0.95fr;gap:56px;align-items:center;}
  .hero-badge{display:inline-flex;align-items:center;gap:8px;background:var(--paper-2);border:1px solid var(--line);padding:6px 14px;border-radius:20px;font-size:12px;color:var(--navy-soft);margin-bottom:22px;}
  .hero-badge b{color:var(--brass);}
  .hero h1{font-size:46px;line-height:1.12;font-weight:600;letter-spacing:-0.01em;}
  .hero .sub{margin-top:20px;font-size:16.5px;color:var(--navy-soft);max-width:460px;}
  .hero-ctas{margin-top:30px;display:flex;gap:14px;flex-wrap:wrap;}
  .btn-primary{background:var(--brass);color:#1c1608;padding:13px 24px;border-radius:3px;text-decoration:none;font-weight:600;font-size:14px;transition:transform .15s, background .15s;display:inline-block;}
  .btn-primary:hover{background:var(--brass-light);transform:translateY(-1px);}
  .btn-secondary{border:1px solid var(--navy);color:var(--navy);padding:13px 22px;border-radius:3px;text-decoration:none;font-weight:500;font-size:14px;transition:all .15s;}
  .btn-secondary:hover{background:var(--navy);color:var(--paper);}
  .hero-proof{margin-top:34px;display:flex;gap:28px;flex-wrap:wrap;}
  .hero-proof div{font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--navy-soft);}
  .hero-proof b{display:block;font-family:'Fraunces',serif;font-size:22px;color:var(--navy);font-weight:600;}

  .compass-wrap{position:relative;justify-self:end;width:100%;max-width:340px;}
  .compass-glow{position:absolute;inset:-40px;background:radial-gradient(circle, rgba(174,127,53,0.18) 0%, transparent 70%);}
  .compass{width:100%;position:relative;}

  section{padding:80px 0;}
  .section-head{max-width:560px;margin-bottom:44px;}
  .section-head h2{font-size:30px;line-height:1.25;}
  .section-head p{color:var(--navy-soft);font-size:15px;margin-top:12px;}

  .problem{background:var(--paper-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line);}
  .problem-grid{display:grid;grid-template-columns:1.1fr 0.9fr;gap:50px;align-items:center;}
  .problem h2{font-size:30px;max-width:420px;}
  .problem p{color:var(--navy-soft);font-size:15px;margin-top:16px;max-width:440px;}
  .ring-box{display:flex;align-items:center;gap:24px;justify-content:center;}
  .ring-label{font-size:13px;color:var(--navy-soft);max-width:190px;line-height:1.6;}
  .ring-label b{display:block;font-family:'IBM Plex Mono',monospace;color:var(--route);font-size:11px;margin-bottom:6px;letter-spacing:0.05em;}

  .benefits{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;}
  .benefit-card{background:var(--paper);border:1px solid var(--line);border-radius:8px;padding:26px 22px;transition:transform .2s, box-shadow .2s;}
  .benefit-card:hover{transform:translateY(-3px);box-shadow:var(--shadow);}
  .benefit-card .icn{width:34px;height:34px;color:var(--brass);margin-bottom:16px;}
  .benefit-card h3{font-size:15.5px;margin-bottom:8px;font-weight:600;font-family:'Inter',sans-serif;}
  .benefit-card p{font-size:13.5px;color:var(--navy-soft);margin:0;line-height:1.55;}

  .timeline{position:relative;}
  .waypoints{display:grid;grid-template-columns:repeat(3,1fr);gap:36px;position:relative;}
  .waypoints::before{content:"";position:absolute;top:19px;left:8%;right:8%;height:1px;background:repeating-linear-gradient(90deg, var(--brass) 0 6px, transparent 6px 12px);z-index:0;}
  .waypoint{position:relative;z-index:1;border:1px solid var(--line);background:var(--paper);padding:26px 22px;border-radius:8px;}
  .waypoint .wp-num{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;background:var(--navy);color:var(--paper);font-family:'IBM Plex Mono',monospace;font-size:11px;margin-bottom:16px;}
  .waypoint h3{font-size:18px;margin-bottom:10px;}
  .waypoint p{font-size:14px;color:var(--navy-soft);margin:0;}

  .forwhom{background:var(--navy);color:var(--paper);}
  .forwhom .section-head h2{color:var(--paper);}
  .forwhom .section-head p{color:#B9C0CE;}
  .forwhom .eyebrow{color:var(--brass-light);}
  .whom-list{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;}
  .whom-item{border:1px solid rgba(238,231,214,0.16);border-radius:8px;padding:20px;background:rgba(238,231,214,0.03);}
  .whom-item b{color:var(--paper);display:block;margin-bottom:6px;font-family:'Fraunces',serif;font-weight:500;font-size:16px;}
  .whom-item p{margin:0;font-size:14px;color:#C7CCD8;}

  .demo-section{background:var(--paper-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line);}
  .demo-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;}
  .mock-chat{background:var(--navy);border-radius:12px;padding:18px;box-shadow:var(--shadow);}
  .mock-chat-head{display:flex;align-items:center;gap:10px;padding-bottom:14px;margin-bottom:14px;border-bottom:1px solid rgba(238,231,214,0.15);}
  .mock-dot{width:8px;height:8px;border-radius:50%;background:var(--brass);}
  .mock-chat-head span{color:var(--paper);font-size:13px;font-weight:500;font-family:'Inter',sans-serif;}
  .mock-bubble{max-width:80%;padding:10px 14px;border-radius:10px;font-size:13.5px;margin-bottom:10px;line-height:1.5;}
  .mock-bubble.bot{background:rgba(238,231,214,0.1);color:var(--paper);border-top-left-radius:2px;}
  .mock-bubble.user{background:var(--brass);color:#1c1608;margin-left:auto;border-top-right-radius:2px;}

  .pricing{text-align:center;}
  .price-card{max-width:420px;margin:0 auto;border:1px solid var(--navy);border-radius:10px;padding:36px 32px;background:var(--paper);box-shadow:var(--shadow);}
  .price-num{font-family:'Fraunces',serif;font-size:44px;color:var(--navy);}
  .price-num span{font-size:15px;color:var(--navy-soft);font-family:'Inter',sans-serif;}
  .price-card ul{list-style:none;padding:0;margin:22px 0 0;text-align:left;}
  .price-card li{padding:9px 0;border-top:1px solid var(--line);font-size:14px;color:var(--navy-soft);display:flex;gap:8px;align-items:center;}
  .price-card li:first-child{border-top:none;}
  .price-card li svg{width:14px;height:14px;color:var(--brass);flex-shrink:0;}

  .faq{max-width:720px;margin:0 auto;}
  .faq-item{border-bottom:1px solid var(--line);}
  .faq-q{cursor:pointer;padding:18px 0;display:flex;justify-content:space-between;align-items:center;font-weight:600;font-size:15px;font-family:'Fraunces',serif;}
  .faq-q::after{content:"+";color:var(--brass);font-family:'IBM Plex Mono',monospace;font-size:18px;}
  .faq-item.open .faq-q::after{content:"–";}
  .faq-a{max-height:0;overflow:hidden;transition:max-height .3s ease;font-size:14px;color:var(--navy-soft);}
  .faq-item.open .faq-a{max-height:200px;padding-bottom:18px;}

  .contact{background:var(--navy);color:var(--paper);text-align:center;}
  .contact .eyebrow{color:var(--brass-light);}
  .contact h2{color:var(--paper);font-size:32px;}
  .contact p{color:#C7CCD8;margin-top:14px;max-width:480px;margin-left:auto;margin-right:auto;}
  .contact-inner{max-width:600px;margin:0 auto;}

  footer{padding:50px 32px 40px;border-top:1px solid var(--line);}
  .footer-inner{max-width:1120px;margin:0 auto;}
  .footer-top{display:flex;justify-content:space-between;flex-wrap:wrap;gap:24px;margin-bottom:30px;}
  .footer-brand{font-family:'Fraunces',serif;font-size:18px;font-weight:600;}
  .footer-links a{color:var(--navy-soft);text-decoration:none;font-size:13.5px;margin-left:22px;}
  .footer-links a:hover{color:var(--brass);}
  .copyright{font-size:12.5px;color:var(--navy-soft);}

  details{margin-top:14px;border:1px solid var(--line);border-radius:4px;background:var(--paper);}
  summary{cursor:pointer;padding:14px 18px;font-weight:600;font-size:14px;font-family:'Fraunces',serif;color:var(--navy);list-style:none;display:flex;justify-content:space-between;align-items:center;}
  summary::-webkit-details-marker{display:none;}
  summary::after{content:"+";font-family:'IBM Plex Mono',monospace;color:var(--brass);font-size:16px;}
  details[open] summary::after{content:"–";}
  .legal-body{padding:0 18px 22px;font-size:13.5px;color:var(--navy-soft);}
  .legal-body h4{font-family:'Fraunces',serif;color:var(--navy);font-size:14.5px;margin:18px 0 6px;}
  .legal-body p{margin:6px 0;}
  .disclaimer{background:rgba(156,70,48,0.08);border:1px solid rgba(156,70,48,0.35);border-radius:4px;padding:12px 14px;font-size:12.5px;color:var(--route);margin-bottom:16px;}
  .placeholder{background:rgba(174,127,53,0.15);padding:1px 5px;border-radius:2px;color:var(--navy);font-family:'IBM Plex Mono',monospace;font-size:12.5px;}

  /* Chat widget */
  #chat-fab{position:fixed;bottom:26px;right:26px;width:60px;height:60px;border-radius:50%;background:var(--brass);border:none;cursor:pointer;box-shadow:0 8px 24px rgba(23,38,58,0.35);z-index:200;display:flex;align-items:center;justify-content:center;transition:transform .2s;}
  #chat-fab:hover{transform:scale(1.06);}
  #chat-fab svg{width:26px;height:26px;color:#1c1608;}
  #chat-fab .pulse{position:absolute;inset:0;border-radius:50%;background:var(--brass);opacity:0.5;animation:pulse 2.2s infinite;}
  @keyframes pulse{0%{transform:scale(1);opacity:0.5;}100%{transform:scale(1.7);opacity:0;}}

  #chat-panel{position:fixed;bottom:100px;right:26px;width:360px;max-width:88vw;height:480px;max-height:70vh;background:var(--paper);border-radius:14px;box-shadow:0 20px 50px rgba(23,38,58,0.4);z-index:200;display:none;flex-direction:column;overflow:hidden;border:1px solid var(--line);}
  #chat-panel.open{display:flex;}
  .chat-head{background:var(--navy);color:var(--paper);padding:16px 18px;display:flex;justify-content:space-between;align-items:center;}
  .chat-head-title{display:flex;align-items:center;gap:10px;}
  .chat-head-title svg{width:18px;height:18px;color:var(--brass-light);}
  .chat-head-title div b{display:block;font-family:'Fraunces',serif;font-size:14.5px;}
  .chat-head-title div span{font-size:11px;color:#B9C0CE;font-family:'IBM Plex Mono',monospace;}
  .chat-close{background:none;border:none;color:var(--paper);cursor:pointer;font-size:18px;opacity:0.7;}
  .chat-close:hover{opacity:1;}
  #chat-messages{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;background:var(--paper);}
  .msg{max-width:82%;padding:10px 13px;border-radius:10px;font-size:13.5px;line-height:1.5;}
  .msg.bot{background:var(--paper-2);color:var(--navy);border-top-left-radius:2px;align-self:flex-start;}
  .msg.user{background:var(--brass);color:#1c1608;border-top-right-radius:2px;align-self:flex-end;}
  .msg.typing{background:var(--paper-2);color:var(--navy-soft);align-self:flex-start;font-family:'IBM Plex Mono',monospace;font-size:12px;}
  .chat-input-row{display:flex;border-top:1px solid var(--line);padding:10px;gap:8px;background:var(--paper);}
  #chat-input{flex:1;border:1px solid var(--line);border-radius:8px;padding:9px 12px;font-family:'Inter',sans-serif;font-size:13.5px;outline:none;background:white;}
  #chat-input:focus{border-color:var(--brass);}
  #chat-send{background:var(--navy);color:var(--paper);border:none;border-radius:8px;padding:0 16px;cursor:pointer;font-size:13px;}
  #chat-send:hover{background:var(--brass);color:var(--navy);}
  #chat-send:disabled{opacity:0.5;cursor:not-allowed;}

  @media (max-width: 860px){
    .hero-inner{grid-template-columns:1fr;}
    .compass-wrap{display:none;}
    .problem-grid{grid-template-columns:1fr;}
    .benefits{grid-template-columns:repeat(2,1fr);}
    .waypoints{grid-template-columns:1fr;}
    .waypoints::before{display:none;}
    .whom-list{grid-template-columns:1fr;}
    .demo-grid{grid-template-columns:1fr;}
    .hero h1{font-size:34px;}
    nav a{display:none;}
    #chat-panel{right:12px;bottom:90px;width:92vw;}
    #chat-fab{right:16px;bottom:16px;}
  }
</style>
</head>
<body class="chartbg">

<header>
  <div class="navrow">
    <div class="logo">
      <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#AE7F35" stroke-width="1.4"/><path d="M12 5 L14 12 L12 19 L10 12 Z" fill="#AE7F35"/></svg>
      Kompasslotse
    </div>
    <nav>
      <a href="#vorteile">Vorteile</a>
      <a href="#funktion">So funktioniert's</a>
      <a href="#zielgruppe">Für wen</a>
      <a href="#preise">Preise</a>
      <a href="#faq">FAQ</a>
      <a href="#kontakt" class="cta-btn">Kontakt aufnehmen</a>
    </nav>
  </div>
</header>

<section class="hero">
  <div class="hero-inner">
    <div>
      <div class="hero-badge">● <b>Live-Demo</b> — testen Sie den Lotsen unten rechts</div>
      <h1>Ihre Website braucht keinen Untertitel.<br>Sie braucht einen Lotsen.</h1>
      <p class="sub">Ein KI-Chatbot, der Erstbesucher direkt zu dem führt, was sie suchen — statt sie durch Menüs klicken zu lassen, bis sie abspringen.</p>
      <div class="hero-ctas">
        <a href="#kontakt" class="btn-primary">Kostenloses Erstgespräch</a>
        <a href="#funktion" class="btn-secondary">So funktioniert's</a>
      </div>
      <div class="hero-proof">
        <div><b>&lt; 5 Min.</b>Einrichtungszeit</div>
        <div><b>Monatlich</b>kündbar</div>
        <div><b>DSGVO</b>im Blick</div>
      </div>
    </div>
    <div class="compass-wrap">
      <div class="compass-glow"></div>
      <svg class="compass" viewBox="0 0 300 300" fill="none">
        <circle cx="150" cy="150" r="120" stroke="#17263A" stroke-width="1"/>
        <circle cx="150" cy="150" r="95" stroke="#AE7F35" stroke-width="1" stroke-dasharray="2 5"/>
        <circle cx="150" cy="150" r="3" fill="#17263A"/>
        <path d="M150 40 L160 150 L150 260 L140 150 Z" fill="#9C4630" opacity="0.85"/>
        <path d="M40 150 L150 140 L260 150 L150 160 Z" fill="#17263A" opacity="0.7"/>
        <text x="150" y="28" text-anchor="middle" font-family="IBM Plex Mono" font-size="11" fill="#17263A">N</text>
        <text x="150" y="282" text-anchor="middle" font-family="IBM Plex Mono" font-size="11" fill="#17263A">S</text>
        <text x="278" y="154" text-anchor="middle" font-family="IBM Plex Mono" font-size="11" fill="#17263A">O</text>
        <text x="22" y="154" text-anchor="middle" font-family="IBM Plex Mono" font-size="11" fill="#17263A">W</text>
      </svg>
    </div>
  </div>
</section>

<section class="problem">
  <div class="wrap problem-grid reveal">
    <div>
      <span class="eyebrow">Das Problem</span>
      <h2>Besucher, die sich nicht zurechtfinden, kaufen nicht — sie gehen.</h2>
      <p>Die meisten Websites sind für Menschen gebaut, die schon wissen, wonach sie suchen. Erstbesucher sind das nicht. Sie klicken zweimal, finden die Information nicht, und verlassen die Seite — ohne eine Frage zu stellen, ohne eine Spur zu hinterlassen.</p>
    </div>
    <div class="ring-box">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="50" fill="none" stroke="#DED2B4" stroke-width="10"/>
        <circle cx="60" cy="60" r="50" fill="none" stroke="#9C4630" stroke-width="10" stroke-dasharray="220 314" stroke-linecap="round" transform="rotate(-90 60 60)"/>
        <text x="60" y="66" text-anchor="middle" font-family="Fraunces" font-size="26" fill="#17263A" font-weight="600">70%</text>
      </svg>
      <div class="ring-label"><b>RICHTWERT AUS DER PRAXIS</b>der Erstbesucher verlassen eine Website, wenn sie nicht innerhalb weniger Klicks finden, was sie suchen.</div>
    </div>
  </div>
</section>

<section id="vorteile">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Vorteile</span>
      <h2>Was sich für Sie konkret ändert.</h2>
      <p>Kein zusätzliches Tool zum Verwalten — ein stiller Helfer, der im Hintergrund arbeitet.</p>
    </div>
    <div class="benefits reveal">
      <div class="benefit-card">
        <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 12h8M8 8h5M8 16h4"/><rect x="3" y="4" width="18" height="16" rx="2"/></svg>
        <h3>Weniger Rückfragen</h3>
        <p>Wiederkehrende Fragen zu Preisen, Leistungen oder Öffnungszeiten werden sofort beantwortet, statt als Anruf oder E-Mail bei Ihrem Team zu landen. Nur wirklich individuelle Anliegen kommen noch bei Ihnen an.</p>
      </div>
      <div class="benefit-card">
        <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M13 2 3 14h7l-1 8 11-14h-7l1-6Z"/></svg>
        <h3>Schnellere Orientierung</h3>
        <p>Statt sich durch Menüs und Unterseiten zu klicken, beschreibt der Besucher in eigenen Worten, was er sucht — und bekommt einen direkten Link zur passenden Seite oder eine kurze Antwort.</p>
      </div>
      <div class="benefit-card">
        <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-4 4"/></svg>
        <h3>Höhere Conversion</h3>
        <p>Wer schneller findet, was er sucht, bricht seltener ab — bei Kontaktanfragen genauso wie bei Käufen. Der Chat begleitet Besucher bis zum nächsten Schritt: Formular, Warenkorb oder Terminbuchung.</p>
      </div>
      <div class="benefit-card">
        <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
        <h3>In Minuten startklar</h3>
        <p>Eine Zeile Code einbinden, fertig. Kein CMS-Umbau, keine Entwicklerzeit auf Ihrer Seite — die technische Einrichtung übernehmen wir vollständig.</p>
      </div>
    </div>
  </div>
</section>

<section id="funktion" style="background:var(--paper-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line);">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">So funktioniert's</span>
      <h2>Drei Stationen von Ihrer Website bis zum laufenden Lotsen.</h2>
    </div>
    <div class="waypoints reveal">
      <div class="waypoint">
        <div class="wp-num">01</div>
        <h3>Analyse Ihrer Website</h3>
        <p>Wir lesen Ihre Seiten, Leistungen, Produkte und FAQ aus, sichten vorhandene Support-Anfragen (falls verfügbar) und identifizieren, wo Erstbesucher heute typischerweise hängen bleiben oder absteigen.</p>
      </div>
      <div class="waypoint">
        <div class="wp-num">02</div>
        <h3>Ihr individueller Lotse</h3>
        <p>Ein Chatbot wird auf Ihre Inhalte, Ihren Ton und Ihre wichtigsten Seiten zugeschnitten, mit klaren Leitplanken versehen (was er beantworten darf und was nicht) und mit einer Zeile Code eingebunden — kompatibel mit den gängigen Baukästen und CMS.</p>
      </div>
      <div class="waypoint">
        <div class="wp-num">03</div>
        <h3>Laufende Betreuung</h3>
        <p>Ändern sich Preise, Leistungen oder Öffnungszeiten, aktualisieren wir den Wissensstand des Bots zeitnah mit. Sie erhalten auf Wunsch eine kurze Zusammenfassung häufig gestellter Fragen. Monatlich kündbar, kein langfristiges Risiko.</p>
      </div>
    </div>
  </div>
</section>

<section class="forwhom" id="zielgruppe">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Für wen</span>
      <h2>Besonders wertvoll für Websites mit vielen Inhalten und wenig Zeit, sie zu erklären.</h2>
    </div>
    <div class="whom-list reveal">
      <div class="whom-item"><b>Online-Shops</b><p>Große Kataloge, in denen Erstkäufer schnell verloren gehen.</p></div>
      <div class="whom-item"><b>Handwerks- & Dienstleistungsbetriebe</b><p>Viele Leistungen auf einer Seite, aber wenig Zeit für Rückfragen am Telefon.</p></div>
      <div class="whom-item"><b>Kanzleien & Praxen</b><p>Erklärungsbedürftige Leistungen, bei denen Vertrauen vor dem ersten Anruf entsteht.</p></div>
      <div class="whom-item"><b>Lokale Ketten & Filialisten</b><p>Mehrere Standorte, Öffnungszeiten und Angebote, die sich laufend ändern.</p></div>
    </div>
  </div>
</section>

<section class="demo-section">
  <div class="wrap demo-grid reveal">
    <div>
      <span class="eyebrow">Live-Demo</span>
      <h2 style="font-size:28px;">Das bekommen Ihre Besucher.</h2>
      <p style="color:var(--navy-soft);margin-top:14px;font-size:15px;">Rechts unten auf dieser Seite finden Sie den echten Lotsen — er kennt genau dieses Angebot und beantwortet Fragen dazu live. Genau so würde er auch auf Ihrer Website für Ihre Besucher arbeiten.</p>
      <a href="#" onclick="openChat();return false;" class="btn-primary" style="margin-top:22px;display:inline-block;">Lotsen jetzt testen</a>
    </div>
    <div class="mock-chat">
      <div class="mock-chat-head"><div class="mock-dot"></div><span>Kompasslotse</span></div>
      <div class="mock-bubble bot">Hallo! Ich bin der Kompasslotse. Womit kann ich Ihnen helfen — Preise, Ablauf, oder etwas anderes?</div>
      <div class="mock-bubble user">Was kostet das im Monat?</div>
      <div class="mock-bubble bot">Ab 79 € im Monat, monatlich kündbar. Soll ich Ihnen erklären, was enthalten ist?</div>
    </div>
  </div>
</section>

<section class="pricing" id="preise">
  <div class="wrap">
    <div class="section-head reveal" style="margin:0 auto 44px;text-align:center;">
      <span class="eyebrow">Preise</span>
      <h2>Ein Modell, monatlich kündbar.</h2>
    </div>
    <div class="price-card reveal">
      <div class="price-num">ab 79&nbsp;€ <span>/ Monat zzgl. USt.</span></div>
      <ul>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>Einmalige Analyse & Einrichtung inklusive</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>Individuell trainierter Chatbot auf Ihre Inhalte</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>Laufende Aktualisierung bei Änderungen</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>E-Mail-Support innerhalb von 2 Werktagen</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>Monatlich kündbar, keine Mindestlaufzeit</li>
      </ul>
      <p style="font-size:12.5px;color:var(--navy-soft);margin-top:18px;">Der genaue Preis hängt vom Umfang Ihrer Website ab und wird im Erstgespräch verbindlich festgelegt. Für Websites mit sehr großem Umfang (z. B. Kataloge mit mehreren tausend Produkten) erstellen wir ein individuelles Angebot.</p>
    </div>
  </div>
</section>

<section id="faq" style="background:var(--paper-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line);">
  <div class="wrap">
    <div class="section-head reveal" style="margin:0 auto 36px;text-align:center;">
      <span class="eyebrow">FAQ</span>
      <h2>Häufige Fragen.</h2>
    </div>
    <div class="faq reveal">
      <div class="faq-item" onclick="this.classList.toggle('open')">
        <div class="faq-q">Wie lange dauert die Einrichtung?</div>
        <div class="faq-a">In der Regel wenige Tage von der Website-Analyse bis zum fertigen Bot, abhängig vom Umfang Ihrer Inhalte.</div>
      </div>
      <div class="faq-item" onclick="this.classList.toggle('open')">
        <div class="faq-q">Muss ich selbst programmieren können?</div>
        <div class="faq-a">Nein. Sie erhalten eine einzige Codezeile zum Einfügen, oder wir übernehmen das gemeinsam mit Ihrer Agentur.</div>
      </div>
      <div class="faq-item" onclick="this.classList.toggle('open')">
        <div class="faq-q">Was passiert mit den Daten meiner Besucher?</div>
        <div class="faq-a">Das hängt von der technischen Umsetzung ab. Wir empfehlen und unterstützen einen Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO.</div>
      </div>
      <div class="faq-item" onclick="this.classList.toggle('open')">
        <div class="faq-q">Kann ich jederzeit kündigen?</div>
        <div class="faq-a">Ja, das Abo ist monatlich kündbar — Details dazu finden Sie in den AGB im Footer.</div>
      </div>
      <div class="faq-item" onclick="this.classList.toggle('open')">
        <div class="faq-q">Was antwortet der Bot, wenn er etwas nicht weiß?</div>
        <div class="faq-a">Er erfindet keine Angaben zu Preisen, Verfügbarkeit oder Konditionen. Bei Fragen außerhalb seines Wissensstands verweist er auf Ihre Kontaktadresse oder Ihr Kontaktformular, statt zu raten.</div>
      </div>
      <div class="faq-item" onclick="this.classList.toggle('open')">
        <div class="faq-q">Kann ich den Bot vorab testen, bevor ich mich entscheide?</div>
        <div class="faq-a">Ja. Im kostenlosen Erstgespräch zeigen wir Ihnen eine Vorschau mit Inhalten Ihrer eigenen Website, bevor Sie sich für eine Zusammenarbeit entscheiden.</div>
      </div>
      <div class="faq-item" onclick="this.classList.toggle('open')">
        <div class="faq-q">Passt der Bot zum Design meiner Website?</div>
        <div class="faq-a">Ja, Farben, Schriftart und Position des Chat-Fensters werden an Ihr bestehendes Design angepasst, sodass der Lotse wie ein natürlicher Teil Ihrer Seite wirkt.</div>
      </div>
    </div>
  </div>
</section>

<section class="contact" id="kontakt">
  <div class="wrap contact-inner">
    <span class="eyebrow">Kontakt</span>
    <h2>Lassen Sie uns über Ihre Website sprechen.</h2>
    <p>Kurze Nachricht, kein Formularmarathon. Wir melden uns innerhalb von zwei Werktagen.</p>
    <div style="margin-top:28px;">
      <a href="mailto:kontakt@kompasslotse.de" class="btn-primary">kontakt@kompasslotse.de</a>
    </div>
  </div>
</section>

<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">Kompasslotse</div>
      <div class="footer-links">
        <a href="#vorteile">Vorteile</a>
        <a href="#preise">Preise</a>
        <a href="#kontakt">Kontakt</a>
      </div>
    </div>

    <details>
      <summary>Impressum</summary>
      <div class="legal-body">
        <div class="disclaimer">Platzhalter-Angaben — vor Veröffentlichung mit Ihren echten Daten ausfüllen. Ein Impressum ist in Deutschland für geschäftliche Websites nach § 5 TMG gesetzlich vorgeschrieben.</div>
        <p><b>Angaben gemäß § 5 TMG</b></p>
        <p>Kompasslotse <span class="placeholder">[Rechtsform, z. B. GmbH / UG / Einzelunternehmen]</span><br>
        <span class="placeholder">[Straße und Hausnummer]</span><br>
        <span class="placeholder">[PLZ und Ort]</span></p>
        <p><b>Vertreten durch</b><br>
        <span class="placeholder">[Name der Geschäftsführung / Inhaber:in]</span></p>
        <p><b>Kontakt</b><br>
        Telefon: <span class="placeholder">[Telefonnummer]</span><br>
        E-Mail: kontakt@kompasslotse.de</p>
        <p><b>Registereintrag</b><br>
        Falls im Handelsregister eingetragen: <span class="placeholder">[Registergericht, Registernummer]</span></p>
        <p><b>Umsatzsteuer-ID</b><br>
        Falls vorhanden: <span class="placeholder">[USt-IdNr. nach § 27a UStG]</span></p>
        <p><b>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</b><br>
        <span class="placeholder">[Name, Anschrift wie oben]</span></p>
      </div>
    </details>

    <details>
      <summary>Allgemeine Geschäftsbedingungen (AGB)</summary>
      <div class="legal-body">
        <div class="disclaimer">Dies ist ein <b>Muster</b> und keine Rechtsberatung. Lassen Sie diese AGB vor der Verwendung gegenüber echten Kunden von einem Rechtsanwalt / einer Rechtsanwältin prüfen — insbesondere im Hinblick auf Kündigungsfristen, Haftungsgrenzen, Datenschutz und branchenspezifische Besonderheiten. Diese Fassung ist auf Geschäftskunden (B2B) zugeschnitten; für den Verkauf an Verbraucher sind zusätzliche Pflichten (u. a. Widerrufsrecht) zu prüfen.</div>

        <h4>§ 1 Geltungsbereich und Vertragspartner</h4>
        <p>Diese Allgemeinen Geschäftsbedingungen ("AGB") gelten für alle Verträge über die Bereitstellung eines individuell konfigurierten KI-gestützten Chatbots zur Website-Navigation ("Leistung") zwischen <span class="placeholder">[Ihr Firmenname, z. B. Kompasslotse GmbH]</span> ("Anbieter") und Unternehmern im Sinne von § 14 BGB ("Kunde"). Die Leistung richtet sich ausschließlich an Kunden, die in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handeln.</p>
        <p>Abweichende, entgegenstehende oder ergänzende Geschäftsbedingungen des Kunden werden nur dann Vertragsbestandteil, wenn der Anbieter ihrer Geltung ausdrücklich schriftlich zugestimmt hat.</p>

        <h4>§ 2 Vertragsschluss</h4>
        <p>Die Darstellung der Leistung auf der Website des Anbieters stellt kein bindendes Angebot dar, sondern eine Aufforderung an den Kunden, ein Angebot abzugeben. Der Vertrag kommt zustande, indem der Anbieter das Angebot des Kunden (z. B. per E-Mail, Kontaktformular oder im Rahmen eines Erstgesprächs) durch eine schriftliche Auftragsbestätigung annimmt oder mit der Ausführung der vereinbarten Leistung beginnt.</p>

        <h4>§ 3 Leistungsbeschreibung</h4>
        <p>Der Anbieter analysiert die vom Kunden benannte Website, erstellt daraus einen auf Inhalte, Tonalität und wichtige Unterseiten zugeschnittenen Chatbot und stellt diesen über einen Einbindungscode ("Snippet") zur Integration in die Website des Kunden bereit. Der genaue Funktionsumfang, unterstützte Sprachen sowie etwaige Zusatzleistungen werden individuell im Angebot bzw. in der Auftragsbestätigung festgelegt.</p>
        <p>Der Anbieter schuldet die vereinbarte Leistung nach dem Stand der Technik, jedoch keinen bestimmten wirtschaftlichen Erfolg (z. B. eine bestimmte Steigerung von Anfragen, Verkäufen oder Verweildauer). Angaben zu typischen Ergebnissen auf der Website des Anbieters sind unverbindliche Richtwerte.</p>

        <h4>§ 4 Verfügbarkeit und Änderungen der Leistung</h4>
        <p>Der Anbieter ist bemüht, eine hohe Verfügbarkeit des Chatbots zu gewährleisten, sagt jedoch — soweit nicht individuell anders vereinbart — keine bestimmte Mindestverfügbarkeit (SLA) zu. Wartungsfenster, Ausfälle von Vorleistungen Dritter (insbesondere der zugrunde liegenden KI-Infrastruktur) sowie temporäre Beeinträchtigungen zur Fehlerbehebung bleiben vorbehalten und begründen keinen Mangel, sofern sie in angemessenem Umfang erfolgen.</p>
        <p>Der Anbieter darf die Leistung technisch weiterentwickeln oder das zugrunde liegende KI-Modell austauschen, sofern dies keine wesentliche Verschlechterung des vereinbarten Funktionsumfangs darstellt.</p>

        <h4>§ 5 Vertragslaufzeit und Kündigung</h4>
        <p>Der Vertrag läuft auf unbestimmte Zeit und kann von beiden Parteien mit einer Frist von <span class="placeholder">[z. B. 30 Tagen]</span> zum Ende eines Kalendermonats in Textform (z. B. E-Mail) gekündigt werden. Das Recht beider Parteien zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt; ein wichtiger Grund liegt für den Anbieter insbesondere vor, wenn der Kunde trotz Mahnung mit der Zahlung in Verzug ist oder die Leistung nachweislich missbräuchlich nutzt (siehe § 8).</p>
        <p>Nach Wirksamwerden der Kündigung wird der Chatbot deaktiviert und das Einbindungs-Snippet funktionsunfähig gemacht. Bereits gezahlte, auf den Zeitraum nach Vertragsende entfallende Monatsbeiträge werden nicht anteilig erstattet, soweit die Kündigung ordentlich zum Monatsende erfolgt.</p>

        <h4>§ 6 Preise, Zahlungsbedingungen und Zahlungsverzug</h4>
        <p>Es gilt der bei Vertragsschluss vereinbarte monatliche Preis zzgl. der jeweils gesetzlichen Umsatzsteuer. Die Abrechnung erfolgt monatlich im Voraus per <span class="placeholder">[Zahlungsart, z. B. SEPA-Lastschrift / Rechnung]</span>. Preisanpassungen für laufende Verträge werden dem Kunden mit einer Frist von mindestens <span class="placeholder">[z. B. 30 Tagen]</span> vorab in Textform angekündigt; der Kunde ist in diesem Fall zur außerordentlichen Kündigung zum Zeitpunkt des Wirksamwerdens der Preisanpassung berechtigt.</p>
        <p>Gerät der Kunde mit der Zahlung in Verzug, ist der Anbieter berechtigt, Verzugszinsen in gesetzlicher Höhe zu berechnen und den Zugang zur Leistung nach vorheriger Mahnung mit angemessener Fristsetzung vorübergehend zu sperren.</p>

        <h4>§ 7 Mitwirkungspflichten des Kunden</h4>
        <p>Der Kunde stellt die für Analyse, Einrichtung und laufende Aktualisierung notwendigen Informationen (z. B. Zugang zur Website bzw. Kontakt zur zuständigen Agentur, aktuelle Inhalte zu Preisen und Leistungen) rechtzeitig und in korrekter Form zur Verfügung. Verzögerungen oder fehlerhafte Ausgaben des Chatbots, die auf verspätete oder fehlerhafte Angaben des Kunden zurückzuführen sind, fallen nicht in den Verantwortungsbereich des Anbieters.</p>
        <p>Der Kunde ist verpflichtet, den Chatbot regelmäßig auf offensichtlich fehlerhafte oder veraltete Antworten zu prüfen und dem Anbieter Korrekturbedarf zeitnah mitzuteilen.</p>

        <h4>§ 8 Zulässige Nutzung</h4>
        <p>Der Kunde darf den Chatbot nicht dazu nutzen, rechtswidrige, irreführende oder diskriminierende Inhalte zu verbreiten, personenbezogene Daten Dritter entgegen geltendem Recht zu verarbeiten oder Endnutzer über den automatisierten Charakter des Chats zu täuschen, sofern eine Kennzeichnungspflicht besteht. Bei erheblichem oder wiederholtem Verstoß ist der Anbieter zur vorübergehenden Sperrung sowie — nach erfolgloser Abmahnung — zur außerordentlichen Kündigung berechtigt.</p>

        <h4>§ 9 Rechte am Chatbot und an den Inhalten</h4>
        <p>Der Anbieter räumt dem Kunden für die Vertragslaufzeit ein einfaches, nicht übertragbares Recht ein, den bereitgestellten Chatbot auf der vereinbarten Website einzubinden und zu nutzen. Rechte am zugrunde liegenden System, an der Konfiguration und an etwaiger Software verbleiben beim Anbieter bzw. dessen Lizenzgebern. Vom Kunden bereitgestellte Inhalte (Texte, Produktdaten etc.) bleiben Eigentum des Kunden; der Kunde räumt dem Anbieter das für die Vertragserfüllung notwendige Nutzungsrecht daran ein und sichert zu, zur Bereitstellung dieser Inhalte berechtigt zu sein.</p>

        <h4>§ 10 Haftung</h4>
        <p>Der Anbieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit, bei Verletzung von Leben, Körper oder Gesundheit sowie nach Maßgabe des Produkthaftungsgesetzes. Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf, ist die Haftung der Höhe nach auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden begrenzt.</p>
        <p>Der Anbieter haftet nicht für Ausgaben des Chatbots, die auf fehlerhaften, unvollständigen oder veralteten Angaben des Kunden beruhen, sowie nicht für Entscheidungen, die Website-Besucher allein auf Basis einer Chatbot-Antwort treffen, ohne die maßgeblichen Vertrags- oder Produktinformationen des Kunden zu prüfen. Der Kunde bleibt für die inhaltliche Richtigkeit der auf seiner Website veröffentlichten Angaben (Preise, Verfügbarkeiten, rechtliche Hinweise) selbst verantwortlich.</p>

        <h4>§ 11 Datenschutz</h4>
        <p>Da der Chatbot personenbezogene Daten von Website-Besuchern (z. B. Chat-Verläufe, IP-Adressen) verarbeiten kann, schließen die Parteien einen gesonderten Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO, der Bestandteil dieses Vertrags wird. Der Kunde ist verantwortlich dafür, seine Website-Besucher im Rahmen der Datenschutzerklärung über den Einsatz des Chatbots zu informieren.</p>

        <h4>§ 12 Vertraulichkeit</h4>
        <p>Beide Parteien verpflichten sich, vertrauliche Informationen der jeweils anderen Partei, die ihnen im Rahmen der Vertragsdurchführung bekannt werden, vertraulich zu behandeln und nicht an Dritte weiterzugeben, soweit keine gesetzliche Offenlegungspflicht besteht.</p>

        <h4>§ 13 Änderungen dieser AGB</h4>
        <p>Der Anbieter kann diese AGB mit Wirkung für die Zukunft ändern, sofern dies zur Anpassung an geänderte Rechtslage, technische Gegebenheiten oder zur Schließung von Regelungslücken erforderlich ist und den Kunden nicht unangemessen benachteiligt. Änderungen werden dem Kunden mindestens <span class="placeholder">[z. B. 30 Tage]</span> vor Inkrafttreten in Textform mitgeteilt. Widerspricht der Kunde nicht innerhalb dieser Frist, gelten die geänderten AGB als angenommen; der Anbieter weist in der Änderungsmitteilung gesondert auf diese Folge hin.</p>

        <h4>§ 14 Schlussbestimmungen</h4>
        <p>Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Ist der Kunde Kaufmann im Sinne des HGB, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag <span class="placeholder">[Sitz des Anbieters, z. B. Musterstadt]</span>. Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt; an die Stelle der unwirksamen Bestimmung tritt die gesetzliche Regelung.</p>
      </div>
    </details>

    <div class="copyright" style="margin-top:24px;">© <span id="year"></span> Kompasslotse. Alle Angaben ohne Gewähr.</div>
  </div>
</footer>

<button id="chat-fab" onclick="toggleChat()">
  <div class="pulse"></div>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
</button>

<div id="chat-panel">
  <div class="chat-head">
    <div class="chat-head-title">
      <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.4"/><path d="M12 5 L14 12 L12 19 L10 12 Z" fill="currentColor"/></svg>
      <div><b>Kompasslotse</b><span>fragt & antwortet live</span></div>
    </div>
    <button class="chat-close" onclick="toggleChat()">✕</button>
  </div>
  <div id="chat-messages">
    <div class="msg bot">Hallo! Ich bin der Kompasslotse. Fragen Sie mich, wie das Ganze funktioniert, was es kostet, oder für wen es sich eignet.</div>
  </div>
  <div class="chat-input-row">
    <input id="chat-input" placeholder="Ihre Frage..." onkeydown="if(event.key==='Enter')sendMessage()">
    <button id="chat-send" onclick="sendMessage()">Senden</button>
  </div>
</div>

<script>
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
},{threshold:0.15});
revealEls.forEach(el=>io.observe(el));

// Chat widget
let chatHistory = [];
function toggleChat(){
  document.getElementById('chat-panel').classList.toggle('open');
}
function openChat(){
  document.getElementById('chat-panel').classList.add('open');
}

// WICHTIG: Der eigentliche API-Aufruf (inkl. Systemprompt und Anthropic API-Key)
// läuft serverseitig über /api/chat — siehe api/chat.js. Im Browser darf niemals
// ein Anthropic API-Key stehen, da jeder Website-Besucher den Seitenquelltext
// einsehen kann.
const CHAT_ENDPOINT = "/api/chat";

async function sendMessage(){
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if(!text) return;
  input.value = '';
  addMessage('user', text);
  chatHistory.push({role:'user', content:text});
  document.getElementById('chat-send').disabled = true;
  const typingEl = addMessage('bot', 'tippt...', true);

  try{
    const response = await fetch(CHAT_ENDPOINT, {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({ messages: chatHistory })
    });

    if(!response.ok){
      throw new Error("Backend antwortete mit Status " + response.status);
    }

    const data = await response.json();
    const reply = data.reply || "Entschuldigung, da ist etwas schiefgelaufen. Schreiben Sie uns gerne an kontakt@kompasslotse.de.";
    typingEl.remove();
    addMessage('bot', reply);
    chatHistory.push({role:'assistant', content:reply});
  }catch(e){
    console.error("Chat-Fehler:", e);
    typingEl.remove();
    addMessage('bot', "Entschuldigung, da ist etwas schiefgelaufen. Schreiben Sie uns gerne an kontakt@kompasslotse.de.");
  }
  document.getElementById('chat-send').disabled = false;
}

function addMessage(role, text, typing){
  const wrap = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'msg ' + role + (typing ? ' typing' : '');
  div.textContent = text;
  wrap.appendChild(div);
  wrap.scrollTop = wrap.scrollHeight;
  return div;
}
</script>
</body>
</html>
