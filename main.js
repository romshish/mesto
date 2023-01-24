(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function r(t,e,r){return(e=n(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(r)?r:String(r)}var o=function(){function t(e,n,o,i){var u=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"_deleteCard",(function(){u._card.remove()})),r(this,"_handleLikeButton",(function(){u._like.classList.toggle("element__like_active")})),this._title=e,this._imageLink=n,this._templateSelector=o,this._handleCardClick=i}var n,o;return n=t,(o=[{key:"_getCard",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._card=this._getCard(),this._image=this._card.querySelector(".element__image"),this._like=this._card.querySelector(".element__like"),this._image.src=this._imageLink,this._image.alt=this._title,this._card.querySelector(".element__title").textContent=this._title,this._setEventListeners(),this._card}},{key:"_setEventListeners",value:function(){this._card.querySelector(".element__trash").addEventListener("click",this._deleteCard),this._image.addEventListener("click",this._handleCardClick),this._like.addEventListener("click",this._handleLikeButton)}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===i(o)?o:String(o)),n)}var o}var a=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=r,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonSubmit=this._formElement.querySelector(this._submitButtonSelector)}var e,r;return e=t,(r=[{key:"_showInputError",value:function(t){t.classList.add(this._inputErrorClass),this._cautionInput=this._formElement.querySelector(".".concat(t.id,"-error")),this._cautionInput.classList.add(this._errorClass),this._cautionInput.textContent=t.validationMessage}},{key:"_hideInputError",value:function(t){t.classList.remove(this._inputErrorClass),this._cautionInput=this._formElement.querySelector(".".concat(t.id,"-error")),this._cautionInput.classList.remove(this._errorClass)}},{key:"_validateInput",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonSubmit(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_validateAllInputs",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonSubmit",value:function(){this._validateAllInputs()?this._disableSubmitButton():(this._buttonSubmit.classList.remove(this._inactiveButtonClass),this._buttonSubmit.removeAttribute("disabled"))}},{key:"_disableSubmitButton",value:function(){this._buttonSubmit.classList.add(this._inactiveButtonClass),this._buttonSubmit.setAttribute("disabled","disabled")}},{key:"enableValidation",value:function(){var t=this;this._inputList.forEach((function(e){t._toggleButtonSubmit(),e.addEventListener("input",(function(){t._validateInput(e),t._toggleButtonSubmit(e)}))}))}}])&&u(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===l(o)?o:String(o)),n)}var o}var s=function(){function t(e,r){var n=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=n,this._renderer=o,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(){var t=this;this._renderedItems.forEach((function(e){t._renderer(e)}))}}])&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,y(n.key),n)}}function y(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}var m=function(){function t(e){var r,n,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=function(t){"Escape"===t.key&&i.close()},(n=y(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popupSelector=e,this._popup=document.querySelector(this._popupSelector),this._closeButton=this._popup.querySelector(".popup__close")}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._closeButton.addEventListener("click",this.close.bind(this)),this._popup.addEventListener("mousedown",(function(e){e.target===e.currentTarget&&t.close()}))}}])&&f(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===b(o)?o:String(o)),n)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=d(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},h.apply(this,arguments)}function d(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function S(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(n);if(o){var r=g(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return S(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._picturePopup=e._popup.querySelector(".popup__image"),e._captionPopupImage=e._popup.querySelector(".popup__caption"),e}return e=u,(r=[{key:"open",value:function(t,e){h(g(u.prototype),"open",this).call(this),this._title=t,this._link=e,this._captionPopupImage.textContent=this._title,this._picturePopup.src=this._link,this._picturePopup.alt=this._title}}])&&v(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(m);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function j(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===k(o)?o:String(o)),n)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=P(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},E.apply(this,arguments)}function P(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function C(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(n);if(o){var r=L(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return C(this,t)});function u(t){var e,r=t.popupSelector,n=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,r))._form=e._popup.querySelector(".popup__form"),e._handleFormSubmit=n,e._inputList=e._form.querySelectorAll(".popup__input"),e}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;E(L(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues()),t.close()}))}},{key:"close",value:function(){E(L(u.prototype),"close",this).call(this),this._form.reset()}}])&&j(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(m);function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===B(o)?o:String(o)),n)}var o}var T=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameDefault=document.querySelector(e),this._jobDefault=document.querySelector(r)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._nameDefault.textContent,job:this._jobDefault.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.job;this._name=e,this._job=r,this._nameDefault.textContent=this._name,this._jobDefault.textContent=this._job}}])&&q(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),R=document.querySelector(".profile__button-edit"),x=document.querySelector(".profile__button-add"),A=document.forms["profile-form"],V=document.forms["card-form"];function D(t){return new o(t.name,t.link,"#card-template",M).generateCard()}var F=new s({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].reverse(),renderer:function(t){var e=D(t);F.addItem(e)}},".elements__list");F.renderItems();var U=new I({popupSelector:".popup_purpose_card",handleFormSubmit:function(t){var e=D({name:t.title,link:t.link});F.addItem(e)}});U.setEventListeners(),x.addEventListener("click",(function(){U.open(),J[V.getAttribute("name")].resetValidation()}));var z=new w(".popup_purpose_image");function M(t){z.open(t.target.alt,t.target.src)}z.setEventListeners();var N=new T(".profile__name",".profile__job"),G=new I({popupSelector:".popup_purpose_profile",handleFormSubmit:function(t){N.setUserInfo(t)}});G.setEventListeners(),R.addEventListener("click",(function(){G.setInputValues(N.getUserInfo()),G.open(),J[A.getAttribute("name")].resetValidation()}));var H,J={};H={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},Array.from(document.querySelectorAll(H.formSelector)).forEach((function(t){var e=new a(H,t),r=t.getAttribute("name");J[r]=e,e.enableValidation()}))})();