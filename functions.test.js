const {
  flatArbitraryDepthArray,
  groupObjectsByKey,
  totalValueOfSpecificProp,
} = require("./adv-array-manip");

const array = [1, 2, 3, 4, [5, 6, 7, [8, [9]]]];
const people = [
  {
    name: "Ahmet",
    age: 19,
    school: "İstanbul Kültür Üniversitesi",
    department: "Bilgisayar Mühendisliği",
    year: 2,
  },
  {
    name: "Özkan",
    age: 24,
    school: "İstanbul Teknik Üniversitesi",
    department: "Fizik",
    year: 3,
  },
  {
    name: "Alper",
    age: 41,
    school: "Boğaziçi Üniversitesi",
    department: "Elektrik Mühendisliği",
    year: 4,
  },
  {
    name: "Serpil",
    age: 26,
    school: "İstanbul Teknik Üniversitesi",
    department: "İngilizce öğretmenliği",
    year: 1,
  },
];

test("flatArbitraryDepthArray flattens array to specified depth", () => {
  expect(flatArbitraryDepthArray(array, 1)).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    [8, [9]],
  ]);
  expect(flatArbitraryDepthArray(array, 2)).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    [9],
  ]);
  expect(flatArbitraryDepthArray(array, 3)).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
});

test("groupObjectsByKey groups objects by their keys", () => {
  const grouped = groupObjectsByKey(people);
  expect(grouped).toEqual({
    name: ["Ahmet", "Özkan", "Alper", "Serpil"],
    age: [19, 24, 41, 26],
    school: [
      "İstanbul Kültür Üniversitesi",
      "İstanbul Teknik Üniversitesi",
      "Boğaziçi Üniversitesi",
      "İstanbul Teknik Üniversitesi",
    ],
    department: [
      "Bilgisayar Mühendisliği",
      "Fizik",
      "Elektrik Mühendisliği",
      "İngilizce öğretmenliği",
    ],
    year: [2, 3, 4, 1],
  });
});

test("totalValueOfSpecificProp calculates total value of specified property", () => {
  expect(totalValueOfSpecificProp(people, "age")).toBe(110);
  expect(totalValueOfSpecificProp(people, "year")).toBe(10);
  expect(totalValueOfSpecificProp(people, "year")).not.toBe(11);
  expect(totalValueOfSpecificProp(people, "name")).toBe(
    "Ahmet Özkan Alper Serpil"
  );
});
