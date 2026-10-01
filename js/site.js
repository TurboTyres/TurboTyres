/**
 * On phones the hero already shows the Call and WhatsApp buttons, so the
 * fixed bar stays hidden until they scroll out of view. Without this script
 * the bar is always shown.
 */
(() => {
  const bar = document.querySelector(".mobile-call-bar");
  const heroActions = document.querySelector(".hero-actions");
  if (!bar || !heroActions || !("IntersectionObserver" in window)) return;
  bar.classList.add("is-hidden");
  new IntersectionObserver(([entry]) => {
    bar.classList.toggle("is-hidden", entry.isIntersecting);
  }).observe(heroActions);
})();
