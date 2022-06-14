'use strict';

// Select DOM Elements
// Navigation
const navigation = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const header = document.getElementById('header');
const linksContainer = document.querySelector('.links-container');
const navMenu = document.querySelector('.nav-menu');

// Modal window
const demoModal = document.querySelector('.iframe');
const demoModalOpen = document.querySelectorAll('.btn-watch');
const demoModalClose = document.querySelector('.demo-close');
const demoVideo = document.querySelector('.iframe-video');

// Testimonials
const testimonialSlide = document.querySelectorAll('.testimonials-slide');
const btnLeft = document.querySelector('.btn--left');
const btnRight = document.querySelector('.btn--right');

// State variables
let curSlide = 0;
const maxSlide = testimonialSlide.length;

///////////////////////////////////////////////////////////
/**
 * @description This function is called when the document loads or when the user reloads a document. It applies the initial styles to the document.
 */
window.addEventListener('load', function () {
  demoVideo.style.display = 'none';
  demoModalClose.style.display = 'none';
});

////////////////////////////////////////////////////////////
// Function to open demo watch modal
/**
 * @description This function opens and closes the embeded youtube video so that the user can view it in a modal window.
 */
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

demoModalOpen.forEach(function (btnWatch) {
  btnWatch.addEventListener('click', demoWatchOpen);
});
demoModalClose.addEventListener('click', demowatchClose);
demoModal.addEventListener('click', demowatchClose);

////////////////////////////////////////////////////
// Testomonials slide
/**
 * @description This function is used to run the slide component in the testimonials section
 */
const slideComponent = function () {
  // Init slide function
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

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  window.addEventListener('keyup', function (e) {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });
};

slideComponent();

/////////////////////////////////////////////////////
// Displaying a map
/**
 * @description This is a leaflet function that embeds a map in the HTML document. The map is loaded from an external library.
 */
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

//////////////////////////////////////////////////////////////////
// Fixed navigation bar
/**
 * @description This function adds a fixed navigation bar to the document when a scroll event happens. It basically adds and removes the 'fixed; class
 */
const fixedNav = function () {
  // 1. Calculate the heights
  const navHeight = navigation.getBoundingClientRect().height;
  const headerHeight = header.getBoundingClientRect().height;
  const scrollHeight = window.scrollY;

  // 2. Add fixed nav
  if (scrollHeight > navHeight) navigation.classList.add('fixed');
  else navigation.classList.remove('fixed');
};

window.addEventListener('scroll', fixedNav);

//////////////////////////////////////////////////////////////
// Responsive navigation
/**
 * @description This is a function that ensure that the navigation bar is responsive on all screen sizes.
 */
const responsiveNav = function () {
  // 1. Calculate the heights
  const listHeight = navList.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;

  // 2. Toggle the heights
  if (containerHeight === 0) linksContainer.style.height = `${listHeight}px`;
  else linksContainer.style.height = 0;
};

navMenu.addEventListener('click', responsiveNav);
