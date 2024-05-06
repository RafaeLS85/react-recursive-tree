import "./App.css";
import { TreeList } from "./components/Tree/TreeList";
import { useCategories } from "./hooks/useCategories";

function App() { 

  const {state, actions} = useCategories();

  return (
    <div>
      <h1>Recursive Tree</h1>

      <input 
        type="search" 
        id="search-categories" 
        placeholder="Search categories"
        onChange={actions.handleSearch} 
        value={state.searchTerm}
      />

      {!state.categories && <p>Loading...</p>}      
      {state.categories && <TreeList state={state} actions={actions} />}

    </div>
  );
}

export default App;
