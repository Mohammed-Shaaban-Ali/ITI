// function getAllUsers() {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
//   xhr.send();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4) {
//       if (xhr.status == 200) {
//         var response = xhr.response;
//         var users = JSON.parse(response);
//         for (let i = 0; i < users.length; i++) {
//           displayData(users[i]);
//           console.log(users[i]);
//         }
//       }
//     }
//   };

//   function displayData(data) {
//     var tableBody = document.querySelector("#dataTable");

//     var newRow = document.createElement("tr");

//     var cellId = document.createElement("td");
//     cellId.innerText = data.id;

//     var cellName = document.createElement("td");
//     cellName.innerText = data.name;

//     var cellEmail = document.createElement("td");
//     cellEmail.innerText = data.email;

//     var cellAddress = document.createElement("td");
//     cellAddress.innerText = data.address.city;

//     var cellPhone = document.createElement("td");
//     cellPhone.innerText = data.phone;

//     var cellWebsite = document.createElement("td");
//     cellWebsite.innerText = data.website;

//     newRow.appendChild(cellId);
//     newRow.appendChild(cellName);
//     newRow.appendChild(cellEmail);
//     newRow.appendChild(cellAddress);
//     newRow.appendChild(cellPhone);
//     newRow.appendChild(cellWebsite);

//     tableBody.appendChild(newRow);
//   }
// }

// ---------------------------

function getAllUsers() {
  const tBody = document.getElementById("body");

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var response = xhr.response;
        var users = JSON.parse(response);
        for (let i = 0; i < users.length; i++) {
          tBody.innerHTML += `
          <tr>
            <td>${users[i].id}</td>
            <td>${users[i].name}</td>
            <td>${users[i].email}</td>
            <td>${users[i].address.city}</td>
            <td>${users[i].phone}</td>
            <td>${users[i].website}</td>
          </tr>
          `;
        }
      }
    }
  };
}

console.log(" --------------Task 2---------------------");
function twoParameters(param1, param2) {
  try {
    if (arguments.length !== 2) {
      throw "Function accepted 2 parameters only";
    }
    console.log(
      "The First argument: " + param1 + " and The sec argument: " + param2
    );
  } catch (error) {
    console.log(error);
  }
}
twoParameters(1, 2);

twoParameters(1);

twoParameters(1, 2, 3);

// -----------------------------------
console.log(" --------------Task 3---------------------");
function sumNumbers() {
  try {
    var sum = 0;
    for (let index = 0; index < arguments.length; index++) {
      if (typeof arguments[index] !== "number") {
        throw "Function accepted numbers only";
      }
      sum += arguments[index];
    }
    console.log("sum = " + sum);
  } catch (error) {
    console.log(error);
  }
}

sumNumbers(1, 2);

sumNumbers(2, 3, 4, 5);

sumNumbers(2, "test");

// -----------------------------------
console.log(" --------------Task 4---------------------");

function reverseParams() {
  var reverseResult = [];
  for (let i = arguments.length - 1; i >= 0; i--) {
    reverseResult.push(arguments[i]);
  }
  return reverseResult;
}

console.log(reverseParams(1, 2, 3));

console.log(reverseParams("test1", "test2", "test3"));
