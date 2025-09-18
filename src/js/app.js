import "../scss/style.scss";
import burger from "./files/burger.js";
import burgerList from "./files/burgerList.js";
import inputmask from "./files/inputmask.js";
import spoller from "./files/spoller.js";

spoller();
burgerList();
burger();
inputmask();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

// Fancybox.show([{ src: "#modal-reg", type: "inline" }]);
