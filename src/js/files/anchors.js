export default function anchors() {
  const burger = document.querySelector("#burger");
  const burgerBtn = document.querySelector("#burger-btn");
  const anchors = document.querySelectorAll(".anchor");

  if (anchors.length) {
    anchors.forEach((anchor) => {
      const link = anchor.querySelector("a");
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href").substring(1);
        const scrollTarget = document.getElementById(href);

        if (scrollTarget) {
          window.scrollBy({
            top: scrollTarget.getBoundingClientRect().top,
            behavior: "smooth",
          });

          handlerBurgerClose();
        }
      });

      function handlerBurgerClose() {
        burger.classList.remove("_open");
        burgerBtn.classList.remove("_active");
        document.body.classList.remove("body-hidden");
      }
    });
  }
}
