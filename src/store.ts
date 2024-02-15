import { create } from "zustand";
import Fact from "./interfaces/Fact";

interface FactStore {
  facts: Fact[];
  setFact: (fact: Fact) => void;
  upVote: (id: number) => void;
  downVote: (id: number) => void;
}

const useFactStore = create<FactStore>((set) => ({
  facts: [
    {
      id: 1,
      content: "Web Development is Only About Coding.",
      voteCount: -2,
      source: "#",
      category: "techonology",
    },
    {
      id: 2,
      content: "Web Development is Easy.",
      voteCount: -19,
      source: "#",
      category: "techonology",
    },
    {
      id: 3,
      content:
        "Web development is a field that is constantly evolving. New technologies, frameworks, and tools are introduced regularly, and developers need to keep learning to stay up-to-date.",
      voteCount: 57,
      source: "#",
      category: "techonology",
    },
  ],
  setFact: (fact: Fact) => set((state) => ({ facts: [...state.facts, fact] })),
  upVote: (id: number) =>
    set((state) => ({
      facts: state.facts.map((f) =>
        f.id === id ? { ...f, voteCount: f.voteCount + 1 } : f
      ),
    })),
  downVote: (id: number) =>
    set((state) => ({
      facts: state.facts.map((f) =>
        f.id === id ? { ...f, voteCount: f.voteCount - 1 } : f
      ),
    })),
}));

export default useFactStore;
