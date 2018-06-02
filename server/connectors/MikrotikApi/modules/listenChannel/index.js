import status from './listenChannel';

const listenChannel = (conn, io, Interface) => {
    console.log('listenChannel');
    status(conn, io, Interface, 'eth1-wan');
    status(conn, io, Interface, 'eth2');
    status(conn, io, Interface, 'eth3');
    status(conn, io, Interface, 'eth4');
    status(conn, io, Interface, 'eth5-master');
}

export default listenChannel
