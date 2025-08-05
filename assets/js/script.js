---
layout: null
---

{% include_relative bootstrap.bundle.min.js %}

// Cards animadas en scroll
// gsap.utils.toArray(".post-card").forEach((card, i) => {
//   gsap.from(card, {
//     opacity: 0,
//     y: 50,
//     duration: 0.9,
//     delay: i * 0.35,
//     scrollTrigger: {
//       trigger: card,
//       start: "top 85%",
//     }
//   });
// });

// // Botones que respiran
// gsap.utils.toArray(".breathing-btn").forEach(btn => {
//   gsap.to(btn, {
//     scale: 1.10,
//     repeat: -1,
//     yoyo: true,
//     ease: "power1.inOut",
//     duration: 1.9
//   });
// });