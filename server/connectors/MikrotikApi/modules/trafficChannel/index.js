import traffic from './trafficChannel';

const trafficChannel = (conn, io, Interface) => {
    console.log('trafficChannel');
    traffic(conn, io, Interface, 'eth1-wan');
    traffic(conn, io, Interface, 'bridge1');
    traffic(conn, io, Interface, 'eth2');
    traffic(conn, io, Interface, 'eth3');
    traffic(conn, io, Interface, 'eth4');
    traffic(conn, io, Interface, 'eth5-master');
}

export default trafficChannel
