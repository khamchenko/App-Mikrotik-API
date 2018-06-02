import io from 'socket.io-client';
import { SOCKET_IO_API } from '../../../config'
const socket = io.connect(SOCKET_IO_API);

export default socket;
