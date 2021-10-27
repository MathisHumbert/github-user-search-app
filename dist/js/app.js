// get items
const user = document.querySelector('.user');
const errorHtml = document.querySelector('.form-error');
const form = document.querySelector('.form');
const text = document.querySelector('.form-input');
const btn = document.querySelector('.form-btn');
const toggleBtn = document.querySelector('.toggle-btn');
let html = document.querySelector('html');

// API
const API_URL = 'https://api.github.com/users/';
let githubUser = localStorage.getItem('github-user') || 'john-smilga';

// months arr
let months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// window load
window.addEventListener('DOMContentLoaded', () => {
  getData(API_URL + githubUser);
});

// fecth data
async function fetchData(URL) {
  const response = await fetch(URL);

  if (response.status === 404) {
    errorHtml.classList.add('show');
    return 'err';
  } else {
    errorHtml.classList.remove('show');
    const data = await response.json();
    return data;
  }
}

// get data
async function getData(URL) {
  let data = await fetchData(URL);

  if (data === 'err') return;

  displayData(data);
}

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

// btn effect color
window.addEventListener('click', (e) => {
  if (e.target === text || text.value !== '') btn.classList.add('active');
  else btn.classList.remove('active');
});

// html color
toggleBtn.addEventListener('click', toggleHtmlColor);

// disaply data
function displayData(data) {
  // destructuring
  let {
    avatar_url,
    name,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    blog,
    company,
  } = data;

  created_at = created_at.split('T')[0].split('-');

  // display html
  user.innerHTML = `
  <div class="user-header">
      <img src="${avatar_url}" alt="user-img" class="user-img" />
      <div class="user-info">
        <h1 class="user-info-name">${name === null ? 'No Name' : name}</h1>
        <h3 class="user-info-subname">@${login}</h3>
        <p class="user-info-date">Joined ${created_at[2]} ${
    months[created_at[1] - 1]
  } ${created_at[0]}</p>
      </div>
    </div>
    <p class="user-text">${bio === null ? 'No Bio' : bio}</p>
    <div class="user-stats">
      <div class="user-stat">
        <h4>Repos</h4>
        <h2 class="user-repos">${public_repos}</h2>
      </div>
      <div class="user-stat">
        <h4>Followers</h4>
        <h2 class="user-followers">${followers}</h2>
      </div>
      <div class="user-stat">
        <h4>Following</h4>
        <h2 class="user-following">${following}</h2>
      </div>
    </div>
    <div class="user-footer">
      <div class="user-footer-item ${location === null ? 'not-available' : ''}">
        <img src="../starter-code/assets/icon-location.svg" alt="" />
        <p class="user-location">${
          location === null ? 'Not Available' : location
        }</p>
      </div>
      <div class="user-footer-item ${
        twitter_username === null ? 'not-available' : ''
      }">
        <img src="../starter-code/assets/icon-twitter.svg" alt="" />
        <p class="user-twitter">${
          twitter_username === null ? 'Not Available' : twitter_username
        }</p>
      </div>
      <div class="user-footer-item ${blog === '' ? 'not-available' : ''}">
        <img src="../starter-code/assets/icon-website.svg" alt="" />
        <p class="user-website">${blog === '' ? 'Not Available' : blog}</p>
      </div>
      <div class="user-footer-item ${company === null ? 'not-available' : ''}">
        <img src="../starter-code/assets/icon-company.svg" alt="" />
        <p class="user-company">${
          company === null ? 'Not Available' : `@${company}`
        }</p>
      </div>
    </div>
  `;
}

function toggleHtmlColor() {
  if (html.classList.contains('dark')) html.classList.remove('dark');
  else html.classList.add('dark');
}
