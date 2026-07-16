/* Warrimoo Blog interactions — fish, reveals, nav, paw FAB, copy buttons */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Sticky header ---------- */
  var header = document.querySelector(".site-header");

  function updateHeader() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  /* ---------- Mobile nav ---------- */
  var navToggle = document.querySelector(".nav-toggle");
  var mobileNav = document.querySelector(".mobile-nav");

  function setNav(open) {
    if (!navToggle || !mobileNav) return;
    navToggle.setAttribute("aria-expanded", String(open));
    mobileNav.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-locked", open);
    if (open) {
      var first = mobileNav.querySelector("a");
      if (first) first.focus({ preventScroll: true });
    } else {
      navToggle.focus({ preventScroll: true });
    }
  }

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      setNav(navToggle.getAttribute("aria-expanded") !== "true");
    });
    mobileNav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setNav(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobileNav.classList.contains("is-open")) setNav(false);
    });
  }

  /* ---------- Paw FAB: scroll progress + back to top ---------- */
  var fab = document.querySelector(".paw-fab");
  var fabRing = fab ? fab.querySelector(".ring circle") : null;
  var RING_LEN = 163.4;

  function updateFab() {
    if (!fab) return;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    fab.classList.toggle("is-show", window.scrollY > 480);
    if (fabRing) fabRing.style.strokeDashoffset = (RING_LEN * (1 - progress)).toFixed(1);
  }

  if (fab) {
    fab.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ---------- Single scroll loop ---------- */
  function onScroll() {
    updateHeader();
    updateFab();
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---------- Under-water fish ---------- */
  var FISH_SPECIES = [
    '<svg viewBox="0 0 64 34" aria-hidden="true">' +
      '<path class="fish__tail" d="M45 17 L61 7 Q56 17 61 27 Z" fill="#E85643"/>' +
      '<ellipse cx="26" cy="17" rx="20" ry="11" fill="#FF8A5C"/>' +
      '<path d="M19 8 Q26 2 32 7.5 L26 11 Z" fill="#E85643"/>' +
      '<path d="M16 7.7 Q21 17 16 26.3 Q11 17 16 7.7 Z" fill="#FFF9EE"/>' +
      '<path d="M30 6.4 Q35 17 30 27.6 Q25 17 30 6.4 Z" fill="#FFF9EE"/>' +
      '<circle cx="11" cy="13.5" r="2.5" fill="#16384C"/>' +
      '<circle cx="11.9" cy="12.6" r="0.8" fill="#FFFFFF"/>' +
      "</svg>",
    '<svg viewBox="0 0 64 34" aria-hidden="true">' +
      '<path class="fish__tail" d="M45 17 L61 7 Q56 17 61 27 Z" fill="#FFC247"/>' +
      '<ellipse cx="26" cy="17" rx="20" ry="11" fill="#0E7FA8"/>' +
      '<path d="M10 13.5 Q26 3.5 42 13.5 Q26 9 10 13.5 Z" fill="#16384C" opacity="0.6"/>' +
      '<path d="M19 8 Q26 2 32 7.5 L26 11 Z" fill="#0C7B74"/>' +
      '<circle cx="11" cy="13.5" r="2.4" fill="#FFFBF1"/>' +
      '<circle cx="11.4" cy="13.8" r="1.2" fill="#16384C"/>' +
      "</svg>",
    '<svg viewBox="0 0 64 34" aria-hidden="true">' +
      '<path class="fish__tail" d="M45 17 L61 7 Q56 17 61 27 Z" fill="#FF6F5E"/>' +
      '<ellipse cx="26" cy="17" rx="20" ry="11" fill="#13A89E"/>' +
      '<path d="M14 8.4 Q17 17 14 25.6 Q11 17 14 8.4 Z" fill="#FFF9EE" opacity="0.85"/>' +
      '<path d="M24 6.2 Q27 17 24 27.8 Q21 17 24 6.2 Z" fill="#FFF9EE" opacity="0.85"/>' +
      '<path d="M34 7.2 Q37 17 34 26.8 Q31 17 34 7.2 Z" fill="#FFF9EE" opacity="0.85"/>' +
      '<path d="M19 8 Q26 2 32 7.5 L26 11 Z" fill="#0C7B74"/>' +
      '<circle cx="10.5" cy="13.5" r="2.3" fill="#16384C"/>' +
      "</svg>",
    '<svg viewBox="0 0 64 34" aria-hidden="true">' +
      '<path class="fish__tail" d="M45 17 L61 7 Q56 17 61 27 Z" fill="#F5A623"/>' +
      '<ellipse cx="26" cy="17" rx="20" ry="11" fill="#FFC247"/>' +
      '<path d="M19 8 Q26 2 32 7.5 L26 11 Z" fill="#FF6F5E"/>' +
      '<path d="M22 26.5 Q29 31.5 36 25.5 L28 23.5 Z" fill="#FF6F5E"/>' +
      '<path d="M26 12 Q32 17 26 22 Q22 17 26 12 Z" fill="#F5A623" opacity="0.8"/>' +
      '<circle cx="11" cy="13.5" r="2.4" fill="#16384C"/>' +
      "</svg>"
  ];

  if (!reduceMotion) {
    document.querySelectorAll("[data-fish]").forEach(function (section) {
      var count = parseInt(section.getAttribute("data-fish"), 10) || 5;
      var pale = section.hasAttribute("data-fish-dark");
      var layer = document.createElement("div");
      layer.className = "fish-layer";
      layer.setAttribute("aria-hidden", "true");
      for (var i = 0; i < count; i++) {
        var f = document.createElement("span");
        f.className = "fish";
        var dur = 26 + Math.random() * 30;
        f.style.setProperty("--fs", (26 + Math.random() * 80).toFixed(0) + "px");
        f.style.setProperty("--bob", (3 + Math.random() * 3).toFixed(1) + "s");
        f.style.top = (5 + Math.random() * 85).toFixed(1) + "%";
        f.style.animationDuration = dur.toFixed(1) + "s";
        f.style.animationDelay = (-Math.random() * dur).toFixed(1) + "s";
        f.style.opacity = (pale ? 0.26 + Math.random() * 0.16 : 0.32 + Math.random() * 0.2).toFixed(2);
        if (Math.random() < 0.5) {
          f.classList.add("fish--flip");
        } else {
          f.style.animationDirection = "reverse";
        }
        // dart wrapper: startle/current offsets live here so they never
        // fight the crossing (on .fish) or the bob (on the svg)
        f.innerHTML = '<span class="fish__dart">' + FISH_SPECIES[(Math.random() * FISH_SPECIES.length) | 0] + "</span>";
        layer.appendChild(f);
      }
      section.prepend(layer);
    });
  }

  /* ---------- Fish react to the pointer and to scroll ---------- */
  var fishLayers = document.querySelectorAll(".fish-layer");
  var fishEls = document.querySelectorAll(".fish");

  function startleFish(fish, px, py, power) {
    var r = fish.getBoundingClientRect();
    if (!r.width) return; // hidden by the mobile shoal cap
    var cx = r.left + r.width / 2;
    var cy = r.top + r.height / 2;
    var dx = cx - px, dy = cy - py;
    var dist = Math.hypot(dx, dy);
    var radius = power > 1 ? 150 : 95;
    if (dist > radius) return;
    var proximity = (radius - dist) / radius;
    var mag = (30 + 70 * proximity) * power;
    var nx = dist ? dx / dist : Math.random() - 0.5;
    var ny = dist ? dy / dist : -0.6;
    var dart = fish.firstElementChild;
    if (!dart) return;
    dart.style.setProperty("--dx", (nx * mag).toFixed(0) + "px");
    dart.style.setProperty("--dy", (ny * mag * 0.7).toFixed(0) + "px");
    fish.classList.add("is-startled");
    clearTimeout(fish._calmT);
    fish._calmT = setTimeout(function () {
      dart.style.setProperty("--dx", "0px");
      dart.style.setProperty("--dy", "0px");
      fish.classList.remove("is-startled");
    }, 620);
  }

  if (fishEls.length && !reduceMotion) {
    var pmPending = false;
    document.addEventListener("pointermove", function (e) {
      if (pmPending) return;
      pmPending = true;
      var px = e.clientX, py = e.clientY;
      window.requestAnimationFrame(function () {
        pmPending = false;
        for (var i = 0; i < fishEls.length; i++) startleFish(fishEls[i], px, py, 1);
      });
    }, { passive: true });

    document.addEventListener("pointerdown", function (e) {
      for (var i = 0; i < fishEls.length; i++) startleFish(fishEls[i], e.clientX, e.clientY, 1.7);
    }, { passive: true });
  }

  /* scroll current: the shoal lags behind fast scrolling, then settles */
  var lastDriftY = window.scrollY;
  var driftIdleT;
  function updateFishDrift() {
    if (!fishLayers.length || reduceMotion) return;
    var y = window.scrollY;
    var v = y - lastDriftY;
    lastDriftY = y;
    var drift = Math.max(-30, Math.min(30, v * 0.5));
    for (var i = 0; i < fishLayers.length; i++) {
      fishLayers[i].style.setProperty("--drift", drift.toFixed(1) + "px");
    }
    clearTimeout(driftIdleT);
    driftIdleT = setTimeout(function () {
      for (var j = 0; j < fishLayers.length; j++) {
        fishLayers[j].style.setProperty("--drift", "0px");
      }
    }, 160);
  }
  window.addEventListener("scroll", updateFishDrift, { passive: true });

  /* ---------- Copy code blocks ---------- */
  document.querySelectorAll(".post-body pre").forEach(function (pre) {
    var btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.textContent = "Copy";
    btn.addEventListener("click", function () {
      var code = pre.querySelector("code") || pre;
      navigator.clipboard.writeText(code.textContent).then(function () {
        btn.textContent = "Copied!";
        setTimeout(function () { btn.textContent = "Copy"; }, 2000);
      });
    });
    pre.appendChild(btn);
  });

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
