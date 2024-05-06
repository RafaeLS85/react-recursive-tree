import { Category } from "../../data";
import { UseCategoriesActions } from "../../hooks/useCategories";
import { ArrowButton } from "./ArrowButton";

const Root = ({
  item,
  handleClick,
  showChildren,
  actions
}: {
  item: Category;
  handleClick: () => void;
  showChildren: boolean;
  actions: UseCategoriesActions
}) => {
  
  return (
    <span style={{ display: "flex", alignItems: "center" }}>
      <input
        type="checkbox"
        checked={item.isChecked}
        onChange={() => actions.handleCheck(item)}
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
