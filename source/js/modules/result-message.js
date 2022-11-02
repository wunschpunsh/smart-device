
const getSuccessMessage = () => {

  const successMessage = document.querySelector('.success');

  successMessage.classList.remove('visually-hidden');
  const successButton = successMessage.querySelector('.success__button');

  let onSuccesMessageOutsideClick = null;

  const onSuccesMessageKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Enter') {
      evt.preventDefault();
      successMessage.classList.add('visually-hidden');
      document.removeEventListener('keydown', onSuccesMessageKeyDown);
      document.removeEventListener('click', onSuccesMessageOutsideClick);
    }

  };

  onSuccesMessageOutsideClick = (evt) => {

    if (successMessage === evt.target) {
      successMessage.classList.add('visually-hidden');
      document.removeEventListener('click', onSuccesMessageOutsideClick);
      document.removeEventListener('keydown', onSuccesMessageKeyDown);
    }

  };

  const onSuccessButtonClick = () => {
    successMessage.classList.add('visually-hidden');
    successButton.removeEventListener('click', onSuccessButtonClick);
    document.removeEventListener('click', onSuccesMessageOutsideClick);
    document.removeEventListener('keydown', onSuccesMessageKeyDown);
  };

  successButton.addEventListener('click', onSuccessButtonClick);
  document.addEventListener('keydown', onSuccesMessageKeyDown);
  document.addEventListener('click', onSuccesMessageOutsideClick);
};

export {getSuccessMessage};
