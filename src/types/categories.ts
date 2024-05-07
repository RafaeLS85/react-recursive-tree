export type Category = {
  id: string;
  label: string;
  parentId: string | null;
  subcategory: Category[];
  isChecked: boolean;
  showChildren: boolean;
};

export type CategoryFilter = {
  categoryId?: string;
  name?: string;
};

export interface SelectedCategories {
  id: string;
  label: string;
}
