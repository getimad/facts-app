import Fact from "../interfaces/Fact";
import Vote from "./Vote";

interface Props {
  fact: Fact;
}

function FactItem({ fact }: Props) {
  return (
    <li className="p-5 border border-green-900 rounded-2xl bg-green-950 flex justify-between mt-3">
      <div className="relative">
        <p className="w-[40rem] text-sm ">
          {fact.content}
          <a href={fact.source} className="font-bold text-green-800 pl-2">
            (Source)
          </a>
        </p>
        <span className="text-[10px] py-2 rounded-full uppercase font-extrabold absolute -bottom-4">
          #{fact.category}
        </span>
      </div>
      <Vote id={fact.id} />
    </li>
  );
}

export default FactItem;
