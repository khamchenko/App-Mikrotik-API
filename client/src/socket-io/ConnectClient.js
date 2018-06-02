import socket from './utils' ;

export default () => dispatch => {
    socket.on('connect', () => {
        console.log("SUCCESS CONNECT");
    });
}
