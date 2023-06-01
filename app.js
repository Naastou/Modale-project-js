const modal = document.querySelector(".modal-overlay");
const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("show-modal");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("show-modal");
});

window.addEventListener("click", function (e) {
  if (e.target == modal) {
    modal.classList.remove("show-modal");
  }
});
