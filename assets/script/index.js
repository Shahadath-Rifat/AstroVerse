'use strict';


const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const searchBar = document.querySelector('.search-bar');

searchButton.addEventListener('click', () => {
  searchBar.classList.toggle('active');
  searchInput.focus();
});