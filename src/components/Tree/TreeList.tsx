import { useState } from "react";
import { Category } from "../../data";
import TreeItem from "./TreeItem";
import "./TreeList.css"
import { filterUserSelectedCategories } from "./utils";

export const TreeList = ({list}: {list: Category[]}) => {  
  const [categories, setCategories] = useState(list);
  return (
    <main style={{ display: "flex", flexDirection: "row" }}>
      <div className="container">
        {categories.map((item) => (
          <TreeItem item={item} key={item.id} setCategories={setCategories} categories={categories}/>
        ))}
      </div>
       <pre>{JSON.stringify(filterUserSelectedCategories(categories), null, 2)}</pre> 
    </main>
  );
};
