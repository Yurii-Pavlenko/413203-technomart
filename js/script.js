var buyButton = document.querySelectorAll('.buy');
var modalContainer = document.querySelector('.modal-container');
var cartPopup = modalContainer.querySelector('.modal-cart');
var closeCartPopup = cartPopup.querySelector('.close-popup');
var writeUs;
var map;
var feedbackPopup;
var closeFeedback;
var mapPopup;
var closeMapPopup;

if (document.querySelector('.main-container')) {
  writeUs = document.querySelector('.contacts-feedback');
  map = document.querySelector('.contacts-map');
  feedbackPopup = modalContainer.querySelector('.modal-feedback');
  closeFeedback = feedbackPopup.querySelector(".close-popup");
  mapPopup = modalContainer.querySelector('.map-popup');
  closeMapPopup = mapPopup.querySelector('.close-popup');

  writeUs.addEventListener('click', function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add('modal-show');
  });

  closeFeedback.addEventListener('click', function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove('modal-show');
  });

  map.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.add('modal-show');
  });

  closeMapPopup.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove('modal-show');
  });
}

for (var i = 0; i < buyButton.length; i++) {
  buyButton[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    cartPopup.classList.add('modal-show');
  })
}

closeCartPopup.addEventListener('click', function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove('modal-show');
});
