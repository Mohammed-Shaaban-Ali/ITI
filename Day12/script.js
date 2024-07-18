let a=3;
let b=5;
[a,b]=[b,a]
console.log(`
  a : ${a}
  b : ${b}
  `);

// ------------------------------
console.log("");
console.log("--------------- Start Task2 -----------------");
console.log("");

function getMinMax(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { max,min };
}

const res = getMinMax([3, 7, 1, 9, 4, 2, 8]);

console.log(`Min value: ${res.min}`);
console.log(`Max value: ${res.max}`);

// ----------------------
console.log("");
console.log("--------------- Start Task3 -----------------");
console.log("");

const fruits = ["apple", "strawberry", "banana", "orange", "mango"];

const areAllStrings = fruits.every((fruit) => typeof fruit === "string");
console.log(areAllStrings);
console.log("-------------");

const someStartWithA = fruits.some((fruit) => fruit.startsWith("a"));
console.log(someStartWithA);
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
