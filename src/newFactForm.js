import React, { useState } from "react";

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
function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

function NewfactForm({ setFacts, setShowForm }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const textLenght = text.length;
  const handleSubmit = (e) => {
    // prevent page reload
    e.preventDefault();
    console.log(text, source, category);

    // Check if data is valid. If so, create a new fact
    if (text && isValidHttpUrl(source) && category && textLenght <= 200) {
      // Create a new fact object
      const newFact = {
        id: Math.round(Math.random() * 1000000),
        text,
        source,
        category,
        votesInteresting: 0,
        votesMindblowing: 0,
        votesFalse: 0,
        createdIn: new Date().getFullYear(),
      };

      // Add the new fact to the list of facts
      setFacts((facts) => [newFact, ...facts]);
    }
    // Reset the form
    setText("");
    setSource("");
    setCategory("");

    // Close the form
    setShowForm(false);
  };

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Partage un fait avec le monde..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <span>{200 - textLenght}</span>
      <input
        type="text"
        placeholder="Source sûre..."
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Choisir sa catégorie:</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large">Publier</button>
    </form>
  );
}

export default NewfactForm;
