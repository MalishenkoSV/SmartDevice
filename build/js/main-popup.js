'use strict';
var ESC_KEYCODE = 27;
var overlay = document.querySelector('.overlay');
var buttonNav = document.querySelector('.nav__btn');
var popup = document.querySelector('.popup');
var formPopup = popup.querySelector('popup__form');
var feedbackName = popup.querySelector('#popup-name');
var phone = popup.querySelector('#popup-tel');
var question = popup.querySelector('#popup-question');
var close = popup.querySelector('.popup__btn-close');
var isStorageSupport = true;
var storage = {
  feedbackName: '',
  phone: '',
  question: ''
};


var closePopup = function () {
  popup.classList.remove('popup__show');
  popup.classList.remove('popup__error');
  overlay.classList.remove('pop-up-overlay');
  document.removeEventListener('keydown', onPopupEscPress);
};

try {
  storage.feedbackName = localStorage.getItem('feedbackName');
  storage.phone = localStorage.getItem('phone');
  storage.question = localStorage.getItem('question');
} catch (err) {
  isStorageSupport = false;
}

if (buttonNav && popup) {
  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      closePopup();
    }
  };
  if (formPopup) {
    formPopup.addEventListener('submit', function () {
      if (isStorageSupport) {
        localStorage.setItem('feedbackName', feedbackName.value);
        localStorage.setItem('phone', phone.value);
        localStorage.setItem('question', question.value);
      }
    });
  }

  var checkLocalStorage = function () {
    if (feedbackName && storage.feedbackName !== null) {
      feedbackName.value = storage.feedbackName;
    }

    if (phone && storage.phone !== null) {
      phone.value = storage.phone;
    }

    if (question && storage.question !== null) {
      question.value = storage.question;
    }
  };


  var openPopup = function () {
    popup.classList.add('popup__show');
    overlay.classList.add('pop-up-overlay');
    popup.classList.add('popup__error');
    document.addEventListener('keydown', onPopupEscPress);
    checkLocalStorage();
    feedbackName.focus();
  };

  buttonNav.addEventListener('click', function (evt) {
    evt.preventDefault();
    openPopup();
  });

  close.addEventListener('click', function () {
    closePopup();
  });


  popup.addEventListener('click', function (evt) {
    if (evt.target === popup) {
      closePopup();
    }
  });
}

overlay.addEventListener('click', function () {
  closePopup();
});
