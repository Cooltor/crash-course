import React, { useState } from "react";

const CATEGORIES = [
  { name: "technologie", color: "#3b82f6" },
  { name: "sciences", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "societe", color: "#eab308" },
  { name: "divertissement", color: "#db2777" },
  { name: "sante", color: "#14b8a6" },
  { name: "histoire", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

function CategoryFilters({ setCurrentCategory }) {
  return (
    <aside className="">
      <ul>
        <li className="category">
          <button
            className="btn btn-all-categories"
            onClick={() => setCurrentCategory("all")}
          >
            All
          </button>
        </li>
        {CATEGORIES.map((cat) => (
          <li key={cat.name} className="category">
            <button
              className="btn btn-category"
              style={{ backgroundColor: cat.color }}
              onClick={() => setCurrentCategory(cat.name)}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CategoryFilters;
