import { useState } from "react";
import { Category } from "../../data";
import TreeItem from "./TreeItem";
import "./TreeList.css"

export const TreeList = ({list}: {list: Category[]}) => {  
  const [categories, setCategories] = useState(list);
  return (
    <main>
      <div className="container">
        {categories.map((item) => (
          <TreeItem item={item} key={item.id} setCategories={setCategories} categories={categories}/>
        ))}
      </div>
       <pre>{JSON.stringify(categories, null, 2)}</pre> 
    </main>
  );
};