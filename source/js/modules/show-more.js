

const infoCompanyBlock = document.querySelector('.info-company__container');
const showMoreButton = infoCompanyBlock.querySelector('.info-company__button');
const paragraphs = infoCompanyBlock.querySelectorAll('p');
const hiddenText = infoCompanyBlock.querySelector('span');

const screenWidth = window.screen.width;

const MAX_PHONE_WIDTH = 767;

const switchShowParagraphs = (visible, nameButton) => {
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[paragraphs.length - 2].style.display = visible;
    paragraphs[paragraphs.length - 1].style.display = visible;
  }

  showMoreButton.textContent = nameButton;
  if (screenWidth <= MAX_PHONE_WIDTH) {
    hiddenText.style.display = visible;
  }

};

switchShowParagraphs('none', 'Подробнее');

const showMore = () => {
  showMoreButton.addEventListener('click', () => {
    if (showMoreButton.textContent.trim() === 'Подробнее') {
      switchShowParagraphs('block', 'Свернуть');

    } else {
      switchShowParagraphs('none', 'Подробнее');
    }
  });
};

export {showMore};
