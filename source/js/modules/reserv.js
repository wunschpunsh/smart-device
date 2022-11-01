const feedBackForm = document.querySelector('.form');
const formButton = feedBackForm.querySelector('.form__send-button');
const phoneInput = feedBackForm.querySelector('input[type="tel"]');
const nameInput = feedBackForm.querySelector('input[type="text"]');
const personalInput = feedBackForm.querySelector('input[type="checkbox"]');

const nameInputs = document.querySelectorAll('input[type="text"]');

const MASK_PHONE_FORMAT = '+7(';
let formattedInputValue;


const validatenameInput = () => {
  nameInputs.forEach((input) => {
    input.addEventListener('input', () => {
      const isValid = input.checkValidity();
      if (!isValid) {
        input.title = ('Только буквы русского или латинского алфавита');
      }
    });
  });
};


const disableFormButton = () => {
  personalInput.addEventListener('change', function (evt) {
    const checkbox = evt.target;
    if (checkbox.checked) {
      formButton.disabled = false;
    } else {
      formButton.disabled = true;
    }
  });
};

const checkLengthPhoneNumber = () => {

  const isValid = phoneInput.checkValidity();
  if (!isValid) {
    phoneInput.title = ('Введите номер в формате +7(999)9999999');
  }
};


const getPhoneInputNumber = (evt) => {
  return evt.target.value.replace(/\D/g, '');
};

const onPhoneInput = (evt) => {
  const inputNumberValue = getPhoneInputNumber(evt);
  checkLengthPhoneNumber();
  formattedInputValue = MASK_PHONE_FORMAT;

  if (inputNumberValue.length > 1) {
    formattedInputValue += inputNumberValue.substring(1, 4);
  }

  if (inputNumberValue.length >= 5) {
    formattedInputValue += ')' + inputNumberValue.substring(4, 11);
  }

  evt.target.value = formattedInputValue;

};

const onPhoneInputClearKeydow = (evt) => {
  let inputValue = evt.target.value.replace(/\D/g, '');
  if (evt.key === 'Backspace' && inputValue.length === 1) {
    evt.target.value = '';
  }
};

const validateForm = () => {
  validatenameInput();
  disableFormButton();
  phoneInput.addEventListener('input', onPhoneInput);
  phoneInput.addEventListener('keydown', onPhoneInputClearKeydow);
};

export {feedBackForm, validateForm, nameInput};
