import { Category } from "../../data";
import { ArrowButton } from "./ArrowButton";
import { updateCategories } from "./utils";

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
    setCategories(updateCategories(categories, item));
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

export default Root;
