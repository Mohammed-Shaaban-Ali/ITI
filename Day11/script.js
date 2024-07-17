var btn = document.getElementById("generateCircles");

btn.addEventListener("click", () => {
  var canvas = document.getElementById("canvas");
  var color = document.getElementById("inputColor").value;

  var numCircles = 100;
  var context = canvas.getContext("2d");
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
    var x = Math.random() * 800;
    var y = Math.random() * 600;
    var radius = Math.random() * 20 + 10;

    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.stroke();
  }
});
