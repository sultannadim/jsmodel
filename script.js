'use strict';
const model = document.querySelector('.modal');
const btnCloseModel = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const btnShowModel = document.querySelectorAll('.show-modal');

const openModel = function () {
  // console.log('hello button');
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModel = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModel.length; i++)
  btnShowModel[i].addEventListener('click', openModel);

btnCloseModel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    closeModel();
  }
});
