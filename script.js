"use strict";

const result = document.getElementById("result");
const filter = document.getElementById("filter");

const numberOfPeople = 50;
const URL = `https://randomuser.me/api?results=${numberOfPeople}`;

const listItems = [];

const getData = async () => {
  const res = await fetch(URL);
  const data = await res.json();

  const results = data.results;

  result.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");

    listItems.push(li);

    li.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}" />

    <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
    <div/>
    `;

    result.appendChild(li);
  });
};
getData();

const filterData = (searchTerm) => {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
};

filter.addEventListener("input", (e) => filterData(e.target.value));
