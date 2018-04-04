var activator = document.querySelector('.js-navigation__menu-opener');

activator.addEventListener('click', function () {
  document.querySelector('.js-header-drawer').classList.toggle('is-visible');
});

var header = document.querySelector('.header');
var headerDrawer = document.querySelector('.js-header-drawer');

document.addEventListener('click', function (e) {
  var isHeaderDrawer = (headerDrawer === e.target) || headerDrawer.contains(e.target);
  var isHeader = (header === e.target) || header.contains(e.target);

  if (!isHeader && !isHeaderDrawer) {
  	document.querySelector('.js-header-drawer').classList.remove('is-visible');
  }
});
