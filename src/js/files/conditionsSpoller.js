export default function conditionsSpoller() {
  const items = document.querySelectorAll(".s-conditions__item");

  if (items.length && window.matchMedia("(max-width: 991px)")) {
    items.forEach((item) => {
      item.addEventListener("click", () => {
        const content = item.querySelector(".s-conditions__item-content");

        if (item.classList.contains("_active")) {
          content.style.opacity = "0";
          
          setTimeout(() => {
            item.classList.remove("_active");
          }, 100);
        } else {
          item.classList.add("_active");
          
          setTimeout(() => {
            content.style.opacity = "1";
          }, 100);
        }
      });
    });
  }
}
