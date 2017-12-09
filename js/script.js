var bookmark = document.querySelectorAll('.bookmark');
var headerBookmark = document.querySelector('.header-bookmark');
var writeUs = document.querySelector('.contacts-feedback');
var map = document.querySelector('.contacts-map');
var modalContainer = document.querySelector('.modal-container');
var feedbackPopup = modalContainer.querySelector('.modal-feedback');
var closeFeedback = feedbackPopup.querySelector(".close-popup");
var mapPopup = modalContainer.querySelector('.map-popup');
var closeMapPopup = mapPopup.querySelector('.close-popup');
var buyButton = document.querySelectorAll('.buy');
var cartPopup = document.querySelector('.modal-cart');

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

for (var i = 0; i < buyButton.length; i++) {
  buyButton[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    cartPopup.classList.add('modal-show');
  })
}
