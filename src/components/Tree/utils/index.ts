import { Category } from "../../../data";

export interface SelectedCategories {
  id: number;
  label: string;
}
export function filterUserSelectedCategories(
  categories: Category[]
): SelectedCategories[] {
  const selectedCategories: SelectedCategories[] = [];

  categories.forEach((category) => {
    if (category.isChecked) {
      selectedCategories.push(category);
    }

    if (category.subcategory) {
      selectedCategories.push(
        ...filterUserSelectedCategories(category.subcategory)
      );
    }
  });

  const result = selectedCategories.map((category) => {
    return {
      id: category.id,
      label: category.label,
    };
  });

  return result;
}


export function mapAllCategoriesToSingleArray(categories: Category[]): SelectedCategories[]  {
  const result: SelectedCategories[] = [];
  categories.forEach((category) => {
    result.push({id: category.id, label: category.label});
    if (category.subcategory) {
      result.push(...mapAllCategoriesToSingleArray(category.subcategory));
    }
  });
  return result;
}





export function setCheckedAllRecursively(
  parentCategory: Category,
  isChecked: boolean,
  isRoot: boolean = true
): void {
  if (!isRoot) {
    parentCategory.isChecked = isChecked;
  }
  parentCategory.subcategory.forEach((subcategory) => {
    setCheckedAllRecursively(subcategory, isChecked, false);
  });
}

export const updateCategories = (
  categories: Category[],
  item: Category
): Category[] => {
  if (!categories) return [];

  return categories.map((category) => {
    if (category.id === item.id) {
      setCheckedAllRecursively(item, !item.isChecked);
      return { ...category, isChecked: !item.isChecked };
    }
    if (category.subcategory) {
      return {
        ...category,
        subcategory: updateCategories(category.subcategory, item),
      };
    }
    return category;
  });
};


export function setShowChildrenOnSearchResult(root: Category[], label: string){

  if(!root) return

  if(!label) return

  console.log("1 setShowChildrenOnSearchResult", root)

  root.forEach((category) => {
    if(category.label.includes(label)){
      console.log("category.label.includes(label)", category.label.includes(label))
      category.showChildren = true
    }
    if(category.subcategory){
      setShowChildrenOnSearchResult(category.subcategory, label)
    }
  })
  // console.log("2 setShowChildrenOnSearchResult", root)
}


export const toggleCategoryShowChildren = (
  categories: Category[],
  item: Category
): Category[] => {
  if (!categories) return [];

  return categories.map((category) => {
    if (category.id === item.id) {
      // setCheckedAllRecursively(item, !item.isChecked);
      return { ...category, showChildren: !item.showChildren };
    }
    if (category.subcategory) {
      return {
        ...category,
        subcategory: toggleCategoryShowChildren(category.subcategory, item),
      };
    }
    return category;
  });
};

export function searchSubCategory(value: string, categories: Category[]) {
  //save the root node
  
  if (value === "") return categories;
  const result: Category[] = [];
  categories.forEach((category) => {
    if (category.label.toLowerCase().includes(value.toLowerCase())) {
      // category.isChecked = true
      
      result.push(category);
    }
    if (category.subcategory) {
      
      result.push(...searchSubCategory(value, category.subcategory)); // get the result but missing the parent
    }
  });

  // console.log("result", result)
  //find the root node and return always from de element with parentId null
  const rootNodes = result.filter((category) => category.parentId !== null);

  if (rootNodes.length === 0) return result;

  return result;
}
//----------------------------------------------------------------------







// export function findRootNode(arrayOfCategories: Category[], category: Category): Category[] {
//   // Find the category in the array
//   const foundCategory = findCategory(arrayOfCategories, category.id);

//   if (!foundCategory) {
//     throw new Error('Category not found in the array');
//   }

//   // Use the found category to find its root node
//   const rootCategories = findRootCategories(arrayOfCategories, foundCategory);
//   if (rootCategories.length === 0) {
//     throw new Error('Root category not found for the given category');
//   }

//   return rootCategories;
// }

// function findCategory(categories: Category[], categoryId: number): Category | undefined {
//   for (const category of categories) {
//     if (category.id === categoryId) {
//       return category;
//     } else {
//       const subcategory = findCategory(category.subcategory, categoryId);
//       if (subcategory) {
//         return subcategory;
//       }
//     }
//   }
//   return undefined;
// }

// function findRootCategories(categories: Category[], category: Category): Category[] {
//   const rootCategories: Category[] = [];

//   // Helper function to recursively backtrack and find root categories
//   function backtrack(category: Category): void {
//     if (category.parentId === null) {
//       rootCategories.push(category);
//     } else {
//       const parentCategory = findCategory(categories, category.parentId);
//       if (parentCategory) {
//         rootCategories.push(parentCategory);
//         backtrack(parentCategory);
//       }
//     }
//   }

//   backtrack(category);

//   return rootCategories;
// }



export function findRootNode(arrayOfCategories: Category[], category: Category): Category[] {
  if(category === null) return arrayOfCategories
  
  // Find the category in the array
  const foundCategory = findCategory(arrayOfCategories, category?.id);

  if (!foundCategory) {
    return []
  }

  // Use the found category to find its root node
  const rootCategories = findRootCategories(arrayOfCategories, foundCategory);
  if (rootCategories.length === 0) {
    throw new Error('Root category not found for the given category');
  }

  return rootCategories;
}

function findCategory(categories: Category[], categoryId: number): Category | undefined {
 
 
  for (const category of categories) {
    if (category.id === categoryId) {
      return category;
    } else {
      const subcategory = findCategory(category.subcategory, categoryId);
      if (subcategory) {
        return subcategory;
      }
    }
  }
  return undefined;
}

function findRootCategories(categories: Category[], category: Category): Category[] {
  const rootCategories: Category[] = [];

  // Helper function to recursively backtrack and find root categories
  function backtrack(category: Category): void {
    if (category.parentId === null) {
      rootCategories.push(category);
    } else {
      const parentCategory = findCategory(categories, category.parentId);
      if (parentCategory) {
        backtrack(parentCategory);
      }
    }
  }

  backtrack(category);

  return rootCategories;
}



// function findRootCategoriesHelper(categories: Category[], category: Category): Category[] {
//   const rootCategories: Category[] = [];

//   // Helper function to recursively backtrack and find root categories
//   function backtrack(category: Category, parentIdToFind: number | null): void {
//     if (category.parentId === null) {
//       rootCategories.push(category);
//     } else if (category.id === parentIdToFind) {
//       rootCategories.push(category);
//     } else {
//       const parentCategory = findCategory(categories, category.parentId);
//       if (parentCategory) {
//         backtrack(parentCategory, parentIdToFind);
//       }
//     }
//   }

//   backtrack(category, category.parentId);

//   return rootCategories;
// }



