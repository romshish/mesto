export default class FormValidator {
  constructor(data, formElement) {
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonSubmit = this._formElement.querySelector(this._submitButtonSelector);
  }

  _showInputError(inputElement) {
    inputElement.classList.add(this._inputErrorClass);
    this._cautionInput = this._formElement.querySelector(`.${inputElement.id}-error`);
    this._cautionInput.classList.add(this._errorClass);
    this._cautionInput.textContent = inputElement.validationMessage;
  }

  _hideInputError(inputElement) {
    inputElement.classList.remove(this._inputErrorClass);
    this._cautionInput = this._formElement.querySelector(`.${inputElement.id}-error`);
    this._cautionInput.classList.remove(this._errorClass);
  }

  _validateInput(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement)
    } else {
      this._hideInputError(inputElement)
    }
  }

  resetValidation() {
    this._toggleButtonSubmit();
    this._inputList.forEach((inputElement) => {
    this._hideInputError(inputElement);
    });
  }

  _validateAllInputs() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonSubmit() {
    if (this._validateAllInputs()) {
      this._disableSubmitButton();
    } else {
      this._buttonSubmit.classList.remove(this._inactiveButtonClass);
      this._buttonSubmit.removeAttribute('disabled');
    }
  }

  _disableSubmitButton() {
    this._buttonSubmit.classList.add(this._inactiveButtonClass);
    this._buttonSubmit.setAttribute('disabled', 'disabled');
  }

  enableValidation() {
    this._inputList.forEach((inputElement) => {
      this._toggleButtonSubmit();
      inputElement.addEventListener('input', () => {
        this._validateInput(inputElement);
        this._toggleButtonSubmit(inputElement);
      });
    });
  }
}
