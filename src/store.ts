import { create } from "zustand";
import Fact from "./interfaces/Fact";

interface FactStore {
  facts: Fact[];
  setFact: (fact: Fact) => void;
  upVote: (id: number) => void;
  downVote: (id: number) => void;
}

const useFactStore = create<FactStore>((set) => ({
  facts: [{id: 1, content:"dsjlfs dljqs", voteCount: 0, source:"#", category:"something"}],
  setFact: (fact: Fact) => set((state) => ({facts: [...state.facts, fact]})),
  upVote: (id: number) => set((state) => ({
    facts: state.facts.map(f => (f.id === id) ? {...f, voteCount: f.voteCount + 1} : f)
  })),
  downVote: (id: number) => set((state) => ({
    facts: state.facts.map(f => (f.id === id) ? {...f, voteCount: f.voteCount - 1} : f)
  }))
}));

export default useFactStore;
