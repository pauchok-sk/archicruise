export default function partnersLogo() {
  const icon = document.querySelector(".s-partners__logo");

  const maxX = 25;
  let maxY = 10;

  function animateIcon() {
    maxY = maxY * -1
    anime({
      targets: icon,
      // translateX: () => (Math.random() - 0.5) * 2 * maxX,
      translateY: () => maxY,
      duration: 2000,
      rotate: () => (Math.random() - 0.5) * 10,
      easing: "easeInOutQuad",
      complete: animateIcon,
    });
  }

  // Пауза при наведении
  // icon.addEventListener("mouseenter", () => anime.remove(icon));
  // icon.addEventListener("mouseleave", animateIcon);

  animateIcon();
}