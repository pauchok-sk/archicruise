export default function burger() {
  const burger = document.querySelector("#burger");

  if (burger) {
    const burgerBtn = document.querySelector("#burger-btn");
    const header = document.querySelector(".header");

    document.body.addEventListener("click", handleClose);
    burger.addEventListener("click", (e) => e.stopPropagation());

    burgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (burgerBtn.classList.contains("_active")) {
        handleClose();
      } else {
        handleOpen();
      }
    });

    function handleOpen() {
      burger.classList.add("_open");
      burgerBtn.classList.add("_active");
      header.classList.add("_bg");
      document.body.classList.add("body-hidden");
      burger.style.top = `${header.clientHeight}px`;
    }
    function handleClose() {
      burger.classList.remove("_open");
      burgerBtn.classList.remove("_active");
      document.body.classList.remove("body-hidden");
      header.classList.remove("_bg");
    }
  }
}
