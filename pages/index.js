import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
  formElementPlace,
  formElementAutor,
  cardListSelector,
  addingCardButton,
  profileEditeButton,
  initialCards,
  validationSettings,
  nameProfileSelector,
  jobProfileSelector,
  nameProfileInput,
  jobProfileInput
 } from '../utils/constants.js';

const renderCards = (data) => {
  const cardAuthor = new Section ({
    items: data,
    renderer: (item) => {
      const card = new Card (item.name, item.link, '#card-template', handleCardClick);
      const cardElement = card.generateCard();
      cardAuthor.addItem(cardElement);
      }
    }, cardListSelector);
    cardAuthor.renderItems();
}

renderCards(initialCards);

const popupWithImage = new PopupWithImage ('.popup_purpose_image');
popupWithImage.setEventListeners();

function handleCardClick(evt) {
  popupWithImage.open(evt.target.alt, evt.target.src);
}

const popupProfileEdite = new PopupWithForm({
  popupSelector: '.popup_purpose_profile',
  handleFormSubmit: (formData) => {
    const userInfo = new UserInfo(nameProfileSelector, jobProfileSelector);
    userInfo.setUserInfo(formData);
  }
  , disableButton: () => {
    formValidatorAutor.disableSubmitButton();
    formValidatorAutor.hideInputError();
  }
});

popupProfileEdite.setEventListeners();

profileEditeButton.addEventListener('click', () => {
  const userInfo = new UserInfo(nameProfileSelector, jobProfileSelector);
  const infoDefault = userInfo.getUserInfo();
  nameProfileInput.value = infoDefault.name;
  jobProfileInput.value = infoDefault.job;
  popupProfileEdite.open();
});

const popupAdditionCard = new PopupWithForm({
  popupSelector: '.popup_purpose_card',
  handleFormSubmit: (formData) => {
    console.log(formData);
    renderCards([{name: formData.title, link: formData.link}]);
    },
    disableButton: () => {
    formValidatorPlace.disableSubmitButton();
    formValidatorPlace.hideInputError();
    }
})

popupAdditionCard.setEventListeners();

addingCardButton.addEventListener('click', () => {
  popupAdditionCard.open();
});

const formValidatorAutor = new FormValidator(validationSettings, formElementAutor);
const formValidatorPlace = new FormValidator(validationSettings, formElementPlace);
formValidatorAutor.enableValidation();
formValidatorPlace.enableValidation();
