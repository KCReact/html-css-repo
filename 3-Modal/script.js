'use strict';

const modal = document.querySelector('.modal');
// console.log(modal);

const overlay = document.querySelector('.overlay');
// console.log(overlay);

const btnCloseModal = document.querySelector('.close-modal');
// console.log(btnCloseModal);

const btnOpensModal = document.querySelectorAll('.show-modal');
// console.log(btnOpensModal);

const openModal = function () {
  // console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpensModal.length; i++) {
  btnOpensModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  //   console.log('A key was pressed');
  //   console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('.hidden')) {
    closeModal();
  }
});
