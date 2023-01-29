import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import {
  cardListSelector,
  addingCardButton,
  profileEditeButton,
  validationSettings,
  nameProfileSelector,
  jobProfileSelector,
  profileForm,
  cardForm,
  avatarImage,
  avatarUpdate,
  avatarSelector,
  avatarForm

} from '../utils/constants.js';


// вызов классов Section UserInfo Api объявление функции создания карточек(createCard)

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-57/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: '9ca94fef-76cd-4b73-8a46-eb5793e0762e'
  }
});

const userInfo = new UserInfo(nameProfileSelector, jobProfileSelector, avatarSelector);

const section = new Section({
  renderer: (item, userId) => {
    const cardElement = createCard(item, userId);
    section.addItem(cardElement);
  }
}, cardListSelector);

const popupWithConfirm = new PopupWithConfirm('.popup_purpose_confirm', api)
popupWithConfirm.setEventListeners();

function createCard(data, userId) {
  const card = new Card(data, userId, api, '#card-template', handleCardClick,
  {
    handleIconRemoveSubmit: (data) => {
    popupWithConfirm.open();
    popupWithConfirm.setSubmitAction(() => {
      api.deleteCard(data._id)
        .then(() => {
          card._deleteCard();
          popupWithConfirm.close();
        })
        .catch((err) => {
          console.log(`Произошла ошибка ${err}`);
        });
      })
    },

    handleLikeButton: (data) => {
      if(card._isLiked()) {
        api.deleteLikeCard(data._id)
        .then((res) => {
          card.removeLike();
          card.countCardLikes(res.likes);
          card.updateStateLike(res.likes)
        })
        .catch((err) => {
          console.log(`Произошла ошибка ${err}`);
        });
      } else {
        api.addLikeCard(data._id)
          .then((res) => {
            card.addLike();
            card.countCardLikes(res.likes);
            card.updateStateLike(res.likes)
          })
          .catch((err) => {
            console.log(`Произошла ошибка ${err}`);
          });
      };
    }
  }  );
  const cardElement = card.generateCard();
  return cardElement
}

// получаем данные о карточках и пользователе

api.getAllNeededData()
  .then((result) => {
    const [userData, initialCardsData] = result;
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    avatarImage.src = userInfo.setAvatar();
    const userId = userInfo.getUserId(userData);
    const initialCards = initialCardsData.map((item) => {
      return item;
    })
    section.renderItems(initialCards.reverse(), userId);
  })
  .catch((err) => {
    console.log(`Произошла ошибка ${err}`);
  });


// 3. Редактирование профиля

const popupProfileEdite = new PopupWithForm({
  popupSelector: '.popup_purpose_profile',
  handleFormSubmit: (formData) => {
    popupProfileEdite.renderLoading(true);
    api.updateProfile({ name: formData.name, about: formData.job })
      .then((result) => {
        userInfo.setUserInfo(result);
      })
      .catch((err) => {
        console.log(`Произошла ошибка ${err}`);
      })
      .finally(() => {
        popupProfileEdite.renderLoading(false);
      });
  }
});

popupProfileEdite.setEventListeners();

profileEditeButton.addEventListener('click', () => {
  popupProfileEdite.setInputValues(userInfo.getUserInfo());
  popupProfileEdite.open();
  formValidators[profileForm.getAttribute('name')].resetValidation();
});



// 4. Добавление новой карточки

const popupAdditionCard = new PopupWithForm({
  popupSelector: '.popup_purpose_card',
  handleFormSubmit: (formData) => {
    popupAdditionCard.renderLoading(true);
    api.addCards({ name: formData.title, link: formData.link })
    .then((result) => {
      const cardElement = createCard(result);
      section.addItem(cardElement);
    })
    .catch((err) => {
      console.log(`Произошла ошибка ${err}`);
    })
    .finally(() => {
      popupAdditionCard.renderLoading(false);
    });
  },
})

popupAdditionCard.setEventListeners();

addingCardButton.addEventListener('click', () => {
  popupAdditionCard.open();
  formValidators[cardForm.getAttribute('name')].resetValidation();
});



// открытие попапа по картинке

const popupWithImage = new PopupWithImage('.popup_purpose_image');
popupWithImage.setEventListeners();

function handleCardClick(evt) {
  popupWithImage.open(evt.target.alt, evt.target.src);
}



// Замена аватара

const popupUpdateAvatar = new PopupWithForm({
  popupSelector: '.popup_purpose_update-avatar',
  handleFormSubmit: (formData) => {
    popupUpdateAvatar.renderLoading(true);
    api.updateProfileAvatar({ avatar: formData.avatar })
    .then((result) => {
      userInfo.setUserAvatar({ avatar: result.avatar });
      avatarImage.src = userInfo.setAvatar();
    })
    .catch((err) => {
      console.log(`Произошла ошибка ${err}`);
    })
    .finally(() => {
    popupUpdateAvatar.renderLoading(false);
    })
  },
})

popupUpdateAvatar.setEventListeners();

avatarUpdate.addEventListener('click', () => {
  popupUpdateAvatar.open();
  formValidators[avatarForm.getAttribute('name')].resetValidation();
});

// Валидация форм

const formValidators = {};

const enableValidation = (validationSettings) => {
  const formList = Array.from(document.querySelectorAll(validationSettings.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(validationSettings, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  })
}

enableValidation(validationSettings);
