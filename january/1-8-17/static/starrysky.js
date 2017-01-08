canvas = document.getElementById('canvas');
ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var estrelas = [];

function createStars() {
  estrelas = [];
  for (i = 0; i < canvas.width; i++) {
    estrelas.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      raio: Math.random(),
    })
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "lightblue";
  for (i = 0; i < estrelas.length; i++) {
    var e = estrelas[i];
    ctx.beginPath();
    ctx.arc(e.x, e.y, e.raio, 0, 2 * Math.PI);
    ctx.fill();
  }
}

function update() {
  for (i = 0; i < estrelas.length; i++) {
    var e = estrelas[i];
    e.raio = Math.random();
  }
}

createStars();

function pulse() {
  update();
  draw();
  requestAnimationFrame(pulse);
}

pulse();

window.onresize = function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createStars();
}         
