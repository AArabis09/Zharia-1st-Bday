const video = document.getElementById("birthday-video");
const soundToggle = document.getElementById("sound-toggle");

soundToggle.addEventListener("click", () => {
  video.muted = !video.muted;
  soundToggle.textContent = video.muted ? "Turn sound on" : "Mute sound";
  soundToggle.setAttribute("aria-pressed", String(!video.muted));
  if (!video.paused) return;
  video.play().catch(() => {});
});

video.addEventListener("volumechange", () => {
  soundToggle.textContent = video.muted ? "Turn sound on" : "Mute sound";
  soundToggle.setAttribute("aria-pressed", String(!video.muted));
});
