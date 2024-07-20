let a = 3;
let b = 5;
[a, b] = [b, a];
console.log("--------------- Start Task1 -----------------");
console.log(`
  a : ${a}
  b : ${b}
  `);

// ------------------------------
console.log("");
console.log("--------------- Start Task2 -----------------");
console.log("");

function getMinMax(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return {max, min};
}

let {min,max} = getMinMax([2, 6, 3, 4]);
console.log("Max: ",max);
console.log("Min: ",min);

// ----------------------

console.log("");
console.log("--------------- Start Task3 -----------------");
console.log("");

const fruits = ["apple", "strawberry", "banana", "orange", "mango"];

const areStrings = fruits.every((item) => typeof item === "string");
console.log(`Every :  ${areStrings}`);//true
console.log("-------------");

const someStart = fruits.some((item) => item.startsWith("a"));
console.log(`Some :  ${someStart}`); // true

console.log("-------------");

const filtered = fruits.filter(
  (item) => item.startsWith("b") || item.startsWith("s")
);
console.log("Filtered :", filtered);
console.log("-------------");//[banana,strawberry]

const liked = fruits.map((item) => `I like ${item}`);

liked.forEach((item) => console.log(item));
