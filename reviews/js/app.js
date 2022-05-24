const url =
  "https://api.unsplash.com/photos/?client_id=6Rq5eUW8ilCCLeHAsy55TBQe1b6OE-cTa5ssttwlmUE";

//select items
const personImg = document.getElementById("person-img");
const personName = document.getElementById("person-name");
const personLocation = document.getElementById("person-location");
const personDesc = document.getElementById("person-desc");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 1;
const reviews = [];

async function fetchReviews() {
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Client-ID 6Rq5eUW8ilCCLeHAsy55TBQe1b6OE-cTa5ssttwlmUE",
    },
  }).then((response) => response.json().then((data) => getCurrentUser(data)));
}
fetchReviews();

prevBtn.addEventListener("click", (evt) => {
  currentItem--;

  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }

  const item = reviews.find((_, id) => id === currentItem);
  personImg.src = item.urls.small;
  personName.textContent = item.user.name;
  personDesc.textContent = item.user.bio;
  personLocation.textContent = item.user.location;
});

nextBtn.addEventListener("click", () => {
  currentItem++;

  if (currentItem > reviews.length - 1) {
    currentItem = 1;
  }

  const item = reviews.find((_, id) => id === currentItem);
  personImg.src = item.urls.small;
  personName.textContent = item.user.name;
  personDesc.textContent = item.user.bio;
  personLocation.textContent = item.user.location;
});

function getCurrentUser(data) {
  reviews.push(...data);
  const item = reviews.find((_, id) => id === currentItem);
  personImg.src = item.urls.small;
  personName.textContent = item.user.name;
  personDesc.textContent = item.user.bio;
  personLocation.textContent = item.user.location;
}
