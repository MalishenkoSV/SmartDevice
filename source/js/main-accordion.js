'use strict';

var buttons = document.querySelectorAll('.accordion-btn');

buttons.forEach(function (btn) {
  btn.addEventListener('click', function (evt) {
    btn.classList.toggle('accordion-btn--on');

    buttons.forEach(function (item) {
      if (item !== evt.target) {
        item.classList.remove('accordion-btn--on');
      }
    });
  });
});
