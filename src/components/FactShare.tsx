import DownIcon from "../assets/icons/DownIcon";
import PlusIcon from "../assets/icons/PlusIcon";

function FactShare() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen backdrop-blur-sm bg-white/10 flex items-center justify-center">
      <div className="bg-green-900 h-80 w-[40rem] rounded-xl border border-green-800 p-5">
        <h3 className="text-4xl font-bold capitalize mb-5">
          Share a fact
        </h3>
        <textarea className="rounded-xl w-full h-40 text-xl text-black p-3 font-bold mb-1"></textarea>
        <div className="flex justify-between">
          <div className="relative">
            <select className="bg-green-900 border-2 border-white font-semibold px-5 py-2 pr-14 rounded-full appearance-none">
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
          <button className="px-5 py-2 bg-green-900 border-2 border-white font-semibold rounded-full flex gap-3">
            <PlusIcon />
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default FactShare;
