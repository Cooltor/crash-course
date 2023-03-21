import React, { useState } from "react";
import supabase from "./supabase";

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
  const [isUploading, setIsUploading] = useState(false);
  const textLenght = text.length;

  const handleSubmit = async (e) => {
    // prevent page reload
    e.preventDefault();
    console.log(text, source, category);

    // Check if data is valid. If so, create a new fact
    if (text && isValidHttpUrl(source) && category && textLenght <= 200) {
      setIsUploading(true);
      const { data: newFact, error } = await supabase
        .from("facts")
        .insert([{ text, source, category }])
        .select();
      setIsUploading(false);

      if (error) {
        alert(error);
      }

      // Add the new fact to the list of facts
      if (!error) setFacts((facts) => [newFact[0], ...facts]);
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
        disabled={isUploading}
      />
      <span>{200 - textLenght}</span>
      <input
        type="text"
        placeholder="Source sûre..."
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Catégorie:</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large" disabled={isUploading}>
        Publier
      </button>
    </form>
  );
}

export default NewfactForm;
