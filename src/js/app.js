import "../scss/style.scss";
import burger from "./files/burger.js";
import burgerList from "./files/burgerList.js";
import spoller from "./files/spoller.js";

spoller();
burgerList();
burger();

Fancybox.bind("[data-fancybox]");

Fancybox.show([{ src: "#modal-reg", type: "inline" }]);
