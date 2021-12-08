let clientSocket = io();

let color;

clientSocket.on("connect", newConnection);
clientSocket.on("mouseBroadcast", newBroadcast);

function newConnection() {
  console.log(clientSocket.id);
}

function newBroadcast(data) {
  console.log(data);
  fill("red");
  circle(data.x, data.y, 10);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  fill("blue");
  //circle(mouseX, mouseY, 20);

  if (mouseIsPressed) {
    stroke(color);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);

    let message = {
      x: mouseX,
      y: mouseY,
      pmx: pmouseX,
      pmy: pmouseY,
      color: color,
    };
  }
}

push();

noStroke();
fill(255, 155, 66);
rect((3 * width) / 16, height / 8, height / 8, height / 8);

fill(247, 160, 114);
rect((3 * width) / 16, height / 4, height / 8, height / 8);

fill(237, 222, 164);
rect((3 * width) / 16, (3 * height) / 8, height / 8, height / 8);

fill(217, 229, 214);
rect((3 * width) / 16, height / 2, height / 8, height / 8);

fill(15, 163, 177);
rect((3 * width) / 16, (5 * height) / 8, height / 8, height / 8);

fill(82, 63, 56);
rect((3 * width) / 16, (3 * height) / 4, height / 8, height / 8);

pop();

function mouseMoved() {
  let message = {
    x: mouseX,
    y: mouseY,
  };

  clientSocket.emit("mouse", message);
}
