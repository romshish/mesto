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

  _showInputError() {
    this._inputElement.classList.add(this._inputErrorClass);
    this._cautionInput = this._formElement.querySelector(`.${this._inputElement.id}-error`);
    this._cautionInput.classList.add(this._errorClass);
    this._cautionInput.textContent = this._inputElement.validationMessage;
  }

  hideInputError() {
    this._inputElement.classList.remove(this._inputErrorClass);
    this._cautionInput = this._formElement.querySelector(`.${this._inputElement.id}-error`);
    this._cautionInput.classList.remove(this._errorClass);
  }

  _validateInput() {
    if (!this._inputElement.validity.valid) {
      this._showInputError()
    } else {
      this.hideInputError()
    }
  }

  _validateAllInputs() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonSubmit() {
    if (this._validateAllInputs()) {
      this._buttonSubmit.classList.add(this._inactiveButtonClass);
      this._buttonSubmit.setAttribute('disabled', 'disabled');
    } else {
      this._buttonSubmit.classList.remove(this._inactiveButtonClass);
      this._buttonSubmit.removeAttribute('disabled');
    }
  }

  disableSubmitButton() {
    this._buttonSubmit.classList.add(this._inactiveButtonClass);
    this._buttonSubmit.setAttribute('disabled', 'disabled');
  }

  enableValidation() {
    this._inputList.forEach((inputElement) => {
      this._inputElement = inputElement;
      this._toggleButtonSubmit();
      this._inputElement.addEventListener('input', (evt) => {
        this._inputElement = evt.target;
        this._validateInput();
        this._toggleButtonSubmit();
      });
    });
  }
}
