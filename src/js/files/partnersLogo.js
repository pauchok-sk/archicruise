export default function partnersLogo() {
  const icon = document.querySelector(".s-partners__logo");

  const maxX = 25;
  const maxY = 25;

  function animateIcon() {
    anime({
      targets: icon,
      translateX: () => (Math.random() - 0.5) * 2 * maxX,
      translateY: () => (Math.random() - 0.5) * 2 * maxY,
      duration: 4000,
      rotate: () => (Math.random() - 0.5) * 20,
      easing: "easeInOutQuad",
      complete: animateIcon,
    });
  }

  // Пауза при наведении
  icon.addEventListener("mouseenter", () => anime.remove(icon));
  icon.addEventListener("mouseleave", animateIcon);

  animateIcon();
}