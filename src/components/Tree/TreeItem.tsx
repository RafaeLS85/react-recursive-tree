import { Category } from "../../data";
import Root from "./Root";
import { SubCategory } from "./SubCategory";
import { UseCategoriesActions, UseCategoriesState } from "../../hooks/useCategories";
import { useEffect } from "react";

interface Props {
  item: Category;
  state: UseCategoriesState;
  actions: UseCategoriesActions;
}
export default function TreeItem({ 
  item, 
  actions,
  state }: Props) {
  
  useEffect(() => {    
    console.log("searchResult: ", state.searchResult)
  }, [state.searchResult])
  
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
          item.subcategory.map((category) => (
            <TreeItem
              item={category}
              key={category.id}
              state={state}
              actions={actions}
            />
          ))}
      </SubCategory>
    </div>
  );
}
