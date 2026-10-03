/**
 * Google Analytics only loads after the visitor accepts, so nothing is sent
 * to Google before a choice. The ICO's statistical-purposes exception
 * (Data (Use and Access) Act 2025) needs the analytics provider to act only
 * as our processor, which GA4 does not guarantee, so consent is required.
 * Accept grants analytics_storage only: the site runs no advertising tags.
 */
(() => {
  const MEASUREMENT_ID = "G-FRZ1H1BK9C";
  const STORAGE_KEY = "tt-analytics-consent";

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });

  const readChoice = () => {
    try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
  };
  const saveChoice = (choice) => {
    try { localStorage.setItem(STORAGE_KEY, choice); } catch {}
  };

  let tagLoaded = false;
  const startAnalytics = () => {
    window[`ga-disable-${MEASUREMENT_ID}`] = false;
    gtag("consent", "update", { analytics_storage: "granted" });
    if (tagLoaded) return;
    tagLoaded = true;
    const tag = document.createElement("script");
    tag.async = true;
    tag.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.append(tag);
    gtag("js", new Date());
    gtag("config", MEASUREMENT_ID);
  };

  /**
   * A loaded tag keeps sending cookieless pings after consent is withdrawn,
   * so the ga-disable flag stops it entirely and the _ga cookies are removed.
   */
  const stopAnalytics = () => {
    window[`ga-disable-${MEASUREMENT_ID}`] = true;
    gtag("consent", "update", { analytics_storage: "denied" });
    const labels = location.hostname.split(".");
    const domains = [""];
    for (let i = 0; i < labels.length - 1; i++) domains.push(`; domain=.${labels.slice(i).join(".")}`);
    for (const cookie of document.cookie.split("; ")) {
      const name = cookie.split("=")[0];
      if (/^_ga(_|$)/.test(name)) domains.forEach((domain) => { document.cookie = `${name}=; Max-Age=0; path=/${domain}`; });
    }
  };

  const banner = document.createElement("section");
  banner.className = "consent";
  banner.hidden = true;
  banner.tabIndex = -1;
  banner.setAttribute("aria-label", "Cookie choice");
  banner.innerHTML = `
    <p class="consent-question">Can we use Google Analytics cookies to see how people use this site?</p>
    <details class="consent-details">
      <summary>What is stored</summary>
      <p>If you accept, Google Analytics stores two cookies (_ga and one starting _ga_) for up to two years. They count visits and show which pages people use. Reports show totals, not who you are. If you reject, nothing is stored. You can change your choice with Cookie settings at the bottom of the page.</p>
    </details>
    <div class="consent-actions">
      <button type="button" data-consent="granted">Accept</button>
      <button type="button" data-consent="denied">Reject</button>
    </div>`;

  let returnFocusTo = null;
  banner.addEventListener("click", (event) => {
    const picked = event.target.closest("[data-consent]")?.dataset.consent;
    if (!picked) return;
    saveChoice(picked);
    if (picked === "granted") startAnalytics(); else stopAnalytics();
    banner.hidden = true;
    returnFocusTo?.focus();
    returnFocusTo = null;
  });

  const mount = () => {
    const skipLink = document.querySelector(".skip-link");
    if (skipLink) skipLink.after(banner); else document.body.prepend(banner);
    for (const button of document.querySelectorAll("[data-consent-open]")) {
      button.hidden = false;
      button.addEventListener("click", () => {
        returnFocusTo = button;
        banner.hidden = false;
        banner.focus();
      });
    }
    if (choice !== "granted" && choice !== "denied") banner.hidden = false;
  };

  const choice = readChoice();
  if (choice === "granted") startAnalytics();
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount); else mount();
})();
