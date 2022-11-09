const accordionItems = document.querySelectorAll('[data-accordion-item]');
const buttonsAccordions = document.querySelectorAll('[data-accordion-button]');

const isOpen = 'accordion--open';
const screenWidth = window.screen.width;

const MAX_PHONE_WIDTH = 767;
if (screenWidth <= MAX_PHONE_WIDTH) {
  buttonsAccordions.forEach((button) => {
    button.tabIndex = 0;
  });
}

const switchAccordion = (evt) => {
  const parentElement = evt.target.parentNode;
  if (parentElement.classList.contains(isOpen)) {
    parentElement.classList.remove(isOpen);
  } else {
    accordionItems.forEach((element) => {
      element.classList.remove(isOpen);
    });
    parentElement.classList.add(isOpen);
  }
};

const onButtonAccordionClick = (evt) => {
  switchAccordion(evt);
};
const onButtonAccordionKeydown = (evt) => {
  if (evt.key === ' ' || evt.key === 'Enter') {
    switchAccordion(evt);
  }
};

const activateFooterAccordion = () => {
  buttonsAccordions.forEach((button) => {
    button.addEventListener('click', onButtonAccordionClick);
    button.addEventListener('keydown', onButtonAccordionKeydown);
  });
};

export {activateFooterAccordion};
