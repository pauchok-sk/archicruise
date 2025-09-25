import "../scss/style.scss";
import awardScroll from "./files/awardScroll.js";
import burger from "./files/burger.js";
import burgerList from "./files/burgerList.js";
import copy from "./files/copy.js";
import cursor from "./files/cursor.js";
import inputmask from "./files/inputmask.js";
import mediaAdaptive from "./files/mediaAdaptive.js";
import partnersLogo from "./files/partnersLogo.js";
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
copy();
mediaAdaptive();
partnersLogo();
cursor();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

// Fancybox.show([{ src: "#modal-thank", type: "inline" }]);
