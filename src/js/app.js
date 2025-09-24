import "../scss/style.scss";
import awardScroll from "./files/awardScroll.js";
import burger from "./files/burger.js";
import burgerList from "./files/burgerList.js";
import inputmask from "./files/inputmask.js";
import select from "./files/select.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";
import tabs from "./files/tabs.js";
import updateIntroHeight from "./files/updateIntroHeight.js";

spoller();
burgerList();
burger();
inputmask();
updateIntroHeight();
select();
sliders();
tabs();
awardScroll();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

// Fancybox.show([{ src: "#modal-thank", type: "inline" }]);
