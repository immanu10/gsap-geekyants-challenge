document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
});

gsap.to(".left-door", {
  scrollTrigger: {
    scrub: 1,
    start: "top top",
    end: "400px",
  },
  x: -500,
});

gsap.to(".right-door", {
  scrollTrigger: {
    scrub: 1,
    start: "top top",
    end: "400px",
  },
  x: 500,
});

gsap.to(".logo", {
  scrollTrigger: {
    scrub: 1,
  },
  scale: 4,
  y: 200,
});

gsap.to(".logo-text", {
  scrollTrigger: {
    scrub: 1,
  },
  fontSize: "8vw",
  y: 300,
});

gsap.to("#bg-desk", {
  scrollTrigger: {
    scrub: 1,
    start: "100px",
  },
  scale: 2,
});
