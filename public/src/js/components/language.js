
var language = function () {
  document.querySelector('.js-switcher--en').addEventListener('click', function () {
    /* Toggle Logo*/
    document.querySelector('.js-logo--en').classList.toggle('hide', false);
    document.querySelector('.js-logo--ru').classList.toggle('hide', true);

    /* Toggle Apply Button*/
    var HeaderApplyButtonsRu = document.querySelectorAll('.js-header__apply--en');
    var HeaderApplyButtonsEn = document.querySelectorAll('.js-header__apply--ru');

    for (var i=0; i < HeaderApplyButtonsEn.length; i++) {
      HeaderApplyButtonsRu[i].classList.toggle('hide', false);
      HeaderApplyButtonsEn[i].classList.toggle('hide', true);
    }

    /* Toggle Header Event Title*/
    var HeaderEventTitlesRu = document.querySelectorAll('.js-header__title--en');
    var HeaderEventTitlesEn = document.querySelectorAll('.js-header__title--ru');

    for (var i=0; i < HeaderEventTitlesEn.length; i++) {
      HeaderEventTitlesRu[i].classList.toggle('hide', false);
      HeaderEventTitlesEn[i].classList.toggle('hide', true);
    }

    /* Toggle Main Info Title*/
    document.querySelector('.js-main-info__h1--en').classList.toggle('hide', false);
    document.querySelector('.js-main-info__h1--ru').classList.toggle('hide', true);
  });

  document.querySelector('.js-switcher--ru').addEventListener('click', function () {
    /* Toggle Logo*/
    document.querySelector('.js-logo--en').classList.toggle('hide', true);
    document.querySelector('.js-logo--ru').classList.toggle('hide', false);

    /* Toggle Apply Button*/
    var HeaderApplyButtonsRu = document.querySelectorAll('.js-header__apply--en');
    var HeaderApplyButtonsEn = document.querySelectorAll('.js-header__apply--ru');

    for (var i=0; i < HeaderApplyButtonsEn.length; i++) {
      HeaderApplyButtonsRu[i].classList.toggle('hide', true);
      HeaderApplyButtonsEn[i].classList.toggle('hide', false);
    }

    /* Toggle Header Event Title*/
    var HeaderEventTitlesRu = document.querySelectorAll('.js-header__title--en');
    var HeaderEventTitlesEn = document.querySelectorAll('.js-header__title--ru');

    for (var i=0; i < HeaderEventTitlesEn.length; i++) {
      HeaderEventTitlesRu[i].classList.toggle('hide', true);
      HeaderEventTitlesEn[i].classList.toggle('hide', false);
    }

    /* Toggle Main Info Title*/
    document.querySelector('.js-main-info__h1--en').classList.toggle('hide', true);
    document.querySelector('.js-main-info__h1--ru').classList.toggle('hide', false);
  });
}();

module.exports = language;
