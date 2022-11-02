
const nameInputs = document.querySelectorAll('input[type="text"]');
const personalInputs = document.querySelectorAll('input[type="checkbox"]');
const phoneInputs = document.querySelectorAll('input[type="tel"]');
const formButtons = document.querySelectorAll('button[type="submit"]');


const MASK_PHONE_FORMAT = '+7(';
let formattedInputValue;

const onNameValidateInput = (evt) => {
  const input = evt.target;
  const isValid = input.checkValidity();
  if (!isValid) {
    input.title = ('Только буквы русского или латинского алфавита');
  }
};

const onFormButtonChange = (evt) => {
  const checkbox = evt.target;

  formButtons.forEach((button) => {
    if (button.dataset.idCheckbox === checkbox.id) {
      if (checkbox.checked) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    }
  });
};

const onLenghtPhoneNumberChange = (evt) => {
  const input = evt.target;
  const isValid = input.checkValidity();
  if (!isValid) {
    input.title = ('Введите номер в формате +7(XXX)XXXXXXX');
  }
};

const getPhoneInputNumber = (evt) => {
  return evt.target.value.replace(/\D/g, '');
};

const onPhoneMaskInput = (evt) => {
  const inputNumberValue = getPhoneInputNumber(evt);

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
  nameInputs.forEach((input) => {
    input.addEventListener('input', onNameValidateInput);
  });

  phoneInputs.forEach((input) => {
    input.addEventListener('input', onPhoneMaskInput);
    input.addEventListener('input', onLenghtPhoneNumberChange);
    input.addEventListener('keydown', onPhoneInputClearKeydow);
  });

  personalInputs.forEach((checkbox) => {
    checkbox.checked = true;
    checkbox.addEventListener('change', onFormButtonChange);
  });
};

export {validateForm};
