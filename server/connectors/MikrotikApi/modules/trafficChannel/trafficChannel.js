import { resultsToObj } from 'mikronode';
import _ from 'lodash';

const trafficChannel = (conn, io, Interface, eth) => {
    let channel = conn.openChannel(`traffic-${eth}`);
    channel.data.subscribe( (item) => {
         let InterfaceEth = resultsToObj(item);
         let date =  Date.now() + Number(10800000);
         InterfaceEth = {
             name: InterfaceEth.name,
             rx: Number(InterfaceEth['rx-bits-per-second'])/1024,
             tx:  Number(InterfaceEth['tx-bits-per-second'])/1024,
             date: date
         }
         let NewEth = _.find(Interface, { name: InterfaceEth.name })
         if (NewEth) {
             let index = Interface.indexOf(NewEth)
             Interface[index] = {
                 ...NewEth,
                 rx:InterfaceEth.rx,
                 tx: InterfaceEth.tx,
                 date: InterfaceEth.date
             }
         }
    }, error => {
        console.log("Error during ipScanChannel subscription",error)
    }, () => {
        console.log("Listen channel done.");
    });

    channel.write('/interface/monitor-traffic', [`=interface=${eth}`])
    .then( result => {
        console.log("Listen channel done promise.");
    })
    .catch( error => {
        console.log("Listen channel rejection:", error);
    });
}

export default trafficChannel
