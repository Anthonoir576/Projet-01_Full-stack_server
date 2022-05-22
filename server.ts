
// ------ IMPORT ------
import express  from 'express';
import http     from 'http';

require('dotenv').config({ path: './src/config/.env' });
// --------------------



// ------ VARIABLE ------
const socketio  = require('socket.io');
const app       = express();
const server    = http.createServer(app);
const io        = socketio(server);
const PORT      = process.env.PORT || 5000;
// ---------------------



// ------ LANCEMENT SERVEUR ------
server.listen(PORT, () => console.log(`le serveur démarre sur le port ${PORT}`));
// -------------------------------  