export default function updateIntroHeight() {
  const intro = document.querySelector(".intro");

  if (intro) {
    const header = document.querySelector(".header");

    function update() {
      intro.style.minHeight = `${window.visualViewport.height - header.clientHeight}px`;
    }
  
    update();
  }
}