'use strict';

// Select DOM Elements
const demoModal = document.querySelector('.iframe');
const demoModalOpen = document.querySelector('.demo-watch');
const demoModalClose = document.querySelector('.demo-close');
const demoVideo = document.querySelector('.iframe-video');

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

// Add event listeners
demoModalOpen.addEventListener('click', demoWatchOpen);
demoModalClose.addEventListener('click', demowatchClose);
demoModal.addEventListener('click', demowatchClose);

const windowLoad = function () {
  demoVideo.style.display = 'none';
  demoModalClose.style.display = 'none';
};
window.addEventListener('load', windowLoad);
