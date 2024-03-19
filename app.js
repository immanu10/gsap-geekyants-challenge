// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
});

// gsap code here!
gsap.to(".left-door", {
  scrollTrigger: {
    scrub: 1,
    start: "top top",
    end: "400px",
  },
  x: -700,
});

gsap.to(".right-door", {
  scrollTrigger: {
    scrub: 1,
    start: "top top",
    end: "400px",
  },
  x: 700,
});

gsap.to(".logo", {
  scrollTrigger: {
    scrub: 1,
  },
  scale: 4,
  y: 300,
});

gsap.to(".logo-text", {
  scrollTrigger: {
    scrub: 1,
  },
  fontSize: "8vw",
  y: 400,
});

gsap.to("#bg-desk", {
  scrollTrigger: {
    scrub: 1,
  },
  scale: 1.35,
});
