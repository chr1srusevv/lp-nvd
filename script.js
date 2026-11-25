/* Light, progressive motion. Without html.js everything is static and visible. */
(function () {
  var root = document.documentElement;
  var motion = root.classList.contains("js");

  /* header border after scroll */
  var header = document.querySelector(".site-header");
  var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* sticky CTA (mobile): visible once the form has scrolled out of view upward */
  var form = document.getElementById("lead-form");
  var sticky = document.querySelector(".sticky-cta");
  if (form && sticky && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      var e = entries[0];
      var past = !e.isIntersecting && e.boundingClientRect.top < 0;
      sticky.classList.toggle("is-visible", past);
      sticky.setAttribute("aria-hidden", past ? "false" : "true");
      sticky.querySelector("a").tabIndex = past ? 0 : -1;
    }).observe(form);
  }

  if (!motion) return;

  /* count-up helper */
  function countUp(el, dur) {
    var end = parseFloat(el.getAttribute("data-count"));
    var prefix = el.getAttribute("data-prefix") || "";
    var t0 = null;
    function tick(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1);
      var v = Math.round(end * (1 - Math.pow(1 - p, 3)));
      el.textContent = prefix + v;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* hero number counts on load */
  var hero = document.querySelector(".h1__digits");
  if (hero) { hero.textContent = "0"; setTimeout(function () { countUp(hero, 1400); }, 250); }

  /* stagger siblings */
  document.querySelectorAll(".log, .benefits__grid, .about__content, .story__copy").forEach(function (group) {
    group.querySelectorAll(":scope > .reveal").forEach(function (el, i) { el.style.setProperty("--d", i * 110 + "ms"); });
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      el.classList.add("is-in");
      el.querySelectorAll("[data-count]").forEach(function (n) { countUp(n, 1300); });
      if (el.classList.contains("chart")) {
        el.querySelectorAll(".chart__past .cndl").forEach(function (c, i) { c.style.transitionDelay = i * 28 + "ms"; });
      }
      io.unobserve(el);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal, .chart").forEach(function (el) { io.observe(el); });
  document.querySelectorAll(".h2 .hl").forEach(function (el) { io.observe(el); });
})();
