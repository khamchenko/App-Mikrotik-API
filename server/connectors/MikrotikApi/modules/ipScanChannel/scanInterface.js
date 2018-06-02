import { resultsToObj } from 'mikronode';
import _ from 'lodash';

const ipScanChannel = (conn, io, devices, eth) => {
    let channel = conn.openChannel(`scan-${eth}`);
    channel.data.subscribe( (item) => {
         let device = resultsToObj(item);
         device = {
             interface: eth,
             ip: device.address,
             mac: device['mac-address'] || false,
             dns: device.dns || false,
             type: false,
             host_name:  device.dns || false,
             status: 'connected'
        }
        let NewDevices = _.find(devices, { ip: device.ip })
        if (!!!NewDevices && (device.mac || device.dns) && device.ip !== '0.0.0.0') {
            devices.push(Object.assign(device))
        }
        if (NewDevices) {
            let index = devices.indexOf(NewDevices)
            devices[index] = {
                ...NewDevices,
                interface: device.interface ? device.interface : NewDevices.interface,
                mac: device.mac ? device.mac : NewDevices.mac,
                dns: device.dns ? device.dns : NewDevices.dns,
            }
        }
    }, error => {
        console.log("Error during ipScanChannel subscription",error)
    }, () => {
        console.log("Listen channel done.");
    });


    channel.write('/tool/ip-scan', [`=interface=${eth}`])
    .then( result => {
        console.log(result);
        console.log("Listen channel done promise.");
    })
    .catch( error => {
        console.log("Listen channel rejection:", error);
    });
}

export default ipScanChannel
