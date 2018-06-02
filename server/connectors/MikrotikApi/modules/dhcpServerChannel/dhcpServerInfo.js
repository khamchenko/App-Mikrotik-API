import { resultsToObj } from 'mikronode';
import _ from 'lodash';

const ipScanChannel = (conn, io, devices) => {
    let channel = conn.openChannel('dhcp-info');

    channel.data.subscribe( (item) => {
         let device = resultsToObj(item);
         device = {
             interface: 'bridge1',
             ip: device.gateway,
             mac: false,
             dns: false,
             type: 'dhcp-server',
             host_name: false,
             status: 'connected'
        }
        let NewDevices = _.find(devices, { ip: device.ip })
        if (!!!NewDevices) {
            devices.push(Object.assign(device))
        }
        if (NewDevices) {
            let index = devices.indexOf(NewDevices)
            devices[index] = {
                ...NewDevices,
                type: device.type ? device.type : NewDevices.type,
            }
        }
    }, error => {
        console.log("Error during ipScanChannel subscription",error)
    }, () => {
        console.log("Listen channel done.");
    });

    channel.write('/ip/dhcp-server/network/print', [`=interval=10`])
    .then( result => {
        console.log("Listen channel done promise.");
    })
    .catch( error => {
        console.log("Listen channel rejection:", error);
    });
}

export default ipScanChannel
