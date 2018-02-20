const express = require('express');

const config = require('./config');
//const routes = require('./routes');

const app = express();

// Set environment flag
const isDev = config.nodeEnv === 'development';

app.use(express.static('dist'));

app.listen(config.port, (error)=> {
  if (!error) {
    console.log(`App is running as ${config.nodeEnv} on port: ${config.port}`);
  }
});
