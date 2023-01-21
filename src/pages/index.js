import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
  cardListSelector,
  addingCardButton,
  profileEditeButton,
  initialCards,
  validationSettings,
  nameProfileSelector,
  jobProfileSelector,
  profileForm,
  cardForm
} from '../utils/constants.js';

function createCard(item) {
  const card = new Card(item.name, item.link, '#card-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement
}

const section = new Section({
  items: initialCards.reverse(),
  renderer: (item) => {
    const cardElement = createCard(item);
    section.addItem(cardElement);
  }
}, cardListSelector);

section.renderItems();

const popupAdditionCard = new PopupWithForm({
  popupSelector: '.popup_purpose_card',
  handleFormSubmit: (formData) => {
    const cardElement = createCard({ name: formData.title, link: formData.link });
    section.addItem(cardElement);
  },
})

popupAdditionCard.setEventListeners();

addingCardButton.addEventListener('click', () => {
  popupAdditionCard.open();
  formValidators[cardForm.getAttribute('name')].resetValidation();
});

const popupWithImage = new PopupWithImage('.popup_purpose_image');
popupWithImage.setEventListeners();


function handleCardClick(evt) {
  popupWithImage.open(evt.target.alt, evt.target.src);
}

const userInfo = new UserInfo(nameProfileSelector, jobProfileSelector);


const popupProfileEdite = new PopupWithForm({
  popupSelector: '.popup_purpose_profile',
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData);
  }
});

popupProfileEdite.setEventListeners();

profileEditeButton.addEventListener('click', () => {
  popupProfileEdite.setInputValues(userInfo.getUserInfo());
  popupProfileEdite.open();
  formValidators[profileForm.getAttribute('name')].resetValidation();
});

const formValidators = {};

const enableValidation = (validationSettings) => {
  const formList = Array.from(document.querySelectorAll(validationSettings.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(validationSettings, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  })
}

enableValidation(validationSettings);
