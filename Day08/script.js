/**
 * Events
 * --------------------
 * 
 * == attribute on the element   => <button onclick="alert('Button clicked!')">Click me</button>
 * 
 * == attach function            => const button = document.getElementById('myButton');
                                    button.onclick = function() {
                                        alert('Button clicked!');
                                    };

 * == addEventListener            => const button = document.getElementById('myButton');
                                    button.addEventListener('click', function() {
                                        alert('Button clicked!');
                                    }; 

 * ---------------------------------------------------------------------------------------------

 * == BOM => Browser Object Model

 * --------------------

 *  -- window                     => window.alert('Hello, World!');

 *  -- screen                     => console.log(screen.width);
*                                 => console.log(screen.height);

 *  -- history                     => history.back();
*                                  => history.forward();

 * -- navigation                   => console.log(navigator.userAgent);

 * -- location                     =>console.log(location.href); 
*                                  =>location.href = 'https://www.example.com'; 

*/

// document.getElementById("errorBtn").addEventListener("click", function () {
//   const messageDiv = document.getElementById("message");
//   messageDiv.className = "error";
//   messageDiv.textContent = "This is an Error Message";
// });

// function errMessage() {
//   const messageDiv = document.getElementById("message");
//   messageDiv.className = "error";
//   messageDiv.textContent = "This is an Error Message";
// }
// function success() {
//   const messageDiv = document.getElementById("message");
//   messageDiv.className = "success";
//   messageDiv.innerHTML = "This is a Success Message";
// }
// ----------------------------------------------

function changeLight() {

  const redLight = document.getElementById("red");
  const yellowLight = document.getElementById("yellow");
  const greenLight = document.getElementById("green");

  setTimeout(() => {
    redLight.className +=" active"
    greenLight.classList.remove("active");

  }, 1000);

  setTimeout(() => {
    redLight.classList.remove("active");
    yellowLight.classList.add("active");
  }, 2000);

  setTimeout(() => {
    yellowLight.classList.remove("active");
    greenLight.classList.add("active");
  }, 3000);
}

setInterval(() => {
  changeLight()
}, 4000);
changeLight()
// ----------------------------------------------
var imageCount = 0;
const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpeg",
  "images/4.webp",
];

var interval;

function next() {
  imageCount == images.length - 1 ? (imageCount = 0) : imageCount++;
  document.getElementById("image").src = images[imageCount];
}

function prv() {
  imageCount == 0 ? (imageCount = images.length - 1) : imageCount--;
  document.getElementById("image").src = images[imageCount];
}

function play() {
  interval=setInterval(function() {
    next()
  },1000);
}


function stop() {
  clearInterval(interval)
}
// function play() {
//   // function playImages() {
//   // next();
//   // timeout = setTimeout(playImages, 1000);
//   // }
//   // playImages();

//   timeout = setInterval(function () {
//     next()
//   }, 1000);
// }
// // window.onload=play
// function stop() {
//   clearTimeout(timeout);
// }
