import { resultsToObj } from 'mikronode'
import _ from 'lodash';

const streamChannel = (conn, io, devices, eth) => {
    var channel = conn.openChannel(`torch-${eth}`);

    channel.data.subscribe( (data) => {
         var device = resultsToObj(data);
         if ( device['src-address'] == '104.197.3.80' ) {
             console.log(device);
         }
         device = {
             interface: eth,
             ip: device['src-address'],
             mac: device['mac-address'] || false,
             dns: device.dns || false,
             type: false,
             host_name: false,
             status: 'connected'
        }
        if (!!device.ip && device.ip !== '255.255.255.255' && device.ip !== '0.0.0.0') {
            let NewDevices = _.find(devices, { ip: device.ip })
            if (!!!NewDevices) {
                devices.push(Object.assign(device))
            }
            if (NewDevices) {
                let index = devices.indexOf(NewDevices)
                devices[index] = {
                    ...NewDevices,
                    interface: device.interface ? device.interface : NewDevices.interface,
                }
            }
        }
    }, error => {
        console.log("Error during listenChannel subscription",error)
    }, () => {
        console.log("Listen channel done.");
    });

    channel.write('/tool/torch', ['=ip-protocol=any', '=src-address=0.0.0.0/0', `=interface=${eth}`])
    .then( result => {
        console.log("Listen channel done promise.");
    })
    .catch( error => {
        console.log("Listen channel rejection:", error);
    });
}

export default streamChannel
