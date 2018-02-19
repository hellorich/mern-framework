const express = require('express');

const serverConfig = require('./config');
const routes = require('./routes');

const app = express();

// Set environment flag
const isDev = serverConfig.nodeEnv === 'development';

app.use(express.static('static'));

app.listen(serverConfig.port, (error)=> {
  if (!error) {
    console.log(`App is running as ${serverConfig.nodeEnv} on port: ${serverConfig.port}`);
  }
});
