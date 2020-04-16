'use strict';
var pageHeader = document.querySelector('.page-header');
var overlay = document.querySelector('.overlay');
var button = pageHeader.querySelector('.nav__btn');
var popup = document.querySelector('.popup');
var name = popup.querySelector('[name=name-user]');
var phone = popup.querySelector('[name=phone]');
var form = popup.querySelector('.form');
var question = popup.querySelector('[name=question]');
var close = popup.querySelector('.popup__btn-close');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('name');
} catch (err) {
  isStorageSupport = false;
}


button.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('popup__show');
  overlay.classList.add('pop-up-overlay');
  if (storage) {
    name.value = storage;
    phone.focus();
  } else {
    name.focus();
  }
});
close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('popup__show');
  popup.classList.remove('popup__error');
  overlay.classList.remove('pop-up-overlay');
});

overlay.addEventListener('click', function () {
  popup.classList.remove('popup__show');
  popup.classList.remove('popup__error');
  overlay.classList.remove('pop-up-overlay');
});

form.addEventListener('submit', function (evt) {
  if (!name.value || !phone.value || !question) {
    evt.preventDefault();
    popup.classList.remove('popup__error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('popup-error');

  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', name.value);
    }
  }
});
pageHeader.classList.remove('page-header--nojs');

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('popup-show')) {
      popup.classList.remove('popup-show');
      popup.classList.remove('popup-error');
      overlay.classList.remove('pop-up-overlay');
    }
  }
});

