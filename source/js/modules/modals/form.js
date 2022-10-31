import {feedBackForm, validateForm} from './validate-form.js';
import {getSuccessMessage} from './result-message.js';

const formElements = feedBackForm.elements;

validateForm();

const createLocalStorage = () => {
  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.type !== 'submit') {
      element.addEventListener('change', () => {
        if (element.id !== 'personal-data') {
          localStorage.setItem(element.name, element.value);
        } else {
          localStorage.setItem(element.name, element.checked);
        }
      });
    }
  }
};

const showStorage = () => {
  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.type !== 'submit') {
      if (element.id !== 'personal-data') {
        element.value = localStorage.getItem(element.name);
      } else {
        element.checked = localStorage.getItem(element.name);
      }
    }
  }
  createLocalStorage();
};

showStorage();

const clearLocalStorage = () => {
  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    element.value = '';
  }
  localStorage.clear();
};

const getFormData = (formNode) => {
  return new FormData(formNode);
};

const sendFormData = (data) => {
  fetch('https://echo.htmlacademy.ru/', {
    method: 'POST',
    body: data,
  }).then((response) => {
    if (response.ok) {
      getSuccessMessage();
      clearLocalStorage();
    }
  });
};

const onFormSumbit = (evt) => {
  evt.preventDefault();
  const data = getFormData(evt.target);
  sendFormData(data);
};

const submitFeedBackForm = () => {
  feedBackForm.addEventListener('submit', onFormSumbit);
};

export {submitFeedBackForm};
