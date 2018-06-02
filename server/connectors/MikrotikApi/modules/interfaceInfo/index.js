import { resultsToObj } from 'mikronode';
import _ from 'lodash';

import Info from './interfaceInfo';

const interfaceInfo = (conn, io, Interface) => {
    console.log('interfaceInfo');
    Info(conn, io, Interface)
}

export default interfaceInfo
