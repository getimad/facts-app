import Category from "../interfaces/Category";
import CategoreyBtn from "./CategoryBtn";

function CategoreyContainer() {
  const categories: Category[] = [
    { title: "all", bgColor: "#0D0D0D", borderColor: "#1F1F1F" },
    { title: "technology", bgColor: "#000531", borderColor: "#001063" },
    { title: "sience", bgColor: "#002729", borderColor: "#005F5F" },
    { title: "health", bgColor: "#002F05", borderColor: "#005703" },
    { title: "history", bgColor: "#251400", borderColor: "#322A00" },
    { title: "news", bgColor: "#240011", borderColor: "#410036" },
  ];

  return (
    <div className="flex-row space-y-4">
      {categories.map((category, index) => <CategoreyBtn category={category} key={index} />)}
    </div>
  );
}

export default CategoreyContainer;
