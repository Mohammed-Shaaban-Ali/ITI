var btn = document.getElementById("generateCircles");

btn.addEventListener("click", () => {
  var canvas = document.getElementById("canvas");
  var color = document.getElementById("inputColor").value;

  var context = canvas.getContext("2d");

  var numCircles = 100;

  if (localStorage.color) {
    if (localStorage.color == color) {
      numCircles += 100;
    } else {
      numCircles = 100;

      context.fillStyle = "white";
      context.fillRect(0, 0, 800, 600);
      localStorage.color = color;
    }

  } else {
    localStorage.color = color;
  }

  context.strokeStyle = color;


  for (let i = 0; i < numCircles; i++) {
    var x = Math.random() * 800; // 0 - 1
    var y = Math.random() * 600;

    context.beginPath();
    context.arc(x, y, 20, 0, Math.PI * 2, false);
    context.stroke();
  }
});
