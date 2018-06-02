import { createServer } from 'http';
import socketIO from 'socket.io';

import app from './app';
import SOKET_IO from './connectors/soketIO';
import MikrotikAPI from './connectors/MikrotikApi';

const server = createServer(app);

import { PORT } from './config';

let devices = [];
let Interface = [];

const io = socketIO(server);

SOKET_IO(io, devices, Interface);
MikrotikAPI(io, devices, Interface);

const timerID1 = setInterval(() => {
    io.emit('get_devices', devices)
}, 5000)

const timerID2 = setInterval(() => {
    io.emit('get_Interface', Interface)
}, 1000)

server.listen( PORT, (err) => {
  if (err) throw err;
  console.log(`Server running on port: ${PORT}`);
});

export default server
