import Card from './card.js'
import FormValidator from './formValidator.js'
import { formElementPlace, formElementAutor, conteiner, picturePopup, imageCloseCard, captionPopupImage, popupImage, cardLink, cardTitul, placeNameCardSubmit, formCardElement, сardСloseButton, popupAddingCard, jobAuthor, nameAuthor, jobProfileInput, nameProfileInput, formProfileElement, profileCloseButton, popupProfileEdite, addingCardButton, profileEditeButton, formList, initialCards, validationSettings } from './constants.js'

function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closePopupClickBack);
  document.addEventListener('keydown', closePopupWithEsc);
}

const closePopupClickBack = function(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
};

const closePopupWithEsc = function(evt) {
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  }
};

 function closePopup(popup) {
  popup.classList.remove('popup_opened')
  popup.removeEventListener('click', closePopupClickBack)
  document.removeEventListener('keydown', closePopupWithEsc);
  formValidatorPlace.hideInputError();
  formValidatorAutor.hideInputError();
}

function openPopupImage(evt) {
  openPopup(popupImage);
  captionPopupImage.textContent = evt.target.alt;
  picturePopup.src = evt.target.src;
  picturePopup.alt = evt.target.alt;
}

profileEditeButton.addEventListener('click', function() {
  nameProfileInput.value = nameAuthor.textContent;
  jobProfileInput.value = jobAuthor.textContent;
  openPopup(popupProfileEdite);
});

addingCardButton.addEventListener('click', function() {
  openPopup(popupAddingCard);
});

profileCloseButton.addEventListener('click', function() {
  closePopup(popupProfileEdite)
});

сardСloseButton.addEventListener('click', function() {
  closePopup(popupAddingCard);
});

imageCloseCard.addEventListener('click', function() {
  closePopup(popupImage);
});

function renderCard(cardTitulValue, cardLinkSrc, openPopupImage) {
  const card = new Card(cardTitulValue, cardLinkSrc, '#card-template', openPopupImage);
  conteiner.prepend(card.generateCard());
}

function submitFormHandler (evt) {
    evt.preventDefault();
    nameAuthor.textContent = nameProfileInput.value;
    jobAuthor.textContent = jobProfileInput.value;
    closePopup(popupProfileEdite);
}

function submitFormCardHandler (evt) {
  evt.preventDefault();
  renderCard(cardTitul.value, cardLink.value, openPopupImage);
  formCardElement.reset();
  closePopup(popupAddingCard);
  formValidatorPlace.disableSubmitButton()
}

formProfileElement.addEventListener('submit', submitFormHandler);
formCardElement.addEventListener('submit', submitFormCardHandler);

initialCards.forEach(element => {
  renderCard(element.name, element.link, openPopupImage);
});

const formValidatorAutor = new FormValidator(validationSettings, formElementAutor);
const formValidatorPlace = new FormValidator(validationSettings, formElementPlace);
formValidatorAutor.enableValidation();
formValidatorPlace.enableValidation();

