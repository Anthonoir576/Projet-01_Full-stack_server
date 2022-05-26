
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
application.set('port',
 process.env.PORT || process.env.PORT_DEFAULT
);  

io.on('connect', (socket? :any) => {

    console.log('Connection d\'un utilisateur !');

    socket.on('disconnect', () => {
        console.log('Déconnection d\'un utilisateur !');
    });
    
});

server.listen(PORT || PORT_DEFAULT,
    () => console.log(`le serveur démarre sur le port ${PORT || PORT_DEFAULT}`)
);
// -------------------------------  