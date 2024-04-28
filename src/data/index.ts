
export type Category = {
    id: number;
    label: string;
    parentId: number | null;
    count: number | null;
    subcategory: Category[];
    isChecked: boolean;
}

export const categories: Category[] = [
    {
      id: 1,
      label: "Fruits",
      parentId: null,
      count: 3,
      isChecked: false,
      subcategory: [
        {
          id: 11,
          label: "Apples",
          parentId: 1,
          count: 2,
          isChecked: false,
          subcategory: [
            {
              id: 111,
              label: "Red",
              parentId: 11,
              count: null,
              isChecked: false,
              subcategory: [],
            },
            {
              id: 112,
              label: "Green",
              parentId: 11,
              count: null,
              isChecked: false,
              subcategory: [],
            }
          ],
        },
        {
          id: 12,
          label: "Bananas",
          parentId: 1,
          count: 1,
          isChecked: false,
          subcategory: [
            {
              id: 121,
              label: "Yellow",
              parentId: 12,
              count: null,
              isChecked: false,
              subcategory: [],
            }
          ],
        },
        {
          id: 13,
          label: "Oranges",
          parentId: 1,
          count: null,
          isChecked: false,
          subcategory: [],
        },
      ],
    },
    {
      id: 2,
      label: "Vegetables",
      parentId: null,
      count: 3,
      isChecked: false,
      subcategory: [
        {
          id: 21,
          label: "Carrots",
          parentId: 2,
          count: null,
          isChecked: false,
          subcategory: [],
        },
        {
          id: 22,
          label: "Broccoli",
          parentId: 2,
          count: null,
          isChecked: false,
          subcategory: [],
        },
        {
          id: 23,
          label: "Spinach",
          parentId: 2,
          count: null,
          isChecked: false,
          subcategory: [],
        },
      ],
    },
    {
      id: 3,
      label: "Animals",
      parentId: null,
      count: 3,
      isChecked: false,
      subcategory: [
        {
          id: 31,
          label: "Cats",
          parentId: 3,
          count: null,
          isChecked: false,
          subcategory: [],
        },
        {
          id: 32,
          label: "Dogs",
          parentId: 3,
          count: 1,
          isChecked: false,
          subcategory: [
            {
              id: 321,
              label: "Puppies",
              parentId: 32,
              count: 1,
              isChecked: false,
              subcategory: [
                {
                  id: 3211,
                  label: "Golden Retrievers",
                  parentId: 321,
                  count: null,
                  isChecked: false,
                  subcategory: [],
                }
              ],
            }
          ],
        },
        {
          id: 33,
          label: "Birds",
          parentId: 3,
          count: null,
          isChecked: false,
          subcategory: [],
        },
      ],
    },   
  ];