import { useState } from "react";
import { Category } from "../../data";
import Title from "./Title";
import { SubCategory } from "./SubCategory";

interface Props {
  item: Category;
  setCategories: (categories: Category[]) => void;
  categories: Category[];
}

export default function TreeItem({ item, setCategories, categories }: Props) {
  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };

  return (
    <div style={{}}>
      <Title
        handleClick={handleClick}
        item={item}
        showChildren={showChildren}
        setCategories={setCategories}
        categories={categories}
      />
      <SubCategory>
        {showChildren &&
          item.subcategory.map((category) => (
            <TreeItem
              item={category}
              key={category.id}
              setCategories={setCategories}
              categories={categories}
            />
          ))}
      </SubCategory>
    </div>
  );
}
