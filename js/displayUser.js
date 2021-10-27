const errorHtml = document.querySelector('.form-error');
const user = document.querySelector('.user');

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
        <svg height="20" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z" fill="#4b6a9b"/></svg>
        <p class="user-location">${
          location === null ? 'Not Available' : location
        }</p>
      </div>
      <div class="user-footer-item ${
        twitter_username === null ? 'not-available' : ''
      }">
        <svg height="18" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z" fill="#4b6a9b"/></svg>
        <p class="user-twitter">${
          twitter_username === null ? 'Not Available' : twitter_username
        }</p>
      </div>
      <div class="user-footer-item ${blog === '' ? 'not-available' : ''}">
        <svg height="18" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z" fill="#4b6a9b"/></svg>
        <p class="user-website">${blog === '' ? 'Not Available' : blog}</p>
      </div>
      <div class="user-footer-item ${company === null ? 'not-available' : ''}">
        <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="#4b6a9b"><path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z"/></g></svg>
        <p class="user-company">${
          company === null ? 'Not Available' : `@${company}`
        }</p>
      </div>
    </div>
  `;
}

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

export default getData;
