import disconnect from './modules/disconnect';

export default (io, devices) => {

  var connections = [];

  io.on('connection', socket => {

    connections.push(Object.assign(socket, { userID: Date.now() }));

    console.log(`Connect: players ID: ${socket.userID} `);
    console.log(`Connect: ${connections.length} sockets connected`);

    socket.emit('get_devices', devices)

    disconnect(io, socket, connections);
  })
}
