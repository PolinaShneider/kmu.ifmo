
var language = function () {
  document.querySelector('.js-switcher--en').addEventListener('click', function () {
    /* Toggle Logo*/
    document.querySelector('.js-logo--en').classList.toggle('hide', false);
    document.querySelector('.js-logo--ru').classList.toggle('hide', true);
    document.querySelector('.js-logo--mobile--en').classList.toggle('hide', false);
    document.querySelector('.js-logo--mobile--ru').classList.toggle('hide', true);

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

    /* Toggle Description*/
    document.querySelector('.js-description--en').classList.toggle('hide', false);
    document.querySelector('.js-description--ru').classList.toggle('hide', true);

    /* Toggle Round Table H2*/
    document.querySelector('.js-round-table__h2--en').classList.toggle('hide', false);
    document.querySelector('.js-round-table__h2--ru').classList.toggle('hide', true);

    /* Toggle Round Table List*/
    document.querySelector('.js-round-table__ol--en').classList.toggle('hide', false);
    document.querySelector('.js-round-table__ol--ru').classList.toggle('hide', true);

    /* Toggle Date & Time*/
    document.querySelector('.js-date-and-place__date--en').classList.toggle('hide', false);
    document.querySelector('.js-date-and-place__date--ru').classList.toggle('hide', true);
    document.querySelector('.js-date-and-place__place--en').classList.toggle('hide', false);
    document.querySelector('.js-date-and-place__place--ru').classList.toggle('hide', true);

    /* Toggle How It Was Title*/
    document.querySelector('.js-how-it-was__h2--en').classList.toggle('hide', false);
    document.querySelector('.js-how-it-was__h2--ru').classList.toggle('hide', true);

    /* Toggle Footer Content*/
    document.querySelector('.js-footer__media--en').classList.toggle('hide', false);
    document.querySelector('.js-footer__media--ru').classList.toggle('hide', true);
    document.querySelector('.js-footer__apply--en').classList.toggle('hide', false);
    document.querySelector('.js-footer__apply--ru').classList.toggle('hide', true);
    document.querySelector('.js-footer-contacts--en').classList.toggle('hide', false);
    document.querySelector('.js-footer-contacts--ru').classList.toggle('hide', true);
  });

  document.querySelector('.js-switcher--ru').addEventListener('click', function () {
    /* Toggle Logo*/
    document.querySelector('.js-logo--en').classList.toggle('hide', true);
    document.querySelector('.js-logo--ru').classList.toggle('hide', false);
    document.querySelector('.js-logo--mobile--en').classList.toggle('hide', true);
    document.querySelector('.js-logo--mobile--ru').classList.toggle('hide', false);

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

    /* Toggle Description*/
    document.querySelector('.js-description--en').classList.toggle('hide', true);
    document.querySelector('.js-description--ru').classList.toggle('hide', false);

    /* Toggle Round Table H2*/
    document.querySelector('.js-round-table__h2--en').classList.toggle('hide', true);
    document.querySelector('.js-round-table__h2--ru').classList.toggle('hide', false);

    /* Toggle Round Table List*/
    document.querySelector('.js-round-table__ol--en').classList.toggle('hide', true);
    document.querySelector('.js-round-table__ol--ru').classList.toggle('hide', false);

    /* Toggle Date & Time*/
    document.querySelector('.js-date-and-place__date--en').classList.toggle('hide', true);
    document.querySelector('.js-date-and-place__date--ru').classList.toggle('hide', false);
    document.querySelector('.js-date-and-place__place--en').classList.toggle('hide', true);
    document.querySelector('.js-date-and-place__place--ru').classList.toggle('hide', false);

    /* Toggle How It Was Title*/
    document.querySelector('.js-how-it-was__h2--en').classList.toggle('hide', true);
    document.querySelector('.js-how-it-was__h2--ru').classList.toggle('hide', false);

    /* Toggle Footer Content*/
    document.querySelector('.js-footer__media--en').classList.toggle('hide', true);
    document.querySelector('.js-footer__media--ru').classList.toggle('hide', false);
    document.querySelector('.js-footer__apply--en').classList.toggle('hide', true);
    document.querySelector('.js-footer__apply--ru').classList.toggle('hide', false);
    document.querySelector('.js-footer-contacts--en').classList.toggle('hide', true);
    document.querySelector('.js-footer-contacts--ru').classList.toggle('hide', false);
  });
}();

module.exports = language;
