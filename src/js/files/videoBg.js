export default function videoBg() {
  const videos = document.querySelectorAll(".video-bg");

  if (videos.length) {
    document.addEventListener("DOMContentLoaded", () => {
      videos.forEach((video) => {
        video.play();
      });
    });
  }
}
