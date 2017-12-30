var progressiveLoading = function () {
  var placeholder = document.querySelector('.js-placeholder'),
      small = placeholder.querySelector('.img-small'),
      h1 = placeholder.querySelector('.main-info__h1');

  // 1: load small image and show it
  var img = new Image();

  if (window.screen.width > 600) {
    img.src = small.src;
  } else {
    img.src = 'public/src/img/bg-image-cropped-small.png';
  }

  img.onload = function () {
    small.classList.add('loaded');
    h1.classList.add('shadow');
  };

  // 2: load large image
  var imgLarge = new Image();

  if (window.screen.width > 600) {
    imgLarge.src = placeholder.dataset.large;
  } else {
    imgLarge.src = 'public/src/img/bg-image-cropped.png';
  }

  imgLarge.onload = function () {
    imgLarge.classList.add('loaded');
  };

  placeholder.appendChild(imgLarge);
}();

module.exports = progressiveLoading;