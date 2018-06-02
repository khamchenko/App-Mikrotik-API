import { resultsToObj } from 'mikronode'
import _ from 'lodash';

const ipPingChannel = (channel, io, devices, done, ip_address) => {
    channel.write('/ping', [`=address=${ip_address}`, '=count=5'])
    .then( result => {
        let ping = resultsToObj(result.data);
        let status = _.every(ping, { 'status': 'timeout'})
        let indexDevice = null;
        if (status) {
            _.forEach(devices, (elem, index) => {
                if (elem.ip == ip_address) {
                    indexDevice = index
                }
            })
            devices[indexDevice].status = 'disconnected';
        } else {
            _.forEach(devices, (elem, index) => {
                if (elem.ip == ip_address) {
                    indexDevice = index
                }
            })
            devices[indexDevice].status = 'connected';
        }
        channel.close();
        done();
    })
    .catch( error => {
        console.log("Listen channel rejection:", error);
    });
}

export default ipPingChannel
