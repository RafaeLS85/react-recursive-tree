import { UseCategoriesActions, UseCategoriesState } from "../../hooks/useCategories";
import TreeItem from "./TreeItem";
import "./TreeList.css"

interface Props{
  state: UseCategoriesState
  actions: UseCategoriesActions
}
export const TreeList = ({state, actions}: Props) => {  
  
  return (
    <main style={{ display: "flex", flexDirection: "row" }}>
      <div className="container">
        {state.categories.map((item) => (          
          <TreeItem item={item} key={item.id + Math.random()} state={state} actions={actions} />
        ))}
      </div>
       {/* <pre>{JSON.stringify(filterUserSelectedCategories(categories), null, 2)}</pre>  */}
    </main>
  );
};
