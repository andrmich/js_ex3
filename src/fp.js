//
// Napisz funkcję która znajdzie wszystkich Plumberów w tablicy postaci.
//

const movieChars = [
  { name: "Evan", role: "Boxer" },
  { name: "Vince", role: "Plumber" },
  { name: "John", role: "Redactor" },
  { name: "July", role: "Plumber" },
  { name: "Tim", role: "Super-man" }
];

export const findAllPlumbers = () => {
  let plumbers = movieChars.filter(movieChars => movieChars.role === "Plumber");
  let names = plumbers.map(function(el) {return el.name})
  return names.sort();
};

//
// Na podstawie wyżej utworzonej tablicy postaci,
// napisz funkcję która zwróci tablicę w podanej postaci: ["Evan gra rolę Boxera", "Vince gra rolę Plumbera", ...]
// Użyj do tego instrukcji map.
//
export const formatMovieCharactersArray = () => {
  let result = movieChars.sort().map(element => {
    return `${element.name} gra rolę ${element.role}a`
  })
  return result
};

//
// Napisz funkcję która zliczy wszystkich Plumberów, Boxerów, Redactorów oraz Super-manów. A wynik poda w postaci:
// [["Plumber", { num_of_chars: 2, names: ["July", "Vince"] }], ...]
// Użyj do tego instrukcji reduce oraz funkcji pomocniczych. Postaraj się nie rozbudowywać mocno kodu!
//
export const transformMovieArray = () => {
let group = movieChars.reduce((r,a) => {
  r[a.role] = [...r[a.role] || [], a.name];
  return r;
  }, {});

let result = []
Object.keys(group).forEach(key => { 
    let obj = {
        num_of_chars: group[key].length , 
        names: Object.values(group[key])
        }
    result.push(key, JSON.stringify(obj)) })
return result;}

// still not passing test because there'are " "
