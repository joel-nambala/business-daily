'use strict';

// Select DOM Elements
const demoModal = document.querySelector('.iframe');
const demoModalOpen = document.querySelectorAll('.btn-watch');
const demoModalClose = document.querySelector('.demo-close');
const demoVideo = document.querySelector('.iframe-video');

const testimonialSlide = document.querySelectorAll('.testimonials-slide');
const btnLeft = document.querySelector('.btn--left');
const btnRight = document.querySelector('.btn--right');

// const map = document.getElementById('map');

// State variables
let curSlide = 0;
const maxSlide = testimonialSlide.length;

// Function to open demo watch modal
const demoWatchOpen = function () {
  demoModal.classList.add('demo-open');
  demoVideo.style.display = 'block';
  demoModalClose.style.display = 'block';
};

// Function to close demo watch modal
const demowatchClose = function () {
  demoModal.classList.remove('demo-open');
  demoVideo.style.display = 'none';
  demoModalClose.style.display = 'none';
};

////////////////////////////////////////////////////
// Testomonials slide
const goToSlide = function (slide) {
  testimonialSlide.forEach(function (s, i) {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};

goToSlide(0);

// Next slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) curSlide = 0;
  else curSlide++;

  goToSlide(curSlide);
};

// Previous slide
const prevSlide = function () {
  if (curSlide === 0) curSlide = maxSlide - 1;
  else curSlide--;

  goToSlide(curSlide);
};

/////////////////////////////////////////////////////
// Displaying a map
const coords = [-1.2877837, 36.8396506];

const map = L.map('map').setView(coords, 14);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker(coords)
  .addTo(map)
  // .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
  .openPopup();

// Add event listeners
// demoModalOpen.addEventListener('click', demoWatchOpen);
demoModalOpen.forEach(function (btnWatch) {
  btnWatch.addEventListener('click', demoWatchOpen);
});
demoModalClose.addEventListener('click', demowatchClose);
demoModal.addEventListener('click', demowatchClose);

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

window.addEventListener('keyup', function (e) {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

const windowLoad = function () {
  demoVideo.style.display = 'none';
  demoModalClose.style.display = 'none';
};
window.addEventListener('load', windowLoad);
