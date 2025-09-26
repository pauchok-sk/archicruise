(() => {
    "use strict";
    function awardScroll() {
        const items = document.querySelectorAll(".s-award__adv-item");
        if (items.length && window.matchMedia("(max-width: 991px)").matches) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("_active");
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 1
            });
            items.forEach(item => {
                observer.observe(item);
            });
        }
    }
    function burger() {
        const burger = document.querySelector("#burger");
        if (burger) {
            const burgerBtn = document.querySelector("#burger-btn");
            const header = document.querySelector(".header");
            header.addEventListener("click", handleClose);
            burgerBtn.addEventListener("click", e => {
                e.stopPropagation();
                if (burgerBtn.classList.contains("_active")) handleClose(); else handleOpen();
            });
            function handleOpen() {
                burger.classList.add("_open");
                burgerBtn.classList.add("_active");
                document.body.classList.add("body-hidden");
                burger.style.top = `${header.clientHeight}px`;
            }
            function handleClose() {
                burger.classList.remove("_open");
                burgerBtn.classList.remove("_active");
                document.body.classList.remove("body-hidden");
            }
        }
    }
    function hide(target, duration = 500, showmore = 0) {
        if (!target.classList.contains("_slide")) {
            target.classList.add("_slide");
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + "ms";
            target.style.height = `${target.offsetHeight}px`;
            target.offsetHeight;
            target.style.overflow = "hidden";
            target.style.height = showmore ? `${showmore}px` : `0px`;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            window.setTimeout(() => {
                target.hidden = !showmore ? true : false;
                !showmore ? target.style.removeProperty("height") : null;
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                !showmore ? target.style.removeProperty("overflow") : null;
                target.style.removeProperty("transition-duration");
                target.style.removeProperty("transition-property");
                target.classList.remove("_slide");
                document.dispatchEvent(new CustomEvent("slideUpDone", {
                    detail: {
                        target
                    }
                }));
            }, duration);
        }
    }
    function show(target, duration = 500, showmore = 0) {
        if (!target.classList.contains("_slide")) {
            target.classList.add("_slide");
            target.hidden = target.hidden ? false : null;
            showmore ? target.style.removeProperty("height") : null;
            let height = target.offsetHeight;
            target.style.overflow = "hidden";
            target.style.height = showmore ? `${showmore}px` : `0px`;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            target.offsetHeight;
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + "ms";
            target.style.height = height + "px";
            target.style.removeProperty("padding-top");
            target.style.removeProperty("padding-bottom");
            target.style.removeProperty("margin-top");
            target.style.removeProperty("margin-bottom");
            window.setTimeout(() => {
                target.style.removeProperty("height");
                target.style.removeProperty("overflow");
                target.style.removeProperty("transition-duration");
                target.style.removeProperty("transition-property");
                target.classList.remove("_slide");
                document.dispatchEvent(new CustomEvent("slideDownDone", {
                    detail: {
                        target
                    }
                }));
            }, duration);
        }
    }
    function toggle(target, duration = 500) {
        if (target.hidden) return show(target, duration); else return hide(target, duration);
    }
    function burgerList() {
        const burger = document.querySelector("#burger");
        const lists = burger.querySelectorAll(".sub-menu");
        const itemsParent = burger.querySelectorAll(".menu-item-has-children");
        itemsParent.forEach(item => {
            const btn = item.querySelector("span");
            const menu = item.querySelector(".sub-menu");
            btn.addEventListener("click", () => {
                toggle(menu);
                btn.classList.toggle("_active");
            });
        });
        if (burger && lists.length) lists.forEach(list => {
            hide(list);
        });
    }
    function conditionsSpoller() {
        const items = document.querySelectorAll(".s-conditions__item");
        if (items.length && window.matchMedia("(max-width: 991px)")) items.forEach(item => {
            item.addEventListener("click", () => {
                if (item.classList.contains("_active")) item.classList.remove("_active"); else item.classList.add("_active");
            });
        });
    }
    function copy() {
        const buttons = document.querySelectorAll("[data-copy]");
        if (buttons.length) buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                const value = btn.dataset.copy;
                navigator.clipboard.writeText(value);
                btn.classList.add("_active");
                setTimeout(() => btn.classList.remove("_active"), 2e3);
            });
        });
    }
    class FloatingCursor {
        constructor() {
            this.cursor = document.querySelector(".custom-cursor");
            this.mouseX = 0;
            this.mouseY = 0;
            this.cursorX = 0;
            this.cursorY = 0;
            this.cursorSpeed = .06;
            this.init();
        }
        init() {
            document.addEventListener("mousemove", e => {
                this.mouseX = e.clientX;
                this.mouseY = e.clientY;
            });
            this.addHoverEffects();
            this.animate();
        }
        animate() {
            this.cursorX += (this.mouseX - this.cursorX) * this.cursorSpeed;
            this.cursorY += (this.mouseY - this.cursorY) * this.cursorSpeed;
            this.cursor.style.left = this.cursorX + "px";
            this.cursor.style.top = this.cursorY + "px";
            requestAnimationFrame(() => this.animate());
        }
        addHoverEffects() {
            const interactiveElements = document.querySelectorAll(".interactive, .card, button, a");
            interactiveElements.forEach(element => {
                element.addEventListener("mouseenter", () => {
                    this.cursor.classList.add("cursor-hover");
                });
                element.addEventListener("mouseleave", () => {
                    this.cursor.classList.remove("cursor-hover");
                });
            });
            document.addEventListener("mousedown", () => {
                this.cursor.style.transform = "scale(0.6)";
            });
            document.addEventListener("mouseup", () => {
                this.cursor.style.transform = "";
            });
        }
    }
    function cursor() {
        document.addEventListener("DOMContentLoaded", () => {
            new FloatingCursor;
        });
    }
    function inputmask() {
        const inputs = document.querySelectorAll('input[type="tel"]');
        const im = new Inputmask("+7 (999) 999-99-99");
        im.mask(inputs);
    }
    function mediaAdaptive() {
        function DynamicAdapt(type) {
            this.type = type;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
            this.arraySort(this.оbjects);
            this.mediaQueries = Array.prototype.map.call(this.оbjects, function(item) {
                return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }, this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function(item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            });
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function(item) {
                    return item.breakpoint === mediaBreakpoint;
                });
                matchMedia.addListener(function() {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                });
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
            if (matchMedia.matches) for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            } else for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            element.classList.add(this.daClassname);
            if (place === "last" || place >= destination.children.length) {
                destination.insertAdjacentElement("beforeend", element);
                return;
            }
            if (place === "first") {
                destination.insertAdjacentElement("afterbegin", element);
                return;
            }
            destination.children[place].insertAdjacentElement("beforebegin", element);
        };
        DynamicAdapt.prototype.moveBack = function(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (parent.children[index] !== void 0) parent.children[index].insertAdjacentElement("beforebegin", element); else parent.insertAdjacentElement("beforeend", element);
        };
        DynamicAdapt.prototype.indexInParent = function(parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        DynamicAdapt.prototype.arraySort = function(arr) {
            if (this.type === "min") Array.prototype.sort.call(arr, function(a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if (a.place === "first" || b.place === "last") return -1;
                    if (a.place === "last" || b.place === "first") return 1;
                    return a.place - b.place;
                }
                return a.breakpoint - b.breakpoint;
            }); else {
                Array.prototype.sort.call(arr, function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return 1;
                        if (a.place === "last" || b.place === "first") return -1;
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                });
                return;
            }
        };
        const da = new DynamicAdapt("max");
        da.init();
    }
    function partnersLogo() {
        const icon = document.querySelector(".s-partners__logo");
        const maxX = 25;
        const maxY = 25;
        function animateIcon() {
            anime({
                targets: icon,
                translateX: () => (Math.random() - .5) * 2 * maxX,
                translateY: () => (Math.random() - .5) * 2 * maxY,
                duration: 4e3,
                rotate: () => (Math.random() - .5) * 20,
                easing: "easeInOutQuad",
                complete: animateIcon
            });
        }
        icon.addEventListener("mouseenter", () => anime.remove(icon));
        icon.addEventListener("mouseleave", animateIcon);
        animateIcon();
    }
    function select_select() {
        const buttons = document.querySelectorAll(".select-btn");
        if (buttons.length) {
            const selects = document.querySelectorAll(".select");
            selects.forEach(select => {
                select.addEventListener("click", e => e.stopPropagation());
            });
            document.body.addEventListener("click", () => {
                const select = document.querySelector(".select._open");
                select?.classList.remove("_open");
            });
            selects.forEach(select => {
                const input = select.querySelector(".select-input");
                const items = select.querySelectorAll(".select-item");
                items.forEach(item => {
                    item.addEventListener("click", () => {
                        items.forEach(i => i.classList.remove("_active"));
                        input.value = item.textContent;
                        item.classList.add("_active");
                        handleClose(select);
                    });
                });
            });
            buttons.forEach(btn => {
                btn.addEventListener("click", () => {
                    const select = btn.closest(".select");
                    if (select.classList.contains("_open")) handleClose(select); else {
                        selects.forEach(s => s.classList.remove("_open"));
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
    function sliders() {
        const partnersAboutSlider = document.querySelector(".s-about__partners-slider");
        if (partnersAboutSlider) {
            new Swiper(partnersAboutSlider, {
                speed: 900,
                slidesPerView: "auto",
                spaceBetween: 40,
                autoplay: {
                    delay: 3500
                }
            });
        }
        const speakersSlider = document.querySelector(".s-speakers__slider");
        if (speakersSlider) {
            new Swiper(speakersSlider, {
                speed: 900,
                slidesPerView: "auto",
                spaceBetween: 16,
                autoplay: {
                    delay: 3200
                }
            });
        }
        const gallerySliders = document.querySelectorAll(".s-gallery__slider");
        if (gallerySliders.length) gallerySliders.forEach(slider => {
            new Swiper(slider, {
                speed: 900,
                slidesPerView: "auto",
                spaceBetween: 8,
                autoplay: {
                    delay: 3500
                },
                navigation: {
                    prevEl: ".s-gallery .slider-nav__btn._prev",
                    nextEl: ".s-gallery .slider-nav__btn._next"
                },
                breakpoints: {
                    768: {
                        slidesPerView: "auto",
                        spaceBetween: 16
                    }
                }
            });
        });
        const saySlider = document.querySelector(".s-say__slider");
        if (saySlider) {
            new Swiper(saySlider, {
                speed: 900,
                slidesPerView: "auto",
                spaceBetween: 8,
                autoplay: {
                    delay: 4e3
                },
                navigation: {
                    prevEl: ".s-say .slider-nav__btn._prev",
                    nextEl: ".s-say .slider-nav__btn._next"
                },
                breakpoints: {
                    768: {
                        slidesPerView: "auto",
                        spaceBetween: 24
                    }
                }
            });
        }
        const partnersSlider = document.querySelector(".s-partners__slider");
        if (partnersSlider && window.matchMedia("(max-width: 767px)").matches) {
            new Swiper(partnersSlider, {
                speed: 900,
                slidesPerView: "auto",
                spaceBetween: 16,
                autoplay: {
                    delay: 3500
                }
            });
        }
    }
    function spoller() {
        const spollersArray = document.querySelectorAll("[data-spollers]");
        if (spollersArray.length > 0) {
            const spollersRegular = Array.from(spollersArray).filter(function(item, index, self) {
                return !item.dataset.spollers.split(",")[0];
            });
            if (spollersRegular.length) initSpollers(spollersRegular);
            let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
            if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach(mdQueriesItem => {
                mdQueriesItem.matchMedia.addEventListener("change", function() {
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                });
                initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            });
            function initSpollers(spollersArray, matchMedia = false) {
                spollersArray.forEach(spollersBlock => {
                    spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                    if (matchMedia.matches || !matchMedia) {
                        spollersBlock.classList.add("_spoller-init");
                        initSpollerBody(spollersBlock);
                        spollersBlock.addEventListener("click", setSpollerAction);
                    } else {
                        spollersBlock.classList.remove("_spoller-init");
                        initSpollerBody(spollersBlock, false);
                        spollersBlock.removeEventListener("click", setSpollerAction);
                    }
                });
            }
            function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                if (spollerTitles.length) {
                    spollerTitles = Array.from(spollerTitles).filter(item => item.closest("[data-spollers]") === spollersBlock);
                    spollerTitles.forEach(spollerTitle => {
                        if (hideSpollerBody) {
                            spollerTitle.removeAttribute("tabindex");
                            if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                        } else {
                            spollerTitle.setAttribute("tabindex", "-1");
                            spollerTitle.nextElementSibling.hidden = false;
                        }
                    });
                }
            }
            function setSpollerAction(e) {
                const el = e.target;
                if (el.closest("[data-spoller]")) {
                    const spollerTitle = el.closest("[data-spoller]");
                    const spollersBlock = spollerTitle.closest("[data-spollers]");
                    const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (!spollersBlock.querySelectorAll("._slide").length) {
                        if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                        spollerTitle.classList.toggle("_spoller-active");
                        _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                    }
                    e.preventDefault();
                }
            }
            function hideSpollersBody(spollersBlock) {
                const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                    spollerActiveTitle.classList.remove("_spoller-active");
                    _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                }
            }
            const spollersClose = document.querySelectorAll("[data-spoller-close]");
            if (spollersClose.length) document.addEventListener("click", function(e) {
                const el = e.target;
                if (!el.closest("[data-spollers]")) spollersClose.forEach(spollerClose => {
                    const spollersBlock = spollerClose.closest("[data-spollers]");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    spollerClose.classList.remove("_spoller-active");
                    _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                });
            });
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter(function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            });
            if (media.length) {
                const breakpointsArray = [];
                media.forEach(item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                });
                let mdQueries = breakpointsArray.map(function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                });
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach(breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter(function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        });
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    });
                    return mdQueriesArray;
                }
            }
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout(() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout(() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        function uniqArray(array) {
            return array.filter(function(item, index, self) {
                return self.indexOf(item) === index;
            });
        }
    }
    function tabs() {
        const buttons = document.querySelectorAll("[data-tab-btn]");
        if (buttons.length) buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                const container = btn.closest(".tabs");
                const tabId = btn.dataset.tabBtn;
                const allButtons = container.querySelector(".tabs-nav").querySelectorAll("[data-tab-btn]");
                const allTabs = Array.from(container.querySelector(".tabs-content").children).filter(child => child.hasAttribute("data-tab"));
                const currentTab = container.querySelector(`[data-tab="${tabId}"]`);
                allTabs.forEach(t => {
                    t.classList.remove("_active");
                    t.style.opacity = 0;
                });
                currentTab.classList.add("_active");
                setTimeout(() => {
                    currentTab.style.opacity = 1;
                }, 10);
                allButtons.forEach(b => b.classList.remove("_active"));
                btn.classList.add("_active");
            });
        });
    }
    function updateIntroHeight() {
        const intro = document.querySelector(".intro");
        if (intro) {
            const header = document.querySelector(".header");
            function update() {
                intro.style.minHeight = `${window.visualViewport.height - header.clientHeight}px`;
            }
            update();
        }
    }
    spoller();
    burgerList();
    burger();
    inputmask();
    updateIntroHeight();
    select_select();
    sliders();
    tabs();
    awardScroll();
    copy();
    mediaAdaptive();
    partnersLogo();
    cursor();
    conditionsSpoller();
    Fancybox.bind("[data-fancybox]", {
        closeButton: false
    });
})();