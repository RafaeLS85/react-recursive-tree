// sum.test.js
import { expect, test, describe } from "vitest";
import {
  filterNestedCategory,
  filterUserSelectedCategories,
  setCheckedAllRecursively,
  updateCategories,
} from ".";

describe("filterUserSelectedCategories", () => {
  test("should return 0", () => {
    const categories = [
      {
        id: "1",
        label: "Category 1",
        parentId: null,
        isChecked: false,
        showChildren: false,
        subcategory: [
          {
            id: "2",
            label: "Category 2",
            parentId: "1",
            isChecked: false,
            showChildren: false,
            subcategory: [],
          },
        ],
      },
    ];

    expect(filterUserSelectedCategories(categories).length).toBe(0);
  });

  test("should return 3", () => {
    const categories = [
      {
        id: "1",
        label: "Category 1",
        parentId: null,
        isChecked: true,
        showChildren: false,
        subcategory: [
          {
            id: "2",
            label: "Category 2",
            parentId: "1",
            isChecked: true,
            showChildren: false,
            subcategory: [
              {
                id: "3",
                label: "Category 3",
                parentId: "2",
                isChecked: true,
                showChildren: false,
                subcategory: [],
              },
            ],
          },
        ],
      },
    ];

    expect(filterUserSelectedCategories(categories).length).toBe(3);
  });

  test("should return 1", () => {
    const categories = [
      {
        id: "1",
        label: "Category 1",
        parentId: null,
        isChecked: false,
        showChildren: false,
        subcategory: [
          {
            id: "2",
            label: "Category 2",
            parentId: "1",
            isChecked: false,
            showChildren: false,
            subcategory: [
              {
                id: "3",
                label: "Category 3",
                parentId: "2",
                isChecked: true,
                showChildren: false,
                subcategory: [],
              },
            ],
          },
        ],
      },
    ];

    expect(filterUserSelectedCategories(categories).length).toBe(1);
  });
});

//setCheckedAllRecursively

describe("setCheckedAllRecursively", () => {
  test("should return true on root node", () => {
    const categories = {
      id: "1",
      label: "Category 1",
      parentId: null,
      isChecked: false,
      showChildren: false,
      subcategory: [],
    };

    setCheckedAllRecursively(categories, true, false);

    expect(categories.isChecked).toBe(true);
  });

  test("should return true on first subcategory", () => {
    const categories = {
      id: "1",
      label: "Category 1",
      parentId: null,
      isChecked: false,
      showChildren: false,
      subcategory: [
        {
          id: "2",
          label: "Category 2",
          parentId: "1",
          isChecked: false,
          showChildren: false,
          subcategory: [],
        },
      ],
    };

    setCheckedAllRecursively(categories, true, false);

    expect(categories.subcategory[0].isChecked).toBe(true);
  });
});

describe("updateCategories", () => {
  test("should tooggle isChecked", () => {
    const categories = [
      {
        id: "1",
        label: "Category 1",
        parentId: null,
        isChecked: true,
        showChildren: false,
        subcategory: [],
      },
    ];

    const updatedCategories = updateCategories(categories, categories[0]);
    expect(updatedCategories[0].isChecked).toBe(false);
  });
});

describe("filterNestedCategory", () => {
  const categories = [
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
                },
              ],
            },
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
    {
      id: "4",
      label: "Cars",
      parentId: null,
      isChecked: false,
      showChildren: false,
      subcategory: [],
    },
  ];

  test("should return matches with the root category", () => {
    const updatedCategories = filterNestedCategory(categories, {
      name: "Golden",
    });
    expect(updatedCategories[0].label).toBe("Animals");
    expect(updatedCategories.length).toBe(1);
  });
  test("the word golden should be in the third level", () => {
    const updatedCategories = filterNestedCategory(categories, {
      name: "Golden",
    });
    expect(
      updatedCategories[0].subcategory[0].subcategory[0].subcategory[0].label
    ).toBe("Golden Retrievers");
  });
  test("Parent categories should have the showChildren property set to true", () => {
    const updatedCategories = filterNestedCategory(categories, {name: "Golden"} );
    expect(updatedCategories[0].showChildren).toBe(true);
    expect(updatedCategories[0].subcategory[0].showChildren).toBe(true);
    expect(updatedCategories[0].subcategory[0].subcategory[0].showChildren).toBe(true);    
  });
});
