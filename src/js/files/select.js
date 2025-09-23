export default function select() {
  const buttons = document.querySelectorAll(".select-btn");

  if (buttons.length) {
    const selects = document.querySelectorAll(".select");

    selects.forEach((select) => {
      select.addEventListener("click", (e) => e.stopPropagation());
    });

    document.body.addEventListener("click", () => {
      const select = document.querySelector(".select._open");
      select?.classList.remove("_open");
    });

    selects.forEach((select) => {
      const input = select.querySelector(".select-input");
      const items = select.querySelectorAll(".select-item");

      items.forEach((item) => {
        item.addEventListener("click", () => {
          items.forEach((i) => i.classList.remove("_active"));

          input.value = item.textContent;
          item.classList.add("_active");

          handleClose(select);
        });
      });
    });

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const select = btn.closest(".select");

        
        if (select.classList.contains("_open")) {
          handleClose(select);
        } else {
          selects.forEach((s) => s.classList.remove("_open"));
          handleOpen(select);
        }
      });
    });

    function handleOpen(select) {
      select.classList.add("_open");
    }
    function handleClose(select) {
      select.classList.remove("_open");
    }
  }
}
