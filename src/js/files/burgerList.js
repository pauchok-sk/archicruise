import { hide, toggle } from "./helpFunctions.js";

export default function burgerList() {
  const burger = document.querySelector("#burger");
  const lists = burger.querySelectorAll(".sub-menu");

  const itemsParent = burger.querySelectorAll(".menu-item-has-children");

  itemsParent.forEach((item) => {
    const btn = item.querySelector("span");
    const menu = item.querySelector(".sub-menu");

    btn.addEventListener("click", () => {
      toggle(menu);

      btn.classList.toggle("_active");
    });
  });

  if (burger && lists.length) {
    lists.forEach((list) => {
      hide(list);
    });
  }
}
