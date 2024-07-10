// ------------task 1--------------
var name = prompt("Enter a Name");
for (var i = 1; i <= 6; i++) {
  //   document.writeln(`<h"${i}> ${name} </h${i}>`);
  document.writeln("<h" + i + ">" + name + "</h" + i + ">");
}

// ------------task 2--------------
// var num = Number(prompt("Enter a number"));
// if (num % 2 == 0) {
//   document.writeln("<h1>Even</h1>");
// } else {
//   document.writeln("<h1>Odd</h1>");
// }

// ------------task 3--------------
// var num = Number(prompt("Enter a number"));
// if (num > 0) {
//   document.writeln("<h1>positive</h1>");
// } else {
//   document.writeln("<h1>negative</h1>");
// }

// ------------task 4--------------
// var sum = 0;
// var num;
// while (sum <= 100 && num !== 0) {
//   num = Number(prompt("Enter a number"));
//   sum += num;
// }
// document.writeln(`<h1> the sum = ${sum} </h1>`);
