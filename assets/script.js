/* ============================================================
   Raphael Alves — Portfólio | interações leves
   Cenas rotativas inspiradas na pegada visual das telas DHF
   ============================================================ */
(function () {
  "use strict";

  const root = document.documentElement;

  /* ---------- Cenas ---------- */
  const SCENES = [
    { id: "navy",   nome: "Navy Signal",   light: false },
    { id: "ozonio", nome: "Osciloscópio",  light: false },
    { id: "tekno",  nome: "Tekno Mint",    light: false },
    { id: "aurora", nome: "Aurora",        light: false },
    { id: "amber",  nome: "Amber Grid",    light: false },
    { id: "gelo",   nome: "Gelo",          light: true  }
  ];

  const sceneNum = document.getElementById("sceneNum");
  const sceneName = document.getElementById("sceneName");
  const sceneBtn = document.getElementById("sceneBtn");

  let indice = parseInt(localStorage.getItem("ra-scene") || "-1", 10);
  if (isNaN(indice)) indice = -1;

  function aplicarTema() {
    const escolha = localStorage.getItem("ra-theme"); // prioridade do usuário
    const tema = escolha || (SCENES[indice].light ? "light" : "dark");
    root.setAttribute("data-theme", tema);
    const use = document.getElementById("themeIcon");
    if (use) use.setAttribute("href", tema === "dark" ? "#ico-moon" : "#ico-sun");
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", tema === "dark" ? "#0b0f17" : "#f7f9fc");
  }

  function aplicarCena() {
    const cena = SCENES[indice];
    root.setAttribute("data-scene", cena.id);
    sceneNum.textContent = String(indice + 1).padStart(2, "0");
    sceneName.textContent = cena.nome;
    aplicarTema();
  }

  function proximaCena(manual) {
    indice = (indice + 1) % SCENES.length;
    localStorage.setItem("ra-scene", String(indice));
    aplicarCena();
    if (manual && sceneBtn) {
      sceneBtn.classList.remove("girar");
      void sceneBtn.offsetWidth; // reinicia a animação
      sceneBtn.classList.add("girar");
    }
  }

  proximaCena(false); // avança a cada entrada/recarregamento

  sceneBtn?.addEventListener("click", () => proximaCena(true));

  /* ---------- Tema manual ---------- */
  document.getElementById("themeToggle")?.addEventListener("click", () => {
    const proximo = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    localStorage.setItem("ra-theme", proximo);
    aplicarTema();
  });

  /* ---------- Menu mobile ---------- */
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  navToggle?.addEventListener("click", () => {
    const aberto = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(aberto));
  });
  navMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Barra de progresso e header ---------- */
  const header = document.querySelector(".site-header");
  const progresso = document.getElementById("scrollProgress");
  let ajustando = false;
  function aoRolar() {
    header?.classList.toggle("scrolled", window.scrollY > 12);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    if (progresso) progresso.style.width = pct.toFixed(2) + "%";
    ajustando = false;
  }
  aoRolar();
  window.addEventListener("scroll", () => {
    if (!ajustando) { ajustando = true; requestAnimationFrame(aoRolar); }
  }, { passive: true });
  window.addEventListener("resize", aoRolar);

  /* ---------- Reveal on scroll ---------- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = (entries.indexOf(entry) % 4) * 55 + "ms";
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("visible"));
  }

  /* ---------- Formulário de contato -> abre o app de e-mail ---------- */
  const form = document.getElementById("contatoForm");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = form.nome.value.trim();
    const mensagem = form.mensagem.value.trim();
    if (!nome || !mensagem) return;
    const assunto = encodeURIComponent("Contato via portfólio — " + nome);
    const corpo = encodeURIComponent("Olá, Raphael!\n\n" + mensagem + "\n\n— " + nome);
    window.location.href = "mailto:rapha.faalves@gmail.com?subject=" + assunto + "&body=" + corpo;
  });

  /* ---------- Ano no rodapé ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
