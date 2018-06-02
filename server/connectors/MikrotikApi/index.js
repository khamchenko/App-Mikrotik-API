import mikronode from 'mikronode';

import { MIKROTIK_API } from '../../config';

import listenChannel from './modules/listenChannel';
import ipPingChannel from './modules/ipPingChannel';
import trafficChannel from './modules/trafficChannel';
import ipScanChannel from './modules/ipScanChannel';
import torchChannel from './modules/torchChannel';
import dhcpServerChannel from './modules/dhcpServerChannel';
import interfaceInfo from './modules/interfaceInfo';

const API = new mikronode(MIKROTIK_API);

const MikrotikAPI = (io, devices, Interface) => {
    API.connect()
        .then(([login])=>{
            return login('admin','admin');
        })
        .then(conn => {
            console.log('Logged in');
            conn.closeOnDone(true);

            listenChannel(conn, io, Interface);
            ipScanChannel(conn, io, devices);
            torchChannel(conn, io, devices);
            ipPingChannel(conn, io, devices);
            dhcpServerChannel(conn, io, devices);
            interfaceInfo(conn, io, Interface)
            trafficChannel(conn, io, Interface)

            conn.on('error', (err) => {
                console.log('error', err);
            });
        })
        .catch( err => {
            console.log('ERROR', err);
        });

}

export default MikrotikAPI
