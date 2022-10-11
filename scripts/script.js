const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const editButton = document.querySelector('.profile__button-edit');
const addButton = document.querySelector('.profile__button-add');
const popupFeater = document.getElementById('popup-feater');
const closeButton = popupFeater.querySelector('.popup__close');
const formElement = popupFeater.querySelector('.popup__form');
const nameInput = popupFeater.querySelector('.popup__input_field_name');
const jobInput = popupFeater.querySelector('.popup__input_field_job');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');
const elementsList = document.querySelector('.elements__list');

const popupCard = document.getElementById('popup-card');
const closeCardButton = popupCard.querySelector('.popup__close');
const formCardElement = popupCard.querySelector('.popup__form');
const placeNameCardInput = popupCard.querySelector('.popup__input_field_placename');
const placeLinkInput = popupCard.querySelector('.popup__input_field_link');

const popupImage = document.getElementById('popup-image');
const closeImageOfCard = popupImage.querySelector('.popup-image__close');


function openPopup() {
  popupFeater.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function openPopupCard() {
  popupCard.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
}

function openPopupImage(popupImageSrc, popupImageTitulValue) {
  popupImage.classList.add('popup-image_opened');
  popupImage.querySelector('.popup-image__title').textContent = popupImageTitulValue;
  popupImage.querySelector('.popup-image__image').src = popupImageSrc;
}

function closePopup() {
  popupFeater.classList.remove('popup_opened');
 }

 function closePopupCard() {
  popupCard.classList.remove('popup_opened');
 }

 function closePopupImage() {
  popupImage.classList.remove('popup-image_opened');
}

editButton.addEventListener('click', openPopup);
addButton.addEventListener('click', openPopupCard);
closeButton.addEventListener('click', closePopup);
closeCardButton.addEventListener('click', closePopupCard);
closeImageOfCard.addEventListener('click', closePopupImage);


function addCard (cardTitulValue, cardLinkSrc) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__title').textContent = cardTitulValue;
  cardElement.querySelector('.element__image').src = cardLinkSrc;
  cardElement.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  });

  const delCard = cardElement.querySelector('.element__trash');
  delCard.addEventListener('click', function(evt) {
    evt.target.parentElement.remove();
  });
  elementsList.prepend(cardElement);

  const openImageOfCard = cardElement.querySelector('.element__image')
  openImageOfCard.addEventListener('click', function(evt) {
    const popupImageTitul = evt.target.parentElement.querySelector('.element__title');
    const popapImageLink = evt.target;
    openPopupImage(popapImageLink.src, popupImageTitul.textContent)});
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopup()
}

function formCardSubmitHandler (evt) {
  evt.preventDefault();
  const cardTitul = document.querySelector('.popup__input_field_placename');
  const cardLink = document.querySelector('.popup__input_field_link');
  addCard (cardTitul.value, cardLink.value);
  cardTitul.value = '';
  cardLink.value = '';
  closePopupCard()
}

formElement.addEventListener('submit', formSubmitHandler);
formCardElement.addEventListener('submit', formCardSubmitHandler);

initialCards.forEach(element => {
    const cardTitulValue = element.name;
    const cardLinkSrc = element.link;
    addCard (cardTitulValue, cardLinkSrc)
  });
