// document.getElementById("successBtn").addEventListener("click", function () {
//   const messageDiv = document.getElementById("message");
//   messageDiv.className = "success";
//   messageDiv.textContent = "This is a Success Message";
//   messageDiv.style.display = "block";
// });

document.getElementById("errorBtn").addEventListener("click", function () {
  const messageDiv = document.getElementById("message");
  messageDiv.className = "error";
  messageDiv.textContent = "This is an Error Message";
});

function errMessage() {
    const messageDiv = document.getElementById("message");
  messageDiv.className = "error";
  messageDiv.textContent = "This is an Error Message";
   
  }
function success() {
    const messageDiv = document.getElementById("message");
    console.log(messageDiv);
      messageDiv.className = "success";
      messageDiv.innerHTML = "This is a Success Message";
      messageDiv.style.display = "block";
   
  }

function changeLight() {
  const redLight = document.getElementById("red");
  const yellowLight = document.getElementById("yellow");
  const greenLight = document.getElementById("green");

  setTimeout(() => {
    redLight.classList.add("active");
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

window.onload = changeLight;

var imageCount = 0;
const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpeg",
  "images/4.webp",
];
var timeout;

function next() {
  imageCount == images.length - 1 ? (imageCount = 0) : imageCount++;
  document.getElementById("image").src = images[imageCount];
}

function prv() {
  imageCount == 0 ? (imageCount = images.length - 1) : imageCount--;
  document.getElementById("image").src = images[imageCount];
}

function play() {
  function playImages() {
    next();
    timeout = setTimeout(playImages, 1000);
  }
  playImages();
}

function stop() {
  clearTimeout(timeout);
}
