let radius = 100;
let x;
let y;
let score = 0;
let r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  newCircle();
}

function draw() {
  background(220);
  fill(r, g, b);
  noStroke();
  ellipse(x, y, radius * 2, radius * 2);
  fill(255, 0, 0);
  text("Score: " + score, 10, 20);
  textSize(25);
}

function mousePressed() {
  let d = dist(mouseX, mouseY, x, y);
  if (d < radius) {
    newCircle();
    score++;
    if (score == 10) {
      radius /= 2;
      adjustTime /= 2;
    }
    if (score == 20) {
      radius /= 4;
      adjustTime / 4;
    }
  }
  setTimeout(function () {
    if (score < 50) {
      noLoop();
      alert("You Lost");
    } else {
      alert("You Won");
    }
  }, 20000);
}

function newCircle() {
  x = random(windowWidth);
  y = random(windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}

let adjustTime = setInterval(newCircle, 1000);
