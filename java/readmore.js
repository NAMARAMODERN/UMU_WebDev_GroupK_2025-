
/* ----------------- REVEAL ANIMATION ----------------- */
const circleEl = document.getElementById("circle");
const blogCardEl = document.getElementById("blogCard");
const cardsEl = document.querySelectorAll(".card");

let revealed = false;
function reveal() {
  if (revealed) return;
  revealed = true;

  circleEl.style.opacity = "0";
  circleEl.style.transform = "scale(0.4) rotate(15deg)";

  setTimeout(() => {
    blogCardEl.style.opacity = "1";
    blogCardEl.style.transform = "scale(1)";
  }, 300);

  cardsEl.forEach((card, i) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0) scale(1)";
    }, 150 * i);
  });
}

document.querySelector(".wrapper").addEventListener("mouseenter", reveal);
document.querySelector(".wrapper").addEventListener("click", reveal);

/* ----------------- VIDEO MODAL ----------------- */
const modal = document.getElementById('videoModal');
const modalIframe = document.getElementById('modalIframe');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.video-wrapper img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalIframe.src = img.dataset.video;
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  modalIframe.src = '';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modalIframe.src = '';
  }
});
