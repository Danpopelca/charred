document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("backgroundvideo");
    if (video) {
      video.playbackRate = 0.25; // 0.5 = de 2x mai lent (slow motion)
    }
  });