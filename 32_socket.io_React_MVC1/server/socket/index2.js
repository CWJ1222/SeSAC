const socketIO = require("socket.io");

function socketHandler(server) {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  io.on("connection", (socket) => {
    console.log(socket.id);
    io.emit("notice", socket.id + "님이 입장했습니다.");
  });
}

module.exports = socketHandler;
