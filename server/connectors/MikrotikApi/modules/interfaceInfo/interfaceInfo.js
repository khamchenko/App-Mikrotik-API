import { resultsToObj } from 'mikronode';
import _ from 'lodash';

const dhcpClients = (conn, io, Interface) => {
    let channel = conn.openChannel('interface-info');

    channel.data.subscribe( (item) => {
         let Eth = resultsToObj(item);
         Eth = {
             name: Eth.name,
             mac: Eth['mac-address'],
             rx: false,
             tx:  false,
             sum_rx: Eth['rx-byte'],
             sum_tx: Eth['tx-byte'],
             status: false
        }
        let NewEth = _.find(Interface, { name: Eth.name })
        if (!!!NewEth) {
            Interface.push(Object.assign(Eth))
        }
        if (NewEth) {
            let index = Interface.indexOf(NewEth)
            Interface[index] = {
                ...NewEth,
                sum_rx: Eth.sum_rx ? Eth.sum_rx : NewEth.sum_rx,
                sum_tx: Eth.sum_tx ? Eth.sum_tx : NewEth.sum_tx,
            }
        }
    }, error => {
        console.log("Error during ipScanChannel subscription",error)
    }, () => {
        console.log("Listen channel done.");
    });

    channel.write('/interface/print', ['=detail', '=interval=1'])
        .then( result => {
            console.log("Listen channel done promise.");
        })
        .catch( error => {
            console.log("Listen channel rejection:", error);
        });
}

export default dhcpClients
