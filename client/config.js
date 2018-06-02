import config from '../config/client-config.json';
import envs from 'constants/envs';
import env from 'utils/env';

if (!envs[env]) {
  throw Error(`unknown env '${env}'`);
}

const SOCKET_IO_API = process.env.PORT || config.socketUrl;

export {
  SOCKET_IO_API,
};
