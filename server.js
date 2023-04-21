//variables
const cors = require("cors");
const axios = require("axios");
const express = require('express');
const path = require('path');
const logger = require('morgan');
require('dotenv').config();
require('./config/database');
const app = express();
const { WebSocketServer } = require('ws');
const http = require('http');

// Spinning the http server and the WebSocket server.
const server = http.createServer();
const wsServer = new WebSocketServer({ server });
//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(require('./config/checkToken'));
app.use(cors({ origin: true }));

//routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/checklist', require('./routes/api/checklist'))
app.use('/api/trips', require('./routes/api/trips'))
// app.use('/api/chat', require('./routes/api/chat'))

//catch all
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

//listener
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Express app running on port ${port}`)
});