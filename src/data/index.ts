import { Category } from "../types/categories";

export const categoriesData: Category[] = [
    {
      id: "1",
      label: "Fruits",
      parentId: null,
      isChecked: false,
      showChildren: false,
      subcategory: [
        {
          id: "11",
          label: "Apples",
          parentId: "1",
          isChecked: false,
          showChildren: false,
          subcategory: [
            {
              id: "111",
              label: "Red",
              parentId: "11",
              isChecked: false,
              showChildren: false,
              subcategory: [],
            },
            {
              id: "112",
              label: "Green",
              parentId: "11",
              isChecked: false,
              showChildren: false,
              subcategory: [],
            }
          ],
        },
        {
          id: "12",
          label: "Bananas",
          parentId: "1",
          isChecked: false,
          showChildren: false,
          subcategory: [
            {
              id: "121",
              label: "Yellow",
              parentId: "12",            
              isChecked: false,
              showChildren: false,
              subcategory: [],
            }
          ],
        },
        {
          id: "13",
          label: "Oranges",
          parentId: "1",          
          isChecked: false,
          showChildren: false,
          subcategory: [],
        },
      ],
    },
    {
      id: "2",
      label: "Vegetables",
      parentId: null,     
      isChecked: false,
      showChildren: false,
      subcategory: [
        {
          id: "21",
          label: "Carrots",
          parentId: "2",          
          isChecked: false,
          showChildren: false,
          subcategory: [],
        },
        {
          id: "22",
          label: "Broccoli",
          parentId: "2",         
          isChecked: false,
          showChildren: false,
          subcategory: [],
        },
        {
          id: "23",
          label: "Spinach",
          parentId: "2",        
          isChecked: false,
          showChildren: false,
          subcategory: [],
        },
      ],
    },
    {
      id: "3",
      label: "Animals",
      parentId: null,     
      isChecked: false,
      showChildren: false,
      subcategory: [
        {
          id: "31",
          label: "Cats",
          parentId: "3",        
          isChecked: false,
          showChildren: false,
          subcategory: [],
        },
        {
          id: "32",
          label: "Dogs",
          parentId: "3",         
          isChecked: false,
          showChildren: false,
          subcategory: [
            {
              id: "321",
              label: "Puppies",
              parentId: "32",             
              isChecked: false,
              showChildren: false,
              subcategory: [
                {
                  id: "3211",
                  label: "Golden Retrievers",
                  parentId: "321",                  
                  isChecked: false,
                  showChildren: false,
                  subcategory: [],
                }
              ],
            }
          ],
        },
        {
          id: "33",
          label: "Birds",
          parentId: "3",         
          isChecked: false,
          showChildren: false,
          subcategory: [],
        },
      ],
    },   
  ];


  