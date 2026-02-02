// Simple fade-in animation
document.querySelectorAll(".hero-left, .hero-right").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";

  setTimeout(() => {
    el.style.transition = "1.2s ease";
    el.style.opacity = 1;
    el.style.transform = "translateY(0)";
  }, 300);
});
