"use strict";
const userApi = `https://api.github.com/users/`;
const search = document.querySelector(".git__search");
const container = document.querySelector(".git__container");

async function getData(url) {
  const request = await axios.get(url);
  container.innerHTML = "";
  getFunction(request.data);
}

function getFunction(data) {
  console.log(data);
  console.log(data.html_url);

  if (!data.name) {
    data.name = "unknown";
  }

  container.innerHTML += `
  <div class="git__cards">
            <div class="git__card">
            <p class="git__username">${data.login}</p>
            <p class="git__name">${data.name}</p>
            <p class="git__type">${data.type}</p>
            </div>
            
            <div class="git__card">
            <a target="blank" href="${data.html_url}">
            <img src="${data.avatar_url}" alt="img" class="image git__image" />
            </a>
              
            </div>
          </div>
  `;
}

function searchFunction(value) {
  getData(userApi + value);
}
search.addEventListener("change", (element) => {
  searchFunction(element.target.value);
});

try {
  getData(userApi + "yusuf-ai2011");
} catch (error) {
  throw new Error(error);
}
