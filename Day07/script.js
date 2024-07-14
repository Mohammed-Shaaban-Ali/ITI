// -------------------Task 1----------------------------

const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpeg",
  "images/4.webp",
];
// 0
// 3
var imageCount = 0;

function next() {
  imageCount == images.length - 1 ? (imageCount = 0) : imageCount++;
  // imageCount++;
  document.getElementById("image").src = images[imageCount];
}
function prv() {
  imageCount == 0 ? (imageCount = images.length - 1) : imageCount--;

  document.getElementById("image").src = images[imageCount];
}

// -------------------Task 2----------------------------

var idCounter = 1;
function addData() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  var pName = document.getElementById("error_name");
  var pAge = document.getElementById("error_age");

  // pName.innerHTML = "";
  // pAge.innerHTML = "";

  if (!name) {
    pName.innerHTML = "Please enter a name";
  } else if (name.length < 3) {
    pName.innerHTML = "Name should be at least 3 characters ";
  } else if (!age) {
    pAge.innerHTML = "Please enter an age";
  } else {
    
    const data = {
      id: idCounter,
      name: name,
      age: parseInt(age),
    };

    idCounter++;

    displayData(data);
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
  }
}

function displayData(data) {
  var tableBody = document.querySelector("#dataTable");

  var newRow = document.createElement("tr");

  var cellId = document.createElement("td");

  cellId.innerText = data.id;

  var cellName = document.createElement("td");
  cellName.innerText = data.name;

  var cellAge = document.createElement("td");
  cellAge.innerText = data.age;

  var cellAction = document.createElement("td");
  cellAction.innerHTML = "<button class='delete-btn'>Delete</button>";

  newRow.appendChild(cellId);
  newRow.appendChild(cellName);
  newRow.appendChild(cellAge);
  newRow.appendChild(cellAction);

  tableBody.appendChild(newRow);
}


