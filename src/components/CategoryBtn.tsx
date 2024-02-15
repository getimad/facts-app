import Category from "../interfaces/Category";
import { useCategoryStore } from "../store";

interface Props {
  category: Category;
}

function CategoreyBtn({ category }: Props) {
  const setCategory = useCategoryStore(s => s.setCategory);

  return (
    <button
      onClick={() => setCategory(category.title)}
      className="block w-60 py-3 rounded-full border capitalize text-sm font-bold"
      style={{ backgroundColor: category.bgColor, borderColor: category.borderColor }}
    >
      {category.title}
    </button>
  );
}

export default CategoreyBtn;
