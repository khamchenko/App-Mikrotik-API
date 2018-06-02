import scanInterface from './scanInterface';

const ipScanChannel = (conn, io, devices) => {
    console.log('scanInterface');
    scanInterface(conn, io, devices, 'eth1-wan');
    scanInterface(conn, io, devices, 'bridge1');
    scanInterface(conn, io, devices, 'eth2');
    scanInterface(conn, io, devices, 'eth3');
    scanInterface(conn, io, devices, 'eth4');
    scanInterface(conn, io, devices, 'eth5-master');
}

export default ipScanChannel
