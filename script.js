document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* Hero video: load only on click so the homepage stays light */
const heroVideoWrap = document.querySelector(".hero-video[data-video-src]");
if (heroVideoWrap) {
  const video = heroVideoWrap.querySelector(".hero-video-el");
  const playBtn = heroVideoWrap.querySelector(".hero-video-play");
  const src = heroVideoWrap.getAttribute("data-video-src");

  const startHeroVideo = () => {
    if (!video || !src) return;
    if (!video.getAttribute("src")) {
      video.src = src;
      video.load();
    }
    heroVideoWrap.classList.add("is-playing");
    video.play().catch(() => {});
  };

  playBtn?.addEventListener("click", startHeroVideo);
  video?.addEventListener("ended", () => {
    heroVideoWrap.classList.remove("is-playing");
  });
}
