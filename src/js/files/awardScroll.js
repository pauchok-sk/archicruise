export default function awardScroll() {
  const items = document.querySelectorAll(".s-award__adv-item");

  if (items.length && window.matchMedia("(max-width: 991px)").matches) {
    // Опции передаем вторым параметром при создании observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("_active");

            // Прекращаем наблюдение за конкретным элементом
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 1.0, // Опции здесь
      }
    );

    // Наблюдаем за каждым элементом отдельно
    items.forEach((item) => {
      observer.observe(item);
    });
  }
}
