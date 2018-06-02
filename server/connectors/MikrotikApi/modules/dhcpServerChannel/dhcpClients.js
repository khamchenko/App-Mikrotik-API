import { resultsToObj } from 'mikronode';
import _ from 'lodash';

const dhcpClients = (conn, io, devices) => {
    let channel = conn.openChannel('dhcp');

    channel.data.subscribe( (item) => {
         let device = resultsToObj(item);
         device = {
             interface: false,
             ip: device.address,
             mac: device['mac-address'] || false,
             dns: device.dns || false,
             type: 'dhcp',
             host_name: device['host-name'],
             status: 'connected'
        }
        let NewDevices = _.find(devices, { ip: device.ip })
        if (!!!NewDevices && (device.mac || device.dns)) {
            devices.push(Object.assign(device))
        }
        if (NewDevices) {
            let index = devices.indexOf(NewDevices)
            devices[index] = {
                ...NewDevices,
                mac: device.mac ? device.mac : NewDevices.mac,
                type: device.type ? device.type : NewDevices.type,
                host_name: device.host_name ? device.host_name : NewDevices.host_name,
            }
        }
    }, error => {
        console.log("Error during ipScanChannel subscription",error)
    }, () => {
        console.log("Listen channel done.");
    });

    channel.write('/ip/dhcp-server/lease/print', [`=interval=10`])
    .then( result => {
        console.log("Listen channel done promise.");
    })
    .catch( error => {
        console.log("Listen channel rejection:", error);
    });
}

export default dhcpClients
