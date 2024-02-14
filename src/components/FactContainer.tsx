import useFactStore from "../store";
import FactItem from "./FactItem";

function FactContainer() {
  const facts = useFactStore(s => s.facts);

  return (
    <>
      {facts.map(f => <FactItem key={f.id} fact={f} />)}
    </>
  );
}

export default FactContainer;
