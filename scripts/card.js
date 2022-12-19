export default class Card {
  constructor(title, imageLink, templateSelector, openPopupImage) {
    this._title = title;
    this._imageLink = imageLink;
    this._templateSelector = templateSelector;
    this._openPopupImage = openPopupImage;
  }

  _getCard() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }

  _delClickHandler = () => {
    this._card.remove();
  }

  _handleLikeButton = () => {
    this._card.querySelector('.element__like').classList.toggle('element__like_active');
  }

  generateCard() {
    this._card = this._getCard();
    this._card.querySelector('.element__image').src = this._imageLink;
    this._card.querySelector('.element__image').alt = this._title;
    this._card.querySelector('.element__title').textContent = this._title;
    this._setEventListeners();
    return this._card;
  }

  _setEventListeners() {
    this._card.querySelector('.element__trash').addEventListener('click', this._delClickHandler);
    this._card.querySelector('.element__image').addEventListener('click', this._handleOpenPopup);
    this._card.querySelector('.element__image').addEventListener('click', this._openPopupImage);
    this._card.querySelector('.element__like').addEventListener('click', this._handleLikeButton);
  }
}
