import Root from "./Root";
import { SubCategory } from "./SubCategory";
import { UseCategoriesActions, UseCategoriesState } from "../../hooks/useCategories";
import { Category } from "../../types/categories";


interface Props {
  item: Category;
  state: UseCategoriesState;
  actions: UseCategoriesActions;
}
export default function TreeItem({ 
  item, 
  actions,
  state }: Props) { 
 
  
  return (
    <div style={{}}>
      {/* {JSON.stringify(item)} */}
      <Root
        handleClick={() => actions.handleClick(item)}
        item={item}
        showChildren={item.showChildren}
        actions={actions}
      />
      <SubCategory>
        {item.showChildren &&
          item.subcategory.map((category: Category) => (
            <TreeItem
              item={category}
              key={category.id + Math.random()}
              state={state}
              actions={actions}
            />
          ))}
      </SubCategory>
    </div>
  );
}
