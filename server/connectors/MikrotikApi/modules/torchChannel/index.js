import torch from './torchChannel';

const torchChannel = (conn, io, devices) => {
    console.log('torchChannel');
    torch(conn, io, devices, 'bridge1')
}

export default torchChannel
