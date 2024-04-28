import { Category } from "../../data";
import { ArrowButton } from "./ArrowButton";

const Root = ({
  item,
  handleClick,
  showChildren,
  categories,
  setCategories,
}: {
  item: Category;
  handleClick: () => void;
  showChildren: boolean;
  categories: Category[];
  setCategories: (item: Category[]) => void;
}) => {
  const handleCheck = (item: Category) => {
    const updateCategories = (categories: Category[]): Category[] => {
      return categories.map((category) => {
        if (category.id === item.id) {
          setCheckedAllRecursively(item, !item.isChecked);
          return { ...category, isChecked: !item.isChecked };
        }
        if (category.subcategory) {
          return {
            ...category,
            subcategory: updateCategories(category.subcategory),
          };
        }
        return category;
      });
    };

    setCategories(updateCategories(categories));
  };

  function setCheckedAllRecursively(
    parentCategory: Category,
    isChecked: boolean,
    isRoot: boolean = true
  ): void {
    if (!isRoot) {
      parentCategory.isChecked = isChecked;
    }
    parentCategory.subcategory.forEach((subcategory) => {
      setCheckedAllRecursively(subcategory, isChecked, false);
    });
  }

  return (
    <span style={{ display: "flex", alignItems: "center" }}>
      <input
        type="checkbox"
        checked={item.isChecked}
        onChange={() => handleCheck(item)}
      />
      <h3
        onClick={handleClick}
        style={{ cursor: item.count !== null ? "pointer" : "default" }}
      >
        <span
          style={{ fontWeight: item.parentId === null ? "bold" : "normal" }}
        >
          {item.label} {item.count !== null ? `(${item.count})` : ""}
        </span>
        <ArrowButton show={showChildren} item={item} />
      </h3>
    </span>
  );
};

export default Root;
