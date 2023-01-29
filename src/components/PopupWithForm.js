import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._buttonSubmit = this._form.querySelector('.popup__submit');
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
      console.log(this._buttonSubmit);
    })
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    })

  }

  close() {
    super.close();
    this._form.reset();
  }

  renderLoading(isLoading) {
    if(!isLoading) {
      this._buttonSubmit.textContent = 'Сохранить';
    } else {
      this._buttonSubmit.textContent = 'Сохранить...';
    }
  }

}
