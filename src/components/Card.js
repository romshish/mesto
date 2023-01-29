export default class Card {
  constructor(data, userId, api, templateSelector, handleCardClick, { handleIconRemoveSubmit, handleLikeButton }) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeButton = handleLikeButton;
    this._handleIconRemoveSubmit = handleIconRemoveSubmit;
    this._ownerId = data.owner._id;
    this._userId = '73e8ceaa414fefc1552d78e3';
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

  addLike = () => {
    this._like.classList.add('element__like_active');
  }

  removeLike = () => {
    this._like.classList.remove('element__like_active');
  }

  updateStateLike(likes) {
    this._likes = likes;
  }

  generateCard() {
    this._card = this._getCard();
    this._image = this._card.querySelector('.element__image');
    this._like = this._card.querySelector('.element__like');
    this._image.src = this._link;
    this._image.alt = this._name;
    this._numberLikes = this._card.querySelector('.element__sum-likes');
    this._card.querySelector('.element__title').textContent = this._name;
    this._setEventListeners();
    this.countCardLikes(this._likes);
    this._removeTrashButton();
    if (this._isLiked()) {
      this.addLike();
    };
    return this._card;
  }

  countCardLikes(likes) {
    this._numberLikes.textContent = likes.length;
  }

  _isLiked() {
    return Boolean(this._likes.find(item => item._id === this._userId));
  }

  _setEventListeners() {
    this._card.querySelector('.element__trash').addEventListener('click', () =>
    {this._handleIconRemoveSubmit(this._data)});
    this._image.addEventListener('click', this._handleCardClick);
    this._like.addEventListener('click', () => {
      this._handleLikeButton(this._data)});
  }

  _removeTrashButton() {
    if (this._ownerId !== this._userId) {
      this._card.querySelector('.element__trash').remove();
    }
  }
}

