import "../scss/style.scss";
import anchors from "./files/anchors.js";
import awardScroll from "./files/awardScroll.js";
import burger from "./files/burger.js";
import burgerList from "./files/burgerList.js";
import conditionsSpoller from "./files/conditionsSpoller.js";
import copy from "./files/copy.js";
import cursor from "./files/cursor.js";
import galleryTabsToggle from "./files/galleryTabsToggle.js";
import headerScroll from "./files/headerScroll.js";
import inputmask from "./files/inputmask.js";
import mediaAdaptive from "./files/mediaAdaptive.js";
import partnersLogo from "./files/partnersLogo.js";
import select from "./files/select.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";
import tabs from "./files/tabs.js";
import updateIntroHeight from "./files/updateIntroHeight.js";
import videoBg from "./files/videoBg.js";

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
// cursor();
conditionsSpoller();
videoBg();
anchors();
headerScroll();
galleryTabsToggle();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

// Fancybox.show([{ src: "#modal-thank", type: "inline" }]);
