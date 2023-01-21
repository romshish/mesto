export default class Card {
  constructor(title, imageLink, templateSelector, handleCardClick) {
    this._title = title;
    this._imageLink = imageLink;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getCard() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _deleteCard = () => {
    this._card.remove();
  }

  _handleLikeButton = () => {
    this._like.classList.toggle('element__like_active');
  }

  generateCard() {
    this._card = this._getCard();
    this._image = this._card.querySelector('.element__image');
    this._like = this._card.querySelector('.element__like');
    this._image.src = this._imageLink;
    this._image.alt = this._title;
    this._card.querySelector('.element__title').textContent = this._title;
    this._setEventListeners();
    return this._card;
  }

  _setEventListeners() {
    this._card.querySelector('.element__trash').addEventListener('click', this._deleteCard);
    this._image.addEventListener('click', this._handleCardClick);
    this._like.addEventListener('click', this._handleLikeButton);
  }
}
