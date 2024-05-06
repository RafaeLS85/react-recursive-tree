import { useEffect, useState } from "react";
import { Category, categoriesData } from "../data";
import {
  SelectedCategories,
  mapAllCategoriesToSingleArray, 
  searchSubCategory,
  toggleCategoryShowChildren,
  updateCategories,
} from "../components/Tree/utils";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState<SelectedCategories[]>();
  const [searchResult, setSearchResult] = useState<Category>()

  const handleClick = (item: Category) => {
    setCategories(toggleCategoryShowChildren(categories, item))
  };

  const getCategories = ({ search }: { search: string }) => {
    // console.log("search: ", search)
    
    if(search !== ""){
        const filteredSubCategories = searchSubCategory(search, categoriesData);
        setSearchResult(filteredSubCategories[0])
        // const root = findRootNode(categoriesData, filteredSubCategories[0])        
        // setShowChildrenOnSearchResult(root, search)
        
        setCategories(filteredSubCategories);
    }else{
        setSearchResult(undefined)
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
      searchResult,
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
  searchResult: Category | undefined;
};

export type UseCategoriesActions = {
  handleSearch: (e: React.BaseSyntheticEvent) => void;
  handleCheck: (item: Category) => void;
  handleClick: (item: Category) => void;
};
