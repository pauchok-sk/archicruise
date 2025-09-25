class FloatingCursor {
  constructor() {
    this.cursor = document.querySelector(".custom-cursor");

    // Позиции курсоров
    this.mouseX = 0;
    this.mouseY = 0;
    this.cursorX = 0;
    this.cursorY = 0;

    // Скорости следования (чем меньше, тем больше запоздание)
    this.cursorSpeed = 0.06;

    this.init();
  }

  init() {
    // Скрываем стандартный курсор
    // document.body.style.cursor = "none";

    // Слушаем движение мыши
    document.addEventListener("mousemove", (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });

    // Обработчики для интерактивных элементов
    this.addHoverEffects();

    // Запускаем анимацию
    this.animate();
  }

  animate() {
    // Плавное движение основного курсора
    this.cursorX += (this.mouseX - this.cursorX) * this.cursorSpeed;
    this.cursorY += (this.mouseY - this.cursorY) * this.cursorSpeed;

    // Применяем позиции
    this.cursor.style.left = this.cursorX + "px";
    this.cursor.style.top = this.cursorY + "px";

    // Продолжаем анимацию
    requestAnimationFrame(() => this.animate());
  }

  addHoverEffects() {
    const interactiveElements = document.querySelectorAll(
      ".interactive, .card, button, a"
    );

    interactiveElements.forEach((element) => {
      // При наведении
      element.addEventListener("mouseenter", () => {
        this.cursor.classList.add("cursor-hover");
      });

      // При уходе
      element.addEventListener("mouseleave", () => {
        this.cursor.classList.remove("cursor-hover");
      });
    });

    // Эффект при клике
    document.addEventListener("mousedown", () => {
      this.cursor.style.transform = "scale(0.6)";
    });

    document.addEventListener("mouseup", () => {
      this.cursor.style.transform = "";
    });
  }
}

export default function cursor() {
  document.addEventListener("DOMContentLoaded", () => {
    new FloatingCursor();
  });
}
