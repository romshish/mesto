const profileEditeButton = document.querySelector('.profile__button-edit');
const addingCardButton = document.querySelector('.profile__button-add');
const popupProfileEdite = document.querySelector('.popup_purpose_profile');
const profileCloseButton = popupProfileEdite.querySelector('.popup__close');
const formProfileElement = popupProfileEdite.querySelector('.popup__form');
const nameProfileInput = popupProfileEdite.querySelector('.popup__input_field_name');
const jobProfileInput = popupProfileEdite.querySelector('.popup__input_field_job');
const nameAuthor = document.querySelector('.profile__name');
const jobAuthor = document.querySelector('.profile__job');

const popupAddingCard = document.querySelector('.popup_purpose_card');
const сardСloseButton = popupAddingCard.querySelector('.popup__close');
const formCardElement = popupAddingCard.querySelector('.popup__form');
const placeNameCardInput = popupAddingCard.querySelector('.popup__input_field_placename');
const placeLinkInput = popupAddingCard.querySelector('.popup__input_field_link');
const cardsContainer = document.querySelector('.elements__list');
const cardTitul = document.querySelector('.popup__input_field_placename');
const cardLink = document.querySelector('.popup__input_field_link');

const popupImage = document.querySelector('.popup_purpose_image');
const captionPopupImage = popupImage.querySelector('.popup__caption');
const imageCloseCard = popupImage.querySelector('.popup__close');
const picturePopup = popupImage.querySelector('.popup__image');

const cardTemplate = document.querySelector('#card-template').content;

function openPopup(popup) {
  console.log(popup.querySelector('form'));
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closePopupClickBack);
  document.addEventListener('keydown', closePopupWithEsc);
  if (popup.querySelector('form')) {
    toggleButtonStateOpen(validationSettings, popup);
  }
}

function toggleButtonStateOpen(validationSettings, popup) {
      const inputList = Array.from(popup.querySelectorAll(`${validationSettings.inputSelector}`));
      const buttonSubmit = popup.querySelector(`${validationSettings.submitButtonSelector}`);
      if (validateAllInputs(inputList)) {
        buttonSubmit.classList.add(`${validationSettings.inactiveButtonClass}`);
        buttonSubmit.setAttribute('disabled', 'disabled');
      } else {
        buttonSubmit.classList.remove(`${validationSettings.inactiveButtonClass}`);
        buttonSubmit.removeAttribute('disabled');
      }
   }

const closePopupClickBack = function(evt) {
  if (evt.target.classList.contains('popup_opened')) {
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

function createCard (cardTitulValue, cardLinkSrc) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const imageOpenCard = cardElement.querySelector('.element__image')
  cardElement.querySelector('.element__title').textContent = cardTitulValue;
  imageOpenCard.src = cardLinkSrc;
  imageOpenCard.alt = `Фото ${cardTitulValue}`;
  cardElement.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  });

  const trashCardButton = cardElement.querySelector('.element__trash');
  trashCardButton.addEventListener('click', function(evt) {
    evt.target.closest('.element').remove();
  });

  imageOpenCard.addEventListener('click', function() {
    openPopup(popupImage);
    captionPopupImage.textContent = cardTitulValue;
    picturePopup.src = cardLinkSrc;
    picturePopup.alt = `Фото ${cardTitulValue}`;
  });

  return cardElement;
}

function renderCard(cardTitulValue, cardLinkSrc) {
  const cardItem = createCard(cardTitulValue, cardLinkSrc);
  cardsContainer.prepend(cardItem);
}

function submitFormHandler (evt) {
    evt.preventDefault();
    nameAuthor.textContent = nameProfileInput.value;
    jobAuthor.textContent = jobProfileInput.value;
    closePopup(popupProfileEdite);
}

function submitFormCardHandler (evt) {
  evt.preventDefault();
  renderCard(cardTitul.value, cardLink.value);
  formCardElement.reset();
  closePopup(popupAddingCard);
}

formProfileElement.addEventListener('submit', submitFormHandler);
formCardElement.addEventListener('submit', submitFormCardHandler);

initialCards.forEach(element => {
  renderCard(element.name, element.link);
});
