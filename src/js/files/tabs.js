export default function tabs() {
  const buttons = document.querySelectorAll("[data-tab-btn]");

  if (buttons.length) {
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const container = btn.closest(".tabs");
        const tabId = btn.dataset.tabBtn;
        const allButtons = container
          .querySelector(".tabs-nav")
          .querySelectorAll("[data-tab-btn]");
        const allTabs = Array.from(
          container.querySelector(".tabs-content").children
        ).filter((child) => child.hasAttribute("data-tab"));
        const appTabs = container.querySelectorAll("[data-app-tab]");

        const currentTab = container.querySelector(`[data-tab="${tabId}"]`);

        // доп. табы
        if (appTabs.length) {
          const currentAppTab = container.querySelector(`[data-app-tab="${tabId}"]`);

          appTabs.forEach((t) => {
            t.classList.remove("_active");
            t.style.opacity = 0;
          });
          currentAppTab.classList.add("_active");
          setTimeout(() => {
            currentAppTab.style.opacity = 1;
          }, 10);
        }

        allTabs.forEach((t) => {
          t.classList.remove("_active");
          t.style.opacity = 0;
        });
        currentTab.classList.add("_active");
        setTimeout(() => {
          currentTab.style.opacity = 1;
        }, 10);

        allButtons.forEach((b) => b.classList.remove("_active"));
        btn.classList.add("_active");
      });
    });
  }
}
