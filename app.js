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
  x: -200,
});

gsap.to(".right-door", {
  scrollTrigger: {
    scrub: 1,
    start: "top top",
    end: "400px",
  },
  x: 400,
});

gsap.to(".logo", {
  scrollTrigger: {
    scrub: 1,
  },
  scale: 4,
});
gsap.to(".logo-text", {
  scrollTrigger: {
    scrub: 1,
  },
  fontSize: "96px",
  y: 60,
});
