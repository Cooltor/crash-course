import Fact from "./fact";

function FactList({ facts }) {
  if (facts.length === 0) {
    return (
      <section>
        <p>Il n'y a pas de faits à afficher. Ajoute le tiens !</p>
      </section>
    );
  }
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
