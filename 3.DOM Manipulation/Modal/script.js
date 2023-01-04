'use strict';
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const showModalBtn = document.querySelectorAll('.show-modal');
console.log(showModalBtn);

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener('click', showModal);
}
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

modalBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
