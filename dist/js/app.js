// get items
const user = document.querySelector('.user');

let url = 'https://api.github.com/users/john-smilga';
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

async function fetchData(URL) {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

async function getData(URL) {
  let data = await fetchData(URL);

  displayData(data);
}

getData(url);

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

  user.innerHTML = `
  <div class="user-header">
      <img src="${avatar_url}" alt="user-img" class="user-img" />
      <div class="user-info">
        <h1 class="user-info-name">${name}</h1>
        <h3 class="user-info-subname">@${login}</h3>
        <p class="user-info-date">Joined ${created_at[2]} ${
    months[created_at[1] - 1]
  } ${created_at[0]}</p>
      </div>
    </div>
    <p class="user-text">${bio}</p>
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
      <div class="user-footer-item">
        <img src="../starter-code/assets/icon-location.svg" alt="" />
        <p class="user-location">${location}</p>
      </div>
      <div class="user-footer-item">
        <img src="../starter-code/assets/icon-twitter.svg" alt="" />
        <p class="user-twitter">${twitter_username}</p>
      </div>
      <div class="user-footer-item">
        <img src="../starter-code/assets/icon-website.svg" alt="" />
        <p class="user-website">${blog}</p>
      </div>
      <div class="user-footer-item">
        <img src="../starter-code/assets/icon-company.svg" alt="" />
        <p class="user-company">@${company}</p>
      </div>
    </div>
  `;
}
