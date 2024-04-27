import "./App.css";
import { TreeList } from "./components/Tree/TreeList";
import { categories } from "./data";

function App() {  
  return (
    <div>
      <h1>Recursive Tree</h1>
      <TreeList list={categories} />
    </div>
  );
}

export default App;
