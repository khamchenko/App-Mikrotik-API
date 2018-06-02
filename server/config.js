import serverConfig from '../config/server-config.json';
import envs from '../constants/envs';
import env from '../utils/env';

if (!envs[env]) {
  throw Error(`unknown env '${env}'`);
}

const PORT = process.env.PORT || serverConfig.port;
const MIKROTIK_API = process.env.PORT || serverConfig.mikrotik.api;

export {
  PORT,
  MIKROTIK_API
};
