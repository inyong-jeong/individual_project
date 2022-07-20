import React from "react";

export default function LiveFilter() {
  const result = document.getElementById("result");
  const filter = document.getElementById("filter");
  const listItems = [];

  getData();

  filter.addEventListener("input", (e) => filterData(e.target.value));

  async function getData() {
    const res = await fetch("https://randomuser.me/api?results=50");

    const { results } = await res.json();

    // Clear result
    // result.innerHTML = "";

    results.forEach((user) => {
      const li = document.createElement("li");

      listItems.push(li);

      li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div className="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;

      result.appendChild(li);
    });
  }

  function filterData(searchTerm) {
    listItems.forEach((item) => {
      if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  }

  return (
    <div className="filter-body">
      <div className="filter-container">
        <header className="header">
          <h4 className="title">Live 사용자 검색</h4>
          <small className="subtitle">이름이나 지역을 통해 검색하세요</small>
          <input type="text" id="filter" placeholder="검색" />
        </header>
        <ul id="result" className="user-list">
          <li>
            <h3>Loading...</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}
