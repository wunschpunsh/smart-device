const accordionItems = document.querySelectorAll('[data-accordion-item]');
const buttonsAccordion = document.querySelectorAll('[data-accordion-button]');

const isOpen = 'accordion--open';


const activateFooterAccordion = () => {
  buttonsAccordion.forEach((button) => {
    button.addEventListener('click', () => {
      const parentElement = button.parentNode;
      if (parentElement.classList.contains(isOpen)) {
        parentElement.classList.remove(isOpen);
      } else {
        accordionItems.forEach((element) => {
          element.classList.remove(isOpen);
        });
        parentElement.classList.add(isOpen);
      }
    });
  });
};

export {activateFooterAccordion};
