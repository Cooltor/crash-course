import Fact from "./fact";

function FactList({ facts }) {
  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} />
        ))}
      </ul>
      <p>Il y a {facts.length} faits dans la base de données. </p>
    </section>
  );
}

export default FactList;
