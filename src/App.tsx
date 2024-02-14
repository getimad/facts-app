import "./App.css";
import Header from "./components/Header";
import FactContainer from "./components/FactContainer";
import FactShare from "./components/FactShare";

function App() {
  return (
    <div className="
      p-5
      mx-auto
      max-w-6xl">
      <Header />
      <div className="
        flex font-inter">
        <aside className="
          w-80">
          Something
        </aside>
        <main className="h-full flex-grow">
          <FactContainer />
        </main>
      </div>
      <FactShare />
    </div>
  );
}

export default App;
