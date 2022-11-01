import {validateForm} from './validate-form.js';
import {getSuccessMessage} from './result-message.js';
import {showStorage, clearLocalStorage, forms} from './local-storage.js';


const modal = document.querySelector('.modal');

const hiddenModal = () => {
  modal.classList.remove('is-active');
  document.body.classList.remove('scroll-lock');
  document.body.style.padding = '0';
};

validateForm();
showStorage();

const sendFormData = (data) => {
  fetch('https://echo.htmlacademy.ru/', {
    method: 'POST',
    body: data,
  }).then((response) => {
    if (response.ok) {
      clearLocalStorage();
      getSuccessMessage();
      hiddenModal();
    }
  });
};

const onFormSumbit = (evt) => {
  evt.preventDefault();
  const data = new FormData(evt.target);
  sendFormData(data);
};

const submitFeedBackForm = () => {
  forms.forEach((form) => {
    form.addEventListener('submit', onFormSumbit);
  });
};

export {submitFeedBackForm};
