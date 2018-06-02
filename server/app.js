import express from 'express';
const path = require('path');
const fs = require('fs');

import initHandlers from './handlers';

const app = express();

initHandlers(app);

// app.use('/', (req, res) => {
//     res.set('Content-Type', 'text/html');
//     res.body = fs.readFileSync(path.resolve(__dirname, '../../../public/index.html'));
// });

app.get('/', function (req, res) {
  res.send('Hello World!');
});

export default app;
