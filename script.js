/* =========================================================
   Roobinity — site data & behaviour
   ========================================================= */

// ---- 0. LANGUAGE SETUP --------------------------------------------------
// The current language is read once per page load (persisted in
// localStorage). Switching languages triggers a full reload (see section
// 10), so everything below just needs to render correctly for whichever
// language is active right now — no "live re-translate" logic needed.
const currentLang = localStorage.getItem("roobinity-lang") || "en";

// ---- 1. TRANSLATIONS -----------------------------------------------------
// All static site text lives here. Game names/descriptions are translated
// separately, in the GAMES array below (each game has its own en/fa text).
const I18N = {
  en: {
    "pageTitle": "Roobinity — Indie Game Studio",
    "pageDescription": "Roobinity is an indie game studio. Browse and download our mobile and PC games.",
    "nav.games": "Games",
    "nav.about": "About",
    "nav.contact": "Contact",
    "langToggle.label": "Switch language",
    "hero.eyebrow": "Indie Game Studio",
    "hero.line1": "We make games",
    "hero.line2": "that are actually",
    "hero.line3": "worth playing.",
    "hero.sub": "Roobinity is a small studio building games for phones and computers — every one designed, built and shipped because we love making them.",
    "hero.cta1": "See the games",
    "hero.cta2": "About the studio",
    "hero.scrollLabel": "Scroll to games",
    "games.eyebrow": "Play something",
    "games.title": "Our games",
    "games.empty": "No games in this category yet.",
    "games.download": "Download",
    "tabs.all": "All",
    "tabs.mobile": "Mobile",
    "tabs.pc": "PC",
    "carousel.prev": "Previous image",
    "carousel.next": "Next image",
    "carousel.dot": "Show image {n} of {total}",
    "about.eyebrow": "Who we are",
    "about.title": "A one-person studio, learning something new with every game.",
    "about.p1": "Roobinity didn't start with a clear plan or the right experience — a lot of it was figured out along the way, through mistakes, restarts, and a fair amount of trial and error.",
    "about.p2": "Everything on this page is here to show what Roobinity has actually built — have a look through it and judge for yourself.",
    "contact.eyebrow": "Get in touch",
    "contact.title": "Contact us",
    "contact.text": "Questions, feedback, or just want to say hi? Send us an email — we read everything.",
    "footer.note": "Built and hosted with care.",
    "footer.backToTop": "Back to top"
  },
  fa: {
    "pageTitle": "روبینیتی — استودیوی بازی‌سازی مستقل",
    "pageDescription": "روبینیتی یه استودیوی بازی‌سازی مستقله. بازی‌های موبایل و کامپیوترمون رو ببین و دانلود کن.",
    "nav.games": "بازی‌ها",
    "nav.about": "درباره",
    "nav.contact": "تماس",
    "langToggle.label": "تغییر زبان",
    "hero.eyebrow": "استودیوی بازی‌سازی مستقل",
    "hero.line1": "بازی‌هایی می‌سازیم",
    "hero.line2": "که واقعاً",
    "hero.line3": "ارزش بازی کردن دارن.",
    "hero.sub": "روبینیتی یه استودیوی کوچیکه که برای گوشی و کامپیوتر بازی می‌سازه — هرکدوم طراحی، ساخته و منتشر شده چون عاشق ساختنشونیم.",
    "hero.cta1": "بازی‌ها رو ببین",
    "hero.cta2": "درباره‌ی استودیو",
    "hero.scrollLabel": "اسکرول به بازی‌ها",
    "games.eyebrow": "یه چیزی بازی کن",
    "games.title": "بازی‌های ما",
    "games.empty": "هنوز بازی‌ای توی این دسته نیست.",
    "games.download": "دانلود",
    "tabs.all": "همه",
    "tabs.mobile": "موبایل",
    "tabs.pc": "کامپیوتر",
    "carousel.prev": "عکس قبلی",
    "carousel.next": "عکس بعدی",
    "carousel.dot": "نمایش عکس {n} از {total}",
    "about.eyebrow": "ما کی هستیم",
    "about.title": "استودیویی تک‌نفره، که با هر بازی چیز جدیدی یاد می‌گیره.",
    "about.p1": "روبینیتی با یه برنامه‌ی مشخص یا تجربه‌ی کافی شروع نشد — خیلی از چیزهاش توی مسیر و از دل اشتباه، شروع دوباره، و کلی آزمون‌وخطا فهمیده شد.",
    "about.p2": "هرچی توی این صفحه‌ست، اینجاست تا نشون بده روبینیتی واقعاً چی ساخته — یه نگاهی بهش بنداز و خودت قضاوت کن.",
    "contact.eyebrow": "باهامون در ارتباط باش",
    "contact.title": "با ما تماس بگیر",
    "contact.text": "سوال، نظر، یا فقط می‌خوای سلام کنی؟ برامون ایمیل بفرست — همه‌چیز رو می‌خونیم.",
    "footer.note": "با دقت ساخته و هاست شده.",
    "footer.backToTop": "برگشت به بالا"
  }
};

function t(key){
  return (I18N[currentLang] && I18N[currentLang][key]) || (I18N.en[key]) || key;
}

// ---- 2. GAME DATA -----------------------------------------------------
// Add / edit / remove your games here. Nothing else needs to change.
// platform: "mobile" or "pc"
// name / desc: write BOTH languages — { en: "...", fa: "..." }
// images:  an array of screenshot paths, e.g. ["assets/games/g1-1.png", "assets/games/g1-2.png"].
//          You can list as many as you want — arrows + dots appear automatically.
//          Leave the array empty ([]) to show a single auto-generated placeholder tile.
// download: direct link to the file (a GitHub Releases asset URL works great).
const GAMES = [
  {
    name: {
      en: "SPS",
      fa: "سنگ کاغد قیچی"
    },
    platform: "mobile",
    desc: {
      en: "A bigger, better take on rock-paper-scissors, with more features and more fun.",
      fa: "بازی سنگ کاغ قیچی با امکانات بیشتر و جذاب تر"
    },
    images: [
      "assets/games/SPS.png",
      "assets/games/SPS1.png",
      "assets/games/SPS2.png"
    ],
    download: "#"
  }
];

// (Note: the English name/desc above is a placeholder translation of your
// Persian text — feel free to rewrite it yourself.)

function localized(field){
  return (field && (field[currentLang] || field.en || field.fa)) || "";
}

// ---- 3. RENDER GAME CARDS ----------------------------------------------
const grid = document.getElementById("gameGrid");

function cardSlides(game){
  if (!game.images || !game.images.length){
    const letter = localized(game.name).trim().charAt(0).toUpperCase() || "?";
    return `<div class="game-card__slides"><div class="game-card__slide"><div class="game-card__placeholder" aria-hidden="true">${letter}</div></div></div>`;
  }
  const name = localized(game.name);
  const slides = game.images.map(src => `
    <div class="game-card__slide">
      <img src="${src}" alt="${name} screenshot" loading="lazy">
    </div>
  `).join("");
  return `<div class="game-card__slides">${slides}</div>`;
}

function carouselControls(game){
  const count = game.images && game.images.length ? game.images.length : 1;
  if (count <= 1) return "";
  const dots = Array.from({ length: count }).map((_, i) => {
    const label = t("carousel.dot").replace("{n}", i + 1).replace("{total}", count);
    return `<button class="carousel__dot${i === 0 ? " is-active" : ""}" data-slide="${i}" aria-label="${label}"></button>`;
  }).join("");
  return `
    <button class="carousel__arrow carousel__arrow--prev" aria-label="${t('carousel.prev')}">‹</button>
    <button class="carousel__arrow carousel__arrow--next" aria-label="${t('carousel.next')}">›</button>
    <div class="carousel__dots">${dots}</div>
  `;
}

function renderGames(filter){
  const list = filter === "all" ? GAMES : GAMES.filter(g => g.platform === filter);

  if (!list.length){
    grid.innerHTML = `<p class="empty-note">${t("games.empty")}</p>`;
    return;
  }

  grid.classList.remove("is-filtering");
  // Force reflow so the entrance animation can re-trigger on filter change.
  void grid.offsetWidth;
  grid.classList.add("is-filtering");

  grid.innerHTML = list.map(game => `
    <article class="game-card">
      <div class="game-card__media">
        ${cardSlides(game)}
        ${carouselControls(game)}
      </div>
      <div class="game-card__body">
        <span class="game-card__tag game-card__tag--${game.platform}">${game.platform === "mobile" ? t("tabs.mobile") : t("tabs.pc")}</span>
        <h3 class="game-card__title">${localized(game.name)}</h3>
        <p class="game-card__desc">${localized(game.desc)}</p>
        <a class="game-card__download" href="${game.download}" download>${t("games.download")} ↓</a>
      </div>
    </article>
  `).join("");

  initCarousels();
}

// ---- 3b. CAROUSEL BEHAVIOUR --------------------------------------------
// Each card gets its own independent slide index, stored on the element.
function initCarousels(){
  grid.querySelectorAll(".game-card__media").forEach(media => {
    const track = media.querySelector(".game-card__slides");
    const dots = media.querySelectorAll(".carousel__dot");
    const prev = media.querySelector(".carousel__arrow--prev");
    const next = media.querySelector(".carousel__arrow--next");
    const total = dots.length || 1;
    let index = 0;

    function goTo(i){
      index = (i + total) % total;
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, di) => dot.classList.toggle("is-active", di === index));
    }

    if (prev) prev.addEventListener("click", () => goTo(index - 1));
    if (next) next.addEventListener("click", () => goTo(index + 1));
    dots.forEach((dot, di) => dot.addEventListener("click", () => goTo(di)));
  });
}

renderGames("all");

// ---- 4. TAB FILTERING ---------------------------------------------------
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => { t.classList.remove("is-active"); t.setAttribute("aria-selected", "false"); });
    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");
    renderGames(tab.dataset.filter);
  });
});

// ---- 5. SCROLL-REVEAL ANIMATION -----------------------------------------
const revealTargets = document.querySelectorAll("[data-reveal]");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

revealTargets.forEach(el => revealObserver.observe(el));

// ---- 6. HERO ENTRANCE (staggered on load) -------------------------------
window.addEventListener("DOMContentLoaded", () => {
  const heroLines = document.querySelectorAll(".hero [data-reveal]");
  heroLines.forEach((el, i) => {
    setTimeout(() => el.classList.add("is-visible"), 120 * i);
  });
});

// ---- 7. NAV HIDE-ON-SCROLL-DOWN ------------------------------------------
const nav = document.getElementById("nav");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const current = window.scrollY;
  if (current > lastScroll && current > 140){
    nav.classList.add("nav--hidden");
  } else {
    nav.classList.remove("nav--hidden");
  }
  lastScroll = current;
}, { passive: true });

// ---- 8. BACK TO TOP -------------------------------------------------------
document.getElementById("toTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---- 9. FOOTER YEAR ---------------------------------------------------
document.getElementById("year").textContent = new Date().getFullYear();

// ---- 10. TAP-TO-REVEAL CAROUSEL CONTROLS ---------------------------------
// Mirrors the "tap the image to show arrows/dots" feel, but driven by our
// own code instead of relying on each browser's hover-emulation quirks —
// so it behaves the same on every phone and every browser (including
// in-app browsers like Instagram/Telegram, where hover-emulation can be
// unreliable).
document.addEventListener("click", (e) => {
  const tappedMedia = e.target.closest(".game-card__media");

  document.querySelectorAll(".game-card__media.is-tapped").forEach(media => {
    if (media !== tappedMedia) media.classList.remove("is-tapped");
  });

  if (tappedMedia) tappedMedia.classList.add("is-tapped");
});

// ---- 11. STATIC TEXT TRANSLATION ----------------------------------------
// Applies I18N strings to every element marked with data-i18n (text
// content) or data-i18n-aria (aria-label), plus the page title/description.
document.querySelectorAll("[data-i18n]").forEach(el => {
  el.textContent = t(el.getAttribute("data-i18n"));
});
document.querySelectorAll("[data-i18n-aria]").forEach(el => {
  el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
});
document.title = t("pageTitle");
const descMeta = document.querySelector('meta[name="description"]');
if (descMeta) descMeta.setAttribute("content", t("pageDescription"));

// ---- 12. LANGUAGE TOGGLE --------------------------------------------------
const langToggle = document.getElementById("langToggle");
langToggle.setAttribute("data-active", currentLang);

langToggle.addEventListener("click", () => {
  const nextLang = currentLang === "en" ? "fa" : "en";
  localStorage.setItem("roobinity-lang", nextLang);
  langToggle.setAttribute("data-active", nextLang);
  // Let the thumb-slide animation play before the page reloads — the
  // reload is what replays the hero entrance animation in the new
  // language, and resets the whole layout direction cleanly.
  setTimeout(() => {
    window.location.reload();
  }, 380);
});