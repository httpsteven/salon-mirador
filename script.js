/* ============================================================
   Salón Mirador — script.js
   Nav · scroll reveal · lightbox · form validation
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Sticky header state ---------- */
  const header = document.getElementById("siteHeader");
  const setHeader = () => header.classList.toggle("scrolled", window.scrollY > 40);
  setHeader();
  window.addEventListener("scroll", setHeader, { passive: true });

  /* ---------- Mobile nav ---------- */
  const toggle = document.getElementById("navToggle");
  const nav = document.querySelector(".nav");
  const closeNav = () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú");
  };
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  });
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeNav();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const siblings = Array.from(entry.target.parentElement.children).filter((el) =>
              el.classList.contains("reveal")
            );
            const idx = siblings.indexOf(entry.target);
            entry.target.style.transitionDelay = Math.min(idx, 5) * 80 + "ms";
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* ---------- Lightbox gallery ---------- */
  const items = Array.from(document.querySelectorAll(".gal-item"));
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbCaption = document.getElementById("lbCaption");
  let current = 0;
  let lastFocused = null;

  const show = (i) => {
    current = (i + items.length) % items.length;
    const btn = items[current];
    lbImg.src = btn.dataset.src;
    lbImg.alt = btn.querySelector("img").alt;
    lbCaption.textContent = btn.dataset.caption || "";
  };
  const openLb = (i) => {
    lastFocused = document.activeElement;
    show(i);
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.getElementById("lbClose").focus();
  };
  const closeLb = () => {
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  };

  items.forEach((btn, i) => btn.addEventListener("click", () => openLb(i)));
  document.getElementById("lbClose").addEventListener("click", closeLb);
  document.getElementById("lbNext").addEventListener("click", () => show(current + 1));
  document.getElementById("lbPrev").addEventListener("click", () => show(current - 1));
  lb.addEventListener("click", (e) => {
    if (e.target === lb) closeLb();
  });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowRight") show(current + 1);
    if (e.key === "ArrowLeft") show(current - 1);
  });

  /* ---------- Contact form ---------- */
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  const showError = (field, msg) => {
    const wrap = field.closest(".field");
    wrap.classList.add("invalid");
    const err = wrap.querySelector(".err");
    if (err) err.textContent = msg;
  };
  const clearError = (field) => {
    const wrap = field.closest(".field");
    wrap.classList.remove("invalid");
    const err = wrap.querySelector(".err");
    if (err) err.textContent = "";
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    feedback.textContent = "";
    let ok = true;

    const nombre = form.nombre;
    if (!nombre.value.trim()) {
      showError(nombre, "Por favor escribe tu nombre.");
      ok = false;
    } else {
      clearError(nombre);
    }

    const inv = form.invitados;
    if (inv.value && (Number(inv.value) < 1 || Number(inv.value) > 300)) {
      showError(inv, "El salón recibe de 1 a 300 invitados.");
      ok = false;
    } else {
      clearError(inv);
    }

    if (!ok) {
      form.querySelector(".invalid input")?.focus();
      return;
    }

    // Build a mailto with all the details prefilled.
    const data = {
      Nombre: form.nombre.value.trim(),
      "Fecha del evento": form.fecha.value || "Por definir",
      "Tipo de evento": form.tipo.value,
      "Número de invitados": form.invitados.value || "Por definir",
      Teléfono: form.tel.value || "No proporcionado",
    };
    let body = "Hola, me gustaría solicitar información para un evento en Salón Mirador.%0D%0A%0D%0A";
    Object.entries(data).forEach(([k, v]) => {
      body += `${k}: ${v}%0D%0A`;
    });
    if (form.mensaje.value.trim()) {
      body += `%0D%0AMensaje:%0D%0A${encodeURIComponent(form.mensaje.value.trim())}`;
    }
    const subject = encodeURIComponent(`Solicitud de evento — ${form.tipo.value}`);
    const mailto = `mailto:contacto@salonmirador.mx?subject=${subject}&body=${body}`;

    window.location.href = mailto;
    feedback.textContent = "¡Gracias! Se abrió tu correo con la solicitud. Si prefieres, escríbenos por WhatsApp para una respuesta más rápida.";
    form.reset();
  });

  // Clear errors as the user types
  form.querySelectorAll("input, select, textarea").forEach((el) => {
    el.addEventListener("input", () => clearError(el));
  });

  /* ---------- Hero video: respect reduced motion + save battery ---------- */
  const heroVideo = document.querySelector(".hero-video");
  if (heroVideo) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyMotionPref = () => {
      if (reduce.matches) {
        heroVideo.pause();
        heroVideo.removeAttribute("autoplay");
      } else if (heroVideo.paused) {
        heroVideo.play().catch(() => {});
      }
    };
    applyMotionPref();
    reduce.addEventListener("change", applyMotionPref);

    // Pause the video while the hero is scrolled out of view.
    if ("IntersectionObserver" in window) {
      const vObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (reduce.matches) return;
            if (entry.isIntersecting) heroVideo.play().catch(() => {});
            else heroVideo.pause();
          });
        },
        { threshold: 0.1 }
      );
      vObs.observe(heroVideo);
    }
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
