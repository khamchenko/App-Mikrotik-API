import { resultsToObj } from 'mikronode';
import ipPing from './ipPingChannel';
import _ from 'lodash';
import asyncInterval from 'asyncinterval';

const ipPingChannel = (conn, io, devices) => {
    console.log('ipPingChannel');

    asyncInterval( function(done){
        if (devices.length == 0) {
            done()
        } else {
            let devicesLength = devices.length;
            let couter = 0;
            const nextDevice = () => {
                couter++
                if (couter == devicesLength) {
                    done();
                }
            }
            _.forEach(devices, (elem, index) => {
                let channelName = `ipPing-${elem.ip.replace(/\./g,'-')}`
                let channel = conn.openChannel(channelName);
                ipPing(channel, io, devices, nextDevice, elem.ip);
            })
        }

    }, 10);
}

export default ipPingChannel
