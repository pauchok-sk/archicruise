export default function conditionsSpoller() {
  const items = document.querySelectorAll(".s-conditions__item")

  if (items.length && window.matchMedia("(max-width: 991px)")) {
    items.forEach(item => {
      item.addEventListener("click", () => {
        if (item.classList.contains("_active")) {
          item.classList.remove("_active");
        } else {
          item.classList.add("_active");
        }
      })
    })
  }
}