import "./style.css";
import CategoryFilters from "./categoryFilters";
import NewfactForm from "./newFactForm";
import FactList from "./factList";

function App() {
  const appTitle = "Today I Learned";
  return (
    <>
      {/*HEADER$*/}
      <header className="header">
        <div className="logo">
          <img
            src="logo.png"
            height="68"
            width="68"
            alt="Today I Learned Logo"
          />
          <h1>{appTitle}</h1>
        </div>

        <button className="btn btn-large btn-open">Share a fact</button>
      </header>
      <NewfactForm />
      <main className="main">
        <CategoryFilters />
        <FactList />
      </main>
    </>
  );
}

export default App;
