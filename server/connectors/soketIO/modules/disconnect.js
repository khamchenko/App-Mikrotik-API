export default (io, socket, connections) => {
  socket.on('disconnect', () => {
    console.log(`Disconnected: user ID: ${socket.userID} `);
    connections.splice(connections.indexOf(socket), 1);
  })
}
