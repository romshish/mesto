let editButton = document.querySelector('.profile__button-edit');
let popupFeater = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');

function openPopup() {
  popupFeater.classList.add('popup__opened');
}

function closePopup() {
  popupFeater.classList.remove('popup__opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__job');

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    console.log(nameInput.value);
    console.log(jobInput.value);
}

formElement.addEventListener('submit', formSubmitHandler);


