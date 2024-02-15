import "./App.css";
import Header from "./components/Header";
import FactContainer from "./components/FactContainer";
import FactShare from "./components/FactShare";
import { useState } from "react";
import ShareIcon from "./assets/icons/ShareIcon";

function App() {
  const [isFactShareOpen, setIsFactShareOpen] = useState(false);

  return (
    <div className="p-5 mx-auto max-w-6xl">
      <Header />
      <div className="flex font-inter">
        <aside className="w-80">
          <h3 className="text-2xl font-bold mb-5">Categories</h3>
          Something
        </aside>
        <main className="h-full flex-grow">
          <div className="flex justify-between items-center mb-7">
            <h3 className="text-4xl font-bold">Facts</h3>
            <button onClick={() => setIsFactShareOpen(true)}
              className="bg-green-950 px-5 py-2 rounded-full duration-100 hover:text-green-400 flex gap-4 items-center capitalize"
            >
              Share a fact
              <ShareIcon />
            </button>
          </div>
          <FactContainer />
        </main>
        <div className={`fixed h-screen w-screen top-0 left-0 transition-transform duration-150 ease-in-out transform ${isFactShareOpen ? 'scale-100' : 'scale-0'}`}>
          <FactShare isFactShareOpen={isFactShareOpen} setIsFactShareOpen={setIsFactShareOpen} />
        </div>
      </div>
    </div >
  );
}

export default App;
