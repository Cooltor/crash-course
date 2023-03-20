"use strict";

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

const CATEGORIES = [
  { name: "technologie", color: "#3b82f6" },
  { name: "sciences", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "societe", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "sante", color: "#14b8a6" },
  { name: "histoire", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

factsList.innerHTML = " ";

// factsList.insertAdjacentHTML("afterbegin", "<li>romain dubus</li>");
// factsList.insertAdjacentHTML("afterbegin", "<li>malik dubus</li>");

const loadFacts = async function () {
  const res = await fetch(
    "https://ubzvekxcouzdjpnjtqza.supabase.co/rest/v1/facts",
    {
      method: "GET",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVienZla3hjb3V6ZGpwbmp0cXphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg1MzcxNDQsImV4cCI6MTk5NDExMzE0NH0.vVngez1fAHg4jGE3LdfL6nLfC7sYiKQsDf3UMglIVuc",
        "Content-Type": "application/json",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVienZla3hjb3V6ZGpwbmp0cXphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg1MzcxNDQsImV4cCI6MTk5NDExMzE0NH0.vVngez1fAHg4jGE3LdfL6nLfC7sYiKQsDf3UMglIVuc",
      },
    }
  );
  const data = await res.json();
  // const filteredData = data.filter((fact) => fact.category === "technology");

  createFactsList(data);
};

loadFacts();

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
    ${fact.text}
      <a
        class="source"
        href="${fact.source}"
        target="_blank"
      >(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">${fact.category}</span>
  </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});
