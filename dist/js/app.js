// import
import getData from './displayUser.js';
import { toggleBtnColor, toggleHtmlColor } from './eventsFunctions.js';

// get items
const form = document.querySelector('.form');
const text = document.querySelector('.form-input');
const toggleBtn = document.querySelector('.toggle-btn');

// API
const API_URL = 'https://api.github.com/users/';
let githubUser = localStorage.getItem('github-user') || 'john-smilga';

// window load
window.addEventListener('DOMContentLoaded', () => {
  getData(API_URL + githubUser);
});

// btn effect color
window.addEventListener('click', toggleBtnColor);

// html light / dark color
toggleBtn.addEventListener('click', toggleHtmlColor);

// get form value
form.addEventListener('submit', searchForm);

function searchForm(e) {
  e.preventDefault();
  let value = text.value;

  // search for a user and display
  getData(API_URL + value);

  // local storage
  localStorage.setItem('github-user', value);

  this.reset();
}
