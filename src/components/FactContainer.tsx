import { useCategoryStore, useFactStore } from "../store";
import FactItem from "./FactItem";

function FactContainer() {
  const facts = useFactStore(s => s.facts);
  const category = useCategoryStore(s => s.category);

  const selectedFacts = category === "all" ? facts : facts.filter(f => f.category === category);

  return (
    <>
      {selectedFacts.map(f => <FactItem key={f.id} fact={f} />)}
    </>
  );
}

export default FactContainer;
