import { Category, CategoryFilter, SelectedCategories } from "../../../types/categories";


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

export function mapAllCategoriesToSingleArray(
  categories: Category[]
): SelectedCategories[] {
  const result: SelectedCategories[] = [];
  categories.forEach((category) => {
    result.push({ id: category.id, label: category.label });
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


export function filterNestedCategory(
  categories: Category[],
  filter: CategoryFilter
): Category[] {
  const filteredCategories: Category[] = [];
  let coincidence = false;

  for (const category of categories) {
    if (filter?.name) {

      // inclusive match
      coincidence = category.label.toLowerCase().includes(filter.name.toLowerCase());

      //strict match
      // coincidence = category.label.toLowerCase() === filter.name.toLowerCase();
    }

    if (filter?.categoryId) {
      coincidence = category.id === filter.categoryId;
    }

    if (coincidence) {
      filteredCategories.push({
        ...category,
        subcategory: [],
      });
    }

    if (category.subcategory) {
      const filteredChildren = filterNestedCategory(
        category.subcategory,
        filter
      );

      if (filteredChildren.length > 0) {
        const filteredCategory: Category = {
          ...category,
          subcategory: filteredChildren,
          showChildren: true,
        };
        filteredCategories.push(filteredCategory);
      }
    }
  }

  return filteredCategories;
}
