export default function galleryTabsToggle() {
  const buttons = document.querySelectorAll(".s-gallery__tab-btn");

  if (buttons.length) {
    const bar = document.querySelector(".s-gallery__tabs-bar");

    buttons.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        const transformWidth = i * btn.clientWidth;
        bar.style.transform = `translateX(${transformWidth}px)`;
      });
    });

    window.addEventListener("resize", () => {
      const buttons = document.querySelectorAll(".s-gallery__tab-btn");
      const index = Array.from(buttons).findIndex((b) =>
        b.classList.contains("_active")
      );
      const transformWidth =
        index *
        document.querySelector(".s-gallery__tab-btn._active").clientWidth;

      bar.style.transform = `translateX(${transformWidth}px)`;
    });
  }
}
