import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = document.querySelector(this._popupSelector);
    this._picturePopup = this._popupImage.querySelector('.popup__image');
    this._captionPopupImage = this._popupImage.querySelector('.popup__caption');
  }

  open(title, link) {
    super.open();
    this._title = title;
    this._link = link;
    this._captionPopupImage.textContent = this._title;
    this._picturePopup.src = this._link;
    this._picturePopup.alt = this._title;
  }
}
