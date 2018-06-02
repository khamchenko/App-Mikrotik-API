import bodyParser from 'body-parser';
import error from './error.js';
import cors from 'cors';

export default (app) => {
  app.use(error);
  app.use(cors({
    origin: true,
    credentials: true
  }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};
