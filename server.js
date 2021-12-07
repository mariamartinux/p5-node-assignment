console.log("up and running");

let express = require("express"); //loading expr library ina variable

let app = express(); //activated

let port = process.env.PORT || 3000;

let server = app.listen(port); //connection will happen on port 3000

console.log("server is running on http://localhost:" + port);

app.use(express.static("public"));

let serverSocket = require("socket.io");

let io = serverSocket(server);

io.on("connection", newConnection);

function newConnection(newSocket) {
  console.log(newSocket.id);

  newSocket.on("mouse", mouseMessage);

  function mouseMessage(dataReceived) {
    console.log(dataReceived);

    newSocket.broadcast.emit("mouseBroadcast", dataReceived);
  }
}
