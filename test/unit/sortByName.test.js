const sorting = require("../../app");

const config1 = {
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
  ],
};

module.exports = config1;

const config2 = {
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};

module.exports = config2;

describe("Books names test suit", () => {
  test("Books names should be sorted in ascending order", () => {
    const input = [
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ]
    const output = sorting.sortByName(input)

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]

    expect(output).toEqual(expected);
  });

  test("Keeps original order for equal strings", () => {
    const input = [
      "Гарри Поттер",
      "гарри поттер",
      "Властелин Колец",
      "властелин колец",
      "Волшебник изумрудного города",
      "волшебник изумрудного города",
    ]

    const output = sorting.sortByName(input);

    const expected = [
      "Властелин Колец",
      "властелин колец",
      "Волшебник изумрудного города",
      "волшебник изумрудного города",
      "Гарри Поттер",
      "гарри поттер",
    ]
  
    expect(output).toEqual(expected);
  });
  
  test("Throws an error for undefined input", ()=> {
    expect(()=> sorting.sortByName()).toThrow()
  });

  test("Empty input array should return an empty array", () => {
    const input = [];
    const output = sorting.sortByName(input);
  
    expect(output).toEqual([]);
  });
  
});
