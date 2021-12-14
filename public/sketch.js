let clientSocket = io();

let card; //image of the card

clientSocket.on("connect", newConnection);
clientSocket.on("mouseBroadcast", newBroadcast);

function preload() {
  card = loadImage("/assets/birdday.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#e8fdfa");

  const card_width = width;
  imageMode(CENTER);
  image(
    card,
    width / 2,
    height / 2,
    card_width / 1.2,
    (card.height * card_width) / card.width / 1.2
  );
}

function newConnection() {
  console.log(clientSocket.id);
}

// what will happen when someone else connects to the website
function newBroadcast(data) {
  push();
  stroke("magenta");
  strokeWeight(5);
  line(data.x, data.y, data.pmx, data.pmy);
  pop();
}

function draw() {
  // create the button to save the card
  btn = createButton("Save Card and send it to your friend!");
  btn.position(width / 2.3, (height / 20) * 17.5);
  btn.mousePressed(saveToFile);
}

function saveToFile() {
  // save the canvas to file as png
  saveCanvas("Happy BirdDay", "png");
}

function mouseDragged() {
  push();
  stroke("magenta");
  strokeWeight(5);
  line(mouseX, mouseY, pmouseX, pmouseY);
  pop();

  //create message
  let message = {
    x: mouseX,
    y: mouseY,
    pmx: pmouseX,
    pmy: pmouseY,
    color: "magenta",
  };

  //send to the server
  clientSocket.emit("mouse", message);
}
