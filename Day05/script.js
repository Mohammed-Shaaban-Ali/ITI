//======================== Task 1 =============================
function fizzBuzz(num) {
  var message;
  if (num % 3 === 0 && num % 5 === 0) message = "FizzBuzz";
  else if (num % 3 === 0) message = "Fizz";
  else if (num % 5 === 0) message = "Buzz";
  else message = "None";

  document.writeln(
    `<h1> The Message: <span style="color: red;font-size: 28px;">${message}</span> </h1>`
  );
}

var num = Number(prompt("Enter a Number"));
fizzBuzz(num);

//======================== Task 2 =============================

// mohmed, shabb
// m o h 
function reverseString(str) {
  return str.split("").reverse().join("");
}
var textToReverse = prompt("Enter a Text");
var reversedResult = reverseString(textToReverse);
// document.writeln(`<h1>${reversedResult}</h1>`);
document.writeln("<h1>"+reversedResult+"</h1>");

//======================== Task 3 =============================

function getNumbers() {
  var sum = 0;
  var mult = 1;
  var division = 1;

  for (var i = 1; i < 6; i++) {
    var num = Number(prompt(`Enter number ${i}:`));
    sum += num;
    mult *= num;
    division /= num;
  }

  document.writeln(`<h2>Sum: ${sum}</h2>`);
  document.writeln(`<h2>Product: ${mult}</h2>`);
  document.writeln(`<h2>Division: ${division}</h2>`);
}

getNumbers();

//======================== Task 4 =============================


//======================== Task 5 =============================
function findCharIndexs(str, char) {
  var indexs = [];

  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      indexs.push(i);
    }
  }
  return indexs;
}
// m oah m m ed       || m
// 0   4 5

var userString = prompt("Enter a string:");
var userChar = prompt("Enter a character:");

var indexs = findCharIndexs(userString, userChar);

document.writeln(`<h2>String: <span style="color: red;font-size: 24px;">${userString}</span> </h2>`);
document.writeln(
  `<h2>The Character <span style="color: red;font-size: 24px;">${userChar}</span>
  was repeated <span style="color: red;font-size: 24px;">${indexs.length}</span> times</h2>`
);
document.writeln(`<h2>indexs: [${indexs.join(", ")}]</h2>`);

