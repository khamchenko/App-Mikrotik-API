import { resultsToObj } from 'mikronode'
import _ from 'lodash';

const listenChannel = (conn, io, Interface, eth) => {
    let channel = conn.openChannel(`listen-${eth}`);

    channel.data.subscribe( (item) => {
        let InterfaceEth = resultsToObj(item.data);
        InterfaceEth = {
            name: eth || false,
            status: InterfaceEth['link-partner-advertising'] ? 'connected' : 'disconnected'
        }
        let NewEth = _.find(Interface, { name: eth })
        if (NewEth) {
            let index = Interface.indexOf(NewEth)
            Interface[index] = {
                ...NewEth,
                status: InterfaceEth.status ? InterfaceEth.status : NewEth.status,
            }
        }

    }, error => {
        console.log("Error during listenChannel subscription",error)
    }, () => {
        console.log("Listen channel done.");
    });

    channel.write('/interface/ethernet/monitor', [`=numbers=${eth}`, '=interval=1'])
    .then( result => {
        console.log("Listen channel done promise.");
    })
    .catch( error => {
        console.log("Listen channel rejection:", error);
    });
}

export default listenChannel
