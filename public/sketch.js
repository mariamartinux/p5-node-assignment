let clientSocket = io();

let myColor;

clientSocket.on("connect", newConnection);
clientSocket.on("mouseBroadcast", newBroadcast);

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  // btn = createButton("Save Birthday Card");
  // btn.position(width / 2 - 40, (height / 20) * 17.5);
  // btn.mousePressed(saveToFile);
}

function newConnection() {
  console.log(clientSocket.id);
}

function newBroadcast(data) {
  // console.log(data);
  // noStroke();
  // fill("red");
  // circle(data.x, data.y, 5);
  push();
  stroke("red");
  strokeWeight(5);

  line(data.x, data.y, data.pmx, data.pmy);
  pop();
}

function draw() {
  // noStroke();
  // fill("blue");
  // circle(mouseX, mouseY, 5);
}

function mouseDragged() {
  push();

  stroke("red");
  strokeWeight(5);
  line(mouseX, mouseY, pmouseX, pmouseY);
  pop();
  //crea messaggio
  let message = {
    x: mouseX,
    y: mouseY,
    pmx: pmouseX,
    pmy: pmouseY,
    color: "red",
  };

  // push();
  // btn = createButton("Save Birthday Card");
  // btn.position(width / 2 - 40, (height / 20) * 17.5);
  // btn.mousePressed(saveToFile);
  // pop();

  //send to the server
  clientSocket.emit("mouse", message);
}

// function mouseMoved() {
//   let message = {
//     x: mouseX,
//     y: mouseY,
//   };

//   clientSocket.emit("mouse", message);
// }
