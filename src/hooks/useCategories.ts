import { useEffect, useState } from "react";
import { categoriesData } from "../data";
import {  
  filterNestedCategory,
  mapAllCategoriesToSingleArray,  
  toggleCategoryShowChildren,
  updateCategories,
} from "../components/Tree/utils";
import { Category, SelectedCategories } from "../types/categories";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState<SelectedCategories[]>();  

  const handleClick = (item: Category) => {
    setCategories(toggleCategoryShowChildren(categories, item))
  };

  const getCategories = ({ search }: { search: string }) => {    
    if(search !== ""){       
        const filteredSubCategories = filterNestedCategory(categoriesData, {name: search});        
        setCategories(filteredSubCategories);
    }else{       
        setCategories(categoriesData);
    }
  };

  const handleSearch = (e: React.BaseSyntheticEvent) => {
    setSearchTerm(e.target.value);
  };

  const handleCheck = (item: Category) => {
    console.log(item);
    setCategories(updateCategories(categories, item));
  };

  useEffect(() => {
    getCategories({ search: searchTerm });
  }, [searchTerm]);

  useEffect(() => {
    setOptions(mapAllCategoriesToSingleArray(categoriesData));
  }, []);

  return {
    state: {
      categories,
      searchTerm,
      options,      
    },
    actions: {
      handleSearch,
      handleCheck,
      handleClick,
    },
  };
};

export type UseCategoriesState = {
  categories: Category[];
  searchTerm: string;
};

export type UseCategoriesActions = {
  handleSearch: (e: React.BaseSyntheticEvent) => void;
  handleCheck: (item: Category) => void;
  handleClick: (item: Category) => void;
};
