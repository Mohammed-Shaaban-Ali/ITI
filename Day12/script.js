let a=3;
let b=5;
[a,b]=[b,a]
console.log(`
  a : ${a}
  b:${b}
  `);




































// ------------------------------
console.log("");
console.log("--------------- Start Task2 -----------------");
console.log("");

function getMinMax(arr) {
  var numbers = [...arr];
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return { min, max };
}

const { min, max } = getMinMax([3, 7, 1, 9, 4, 2, 8]);

console.log(`Min value: ${min}`);
console.log(`Max value: ${max}`);

// ----------------------
console.log("");
console.log("--------------- Start Task3 -----------------");
console.log("");

const fruits = ["apple", "strawberry", "banana", "orange", "mango"];

const areAllStrings = fruits.every((fruit) => typeof fruit === "string");
console.log(`Are all elements strings? ${areAllStrings}`);
console.log("-------------");
const someStartWithA = fruits.some((fruit) => fruit.startsWith("a"));
console.log(`Do some elements start with 'a'? ${someStartWithA}`);
console.log("-------------");

const filteredFruits = fruits.filter(
  (fruit) => fruit.startsWith("b") || fruit.startsWith("s")
);
console.log("Filtered fruits:", filteredFruits);
console.log("-------------");

const likedFruits = fruits.map((fruit) => `I like ${fruit}`);
console.log("Liked fruits:", likedFruits);
console.log("-------------");

likedFruits.forEach((likedFruit) => console.log(likedFruit));
