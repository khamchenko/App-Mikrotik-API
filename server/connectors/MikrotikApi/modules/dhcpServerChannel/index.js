import { resultsToObj } from 'mikronode';
import _ from 'lodash';

import dhcpClients from './dhcpClients';
import dhcpServerInfo from './dhcpServerInfo';

const dhcpServerChannel = (conn, io, devices) => {
    console.log('dhcpServerChannel');
    dhcpClients(conn, io, devices);
    dhcpServerInfo(conn, io, devices)
}

export default dhcpServerChannel
