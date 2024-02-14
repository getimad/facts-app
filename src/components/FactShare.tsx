import { FormEvent, useState } from "react";
import CloseIcon from "../assets/icons/CloseIcon";
import DownIcon from "../assets/icons/DownIcon";
import PlusIcon from "../assets/icons/PlusIcon";
import useFactStore from "../store";
import Fact from "../interfaces/Fact";

interface Props {
  isFactShareOpen: boolean;
  setIsFactShareOpen: (isOpen: boolean) => void;
}

function FactShare({ isFactShareOpen, setIsFactShareOpen }: Props) {
  const setFact = useFactStore(s => s.setFact);

  const [content, setContent] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");

  const addFact = (event: FormEvent) => {
    event.preventDefault();

    if (!content || !category || !source) {
      alert("All fields are required");
      return;
    }

    const newFact: Fact = {
      id: Date.now(),
      content: content,
      source: source,
      category: category,
      voteCount: 0
    };

    setFact(newFact);
    setIsFactShareOpen(false);

    // Clear the input field
    setContent("");
    setSource("");
    setCategory("");
  };

  return (
    <div className={`fixed top-0 left-0 h-screen w-screen backdrop-blur-sm bg-[#001600]/50 flex items-center justify-center ${!isFactShareOpen ? "hidden" : ""}`} >
      <div className="z-10 h-screen w-screen fixed" onClick={() => setIsFactShareOpen(false)}></div>
      <form onSubmit={(event) => addFact(event)} className="bg-green-900 z-20 h-[25rem] w-[40rem] rounded-xl border border-green-800 p-5 shadow-inner">
        <div className="flex justify-between relative">
          <h3 className="text-4xl font-bold capitalize mb-5">
            Share a fact
          </h3>
          <button type="button" className="bg-red-700 p-2 rounded-full absolute top-0 right-0" onClick={() => setIsFactShareOpen(false)}>
            <CloseIcon />
          </button>
        </div>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} className="rounded-xl w-full h-40 text-ml text-black p-3 font-bold mb-3"></textarea>
        <input value={source} onChange={(e) => setSource(e.target.value)} type="text" placeholder="Add link of the fact" className="h-12 mb-3 rounded-xl w-full p-3 text-black font-bold text-md" />
        <div className="flex justify-between">
          <div className="relative">
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="bg-green-900 border-2 border-white font-semibold px-5 py-2 pr-14 rounded-full appearance-none">
              <option defaultChecked>{"<< Select a category >>"}</option>
              <option value="technologey">Technologey</option>
              <option value="sience">Sience</option>
              <option value="health">Health</option>
              <option value="history">History</option>
              <option value="news">News</option>
            </select>
            <div className="absolute right-4 top-[11px]">
              <DownIcon />
            </div>
          </div>
          <button type="submit"
            className="px-5 py-2 bg-green-900 border-2 border-white font-semibold rounded-full flex gap-3">
            <PlusIcon />
            Create
          </button>
        </div>
      </form>
    </div >
  );
}

export default FactShare;
