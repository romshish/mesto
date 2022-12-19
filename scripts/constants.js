export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export const initialCards = [
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

export const formList = Array.from(document.querySelectorAll('.popup__form'));

export const profileEditeButton = document.querySelector('.profile__button-edit');
export const addingCardButton = document.querySelector('.profile__button-add');
export const popupProfileEdite = document.querySelector('.popup_purpose_profile');
export const profileCloseButton = popupProfileEdite.querySelector('.popup__close');
export const formProfileElement = popupProfileEdite.querySelector('.popup__form');
export const nameProfileInput = popupProfileEdite.querySelector('.popup__input_field_name');
export const jobProfileInput = popupProfileEdite.querySelector('.popup__input_field_job');
export const nameAuthor = document.querySelector('.profile__name');
export const jobAuthor = document.querySelector('.profile__job');

export const popupAddingCard = document.querySelector('.popup_purpose_card');
export const сardСloseButton = popupAddingCard.querySelector('.popup__close');
export const formCardElement = popupAddingCard.querySelector('.popup__form');
export const placeNameCardSubmit = popupAddingCard.querySelector('.popup__submit');
export const cardTitul = document.querySelector('.popup__input_field_placename');
export const cardLink = document.querySelector('.popup__input_field_link');

export const popupImage = document.querySelector('.popup_purpose_image');
export const captionPopupImage = popupImage.querySelector('.popup__caption');
export const imageCloseCard = popupImage.querySelector('.popup__close');
export const picturePopup = popupImage.querySelector('.popup__image');
