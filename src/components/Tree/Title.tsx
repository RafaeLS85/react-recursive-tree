import { Category } from "../../data";
import { ArrowButton } from "./ArrowButton";

const Title = ({
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
    console.log(item);

    const updateCategories = (categories: Category[]): Category[] => {
      return categories.map((category) => {
        if (category.id === item.id) {
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

export default Title;
