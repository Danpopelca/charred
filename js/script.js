document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("backgroundvideo");
    if (video) {
      video.playbackRate = 0.25; // 0.5 = de 2x mai lent (slow motion)
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("menuImageModal");
    const modalTitle = document.getElementById("modalDishTitle");
    const modalImage = document.getElementById("modalDishImage");
  
    if (modal) {
      modal.addEventListener("show.bs.modal", function (event) {
        const trigger = event.relatedTarget;
        const title = trigger.getAttribute("data-title");
        const imgSrc = trigger.getAttribute("data-img");
  
        modalTitle.textContent = title;
        modalImage.src = imgSrc;
        modalImage.alt = title;
      });
    }
  });