import "./App.css";
import Header from "./components/Header";
import FactContainer from "./components/FactContainer";
import FactShare from "./components/FactShare";
import { useState } from "react";

function App() {
  const [isFactShareOpen, setIsFactShareOpen] = useState(false);

  return (
    <div className="
      p-5
      mx-auto
      max-w-6xl">
      <Header setIsFactShareOpen={(isOpen: boolean) => setIsFactShareOpen(isOpen)} />
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
      <FactShare isFactShareOpen={isFactShareOpen} setIsFactShareOpen={setIsFactShareOpen} />
    </div>
  );
}

export default App;
