import DownIcon from "../assets/icons/DownIcon";
import UpIcon from "../assets/icons/UpIcon";
import { useFactStore } from "../store";

interface Props {
  id: number;
}

function Vote({ id }: Props) {
  const { facts, upVote, downVote } = useFactStore(s => ({
    facts: s.facts,
    upVote: s.upVote,
    downVote: s.downVote
  }));

  const voteCount = facts.find(f => f.id === id)!.voteCount;

  return (
    <div className="flex items-center justify-end w-20">
      <span className="pr-5 text-xl">{voteCount}</span>
      <div className="flex-row border border-green-50 rounded-md p-1">
        <button onClick={() => upVote(id)} className="block pb-1">
          <UpIcon />
        </button>
        <div className="border-b"></div>
        <button onClick={() => downVote(id)} className="block pt-1">
          <DownIcon />
        </button>
      </div>
    </div>
  );
}

export default Vote;
