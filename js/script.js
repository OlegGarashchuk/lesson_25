"use strict";

const formInput = document.querySelector(`.body-form__input`);
const formInputLimit = formInput.getAttribute(`maxlength`);
const formCounter = document.querySelector(`.form__counter span`);

formCounter.innerHTML = formInputLimit;
formInput.addEventListener("keyup", formSetCounter);
formInput.addEventListener("keydown", function (event) {
   if (event.repeat) formSetCounter();
});

function formSetCounter() {
   const formCounterResult = formInputLimit - formInput.value.length;
   formCounter.innerHTML = formCounterResult;
};

const formBody = document.querySelector('.form');

document.addEventListener("click", search);

function search(event) {
   if (event.target.closest(`.body-form__img`)) {
      formBody.classList.toggle('_active');
   }
   if (!event.target.closest(`.form`)) {
      formBody.classList.remove('_active');
   }
}

document.addEventListener(`keyup`, function (event) {
   if (event.code === 'Escape') {
      formBody.classList.remove('_active');
   }
});