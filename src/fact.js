import supabase from "./supabase";
import { useState } from "react";

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

function Fact({ fact, setFacts }) {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleVote = async function (columnName) {
    setIsUpdating(true);
    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ [columnName]: fact[columnName] + 1 })
      .eq("id", fact.id)
      .select();
    setIsUpdating(false);

    if (!error)
      setFacts((facts) =>
        facts.map((f) => (f.id === updatedFact[0].id ? updatedFact[0] : f))
      );
  };

  return (
    <li key={fact.id} className="fact">
      <p>
        {fact.text}
        <a className="source" href={fact.source} target="_blank">
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)
            .color,
        }}
      >
        {fact.category}
      </span>
      <div className="vote-buttons">
        <button
          onClick={() => handleVote("votesInteresting")}
          disabled={isUpdating}
        >
          👍 {fact.votesInteresting}
        </button>
        <button
          onClick={() => handleVote("votesMindblowing")}
          disabled={isUpdating}
        >
          🤯 {fact.votesMindblowing}
        </button>
        <button onClick={() => handleVote("votesFalse")} disabled={isUpdating}>
          ⛔️ {fact.votesFalse}
        </button>
      </div>
    </li>
  );
}

export default Fact;
