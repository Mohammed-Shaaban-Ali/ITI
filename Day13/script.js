async function getAllUsers() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => display(data))
  //     .catch((err) => console.log(err));

  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    display(data);
  } catch (error) {
    console.log(error);
  }
}

function display(data) {
  let tBody = document.getElementById("body");
  let rows = data
    .map(
      (item) => `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.address.city}</td>
                    <td>${item.phone}</td>
                    <td>${item.website}</td>
                </tr>
                `
    )
    .join("");

  // console.log(rows);

  tBody.innerHTML = rows;
}


// --------------------Task2-----------------------

class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw "Cannot instantiate an abstract class";
    }
  }
  
  area() {
    throw "Method 'area()' Not implemented.";
  }

  perimeter() {
    throw "Method 'perimeter()' Not implemented.";
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
   return Math.PI * this.radius * this.radius;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }

  perimeter() {
    return 4 * this.side;
  }
}

try {
  const myCircle = new Circle(5);
  console.log(`-----------------Circle--------------------`);
  console.log(`Circle area: ${myCircle.area()}`);
  console.log(`Circle perimeter: ${myCircle.perimeter()}`);
  console.log(``);

  const myRectangle = new Rectangle(5, 7);
  console.log(`-----------------Rectangle--------------------`);
  console.log(`Rectangle area: ${myRectangle.area()}`);
  console.log(`Rectangle perimeter: ${myRectangle.perimeter()}`);
  console.log(``);

  const mySquare = new Square(5);
  console.log(`-----------------Square--------------------`);
  console.log(`Square area: ${mySquare.area()}`);
  console.log(`Square perimeter: ${mySquare.perimeter()}`);
  console.log(``);
} catch (error) {
  console.error(error.message);
}
