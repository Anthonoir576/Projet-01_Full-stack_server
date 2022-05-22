import express  from 'express';
import http     from 'http';


const socketio  = require('socket.io');
const app       = express();
const server    = http.createServer(app);
const io        = socketio(server);
