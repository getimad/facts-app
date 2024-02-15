import Fact from "../interfaces/Fact";
import Vote from "./Vote";

interface Props {
  fact: Fact;
}

function FactItem({ fact }: Props) {
  return (
    <li className="p-5 border border-green-900 rounded-2xl bg-green-950 flex justify-between items-center mt-3">
      <p className="w-[30rem]">
        {fact.content}
        <a href={fact.source} className="font-bold text-green-800 pl-2">
          (Source)
        </a>
      </p>
      <span className="flex items-center text-sm bg-green-900 px-5 h-10 rounded-full">
        {fact.category}
      </span>
      <Vote id={fact.id} />
    </li>
  );
}

export default FactItem;
