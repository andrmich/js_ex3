import * as fp from "./fp";

test("it should return all plumbers", () => {
  expect(fp.findAllPlumbers()).toEqual(["July", "Vince"]);
});

test("it should return correct array", () => {
  expect(fp.formatMovieCharactersArray()).toEqual([
    "Evan gra rolę Boxera",
    "Vince gra rolę Plumbera",
    "John gra rolę Redactora",
    "July gra rolę Plumbera",
    "Tim gra rolę Super-mana"
  ]);
});

test("it should return correct complex-array", () => {
  expect(fp.transformMovieArray()).toEqual([
    ["Boxer", { num_of_chars: 1, names: ["Evan"] }],
    ["Plumber", { num_of_chars: 2, names: ["July", "Vince"] }],
    ["Redactor", { num_of_chars: 1, names: ["John"] }],
    ["Super-man", { num_of_chars: 1, names: ["Tim"] }]
  ]);
});
