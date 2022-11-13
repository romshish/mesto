function enableValidation(settings) {
  const formList = Array.from(document.querySelectorAll(`${settings.formSelector}`));
  formList.forEach(function(formElement) {
  setValidate(settings, formElement);
  });
}

function setValidate(settings, formElement) {
  const inputList = Array.from(formElement.querySelectorAll(`${settings.inputSelector}`));
  const buttonSubmit = formElement.querySelector(`${settings.submitButtonSelector}`);
  toggleButtonSubmit(settings, inputList, buttonSubmit);
  inputList.forEach(function(inputElement) {
    inputElement.addEventListener('input', function() {
      validateInput(settings, formElement, inputElement);
      toggleButtonSubmit(settings, inputList, buttonSubmit);
    });
  });
}

function showInputError(settings, formElement, inputElement, errorMessage) {
  inputElement.classList.add(`${settings.inputErrorClass}`);
  const cautionInput = formElement.querySelector(`.${inputElement.id}-error`);
  cautionInput.classList.add(`${settings.errorClass}`);
  cautionInput.textContent = errorMessage;
}

function hideInputError(settings, formElement, inputElement) {
  inputElement.classList.remove(`${settings.inputErrorClass}`);
  const cautionInput = formElement.querySelector(`.${inputElement.id}-error`);
  cautionInput.classList.remove(`${settings.errorClass}`);
}

function validateInput(settings, formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(settings, formElement, inputElement, inputElement.validationMessage)
  } else {
    hideInputError(settings, formElement, inputElement)
  }
}

function validateAllInputs(inputList) {
  return inputList.some(function(inputElement) {
    return !inputElement.validity.valid;
  });
}

function toggleButtonSubmit(settings, inputList, buttonSubmit) {
  if (validateAllInputs(inputList)) {
    buttonSubmit.classList.add(`${settings.inactiveButtonClass}`);
  } else {
    buttonSubmit.classList.remove(`${settings.inactiveButtonClass}`);
  }
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});
