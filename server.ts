
// ------ IMPORT ------
import http from 'http';

require('dotenv').config({ path: './src/config/.env' });
// --------------------



// ------ VARIABLE ------
const application  = require('./app');
const server       = http.createServer(application);
const socketio     = require('socket.io');
const io           = socketio(server);
const PORT         = process.env.PORT || 5000; 
const PORT_DEFAULT = process.env.PORT_DEFAULT || 5000; 
// ---------------------



// ------ LANCEMENT SERVEUR ------
server.listen(PORT || PORT_DEFAULT,
    () => console.log(`le serveur démarre sur le port ${PORT || PORT_DEFAULT}`)
);
// -------------------------------  