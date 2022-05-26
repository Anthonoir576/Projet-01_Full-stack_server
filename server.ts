
// ------ IMPORT ------
import http from 'http';

require('dotenv')
    .config({ path: './src/config/.env' });
// --------------------



// ------ VARIABLE ------
const url           = [`${process.env.URL}`];
const application   = require('./app');       
const server        = http.createServer(application);
const socketio      = require('socket.io');
const io            = socketio(server, { cors:{ origin: `${url}` }, Credential: true});
const PORT          = process.env.PORT || 5000; 
const PORT_DEFAULT  = process.env.PORT_DEFAULT || 5000;
const { addUser, removeUser, getUser, getUsersInRoom } = require('./src/controllers/userCTRL'); 
// ---------------------


  
// ------ LANCEMENT SERVEUR ------
application.set('port',
 process.env.PORT || process.env.PORT_DEFAULT
);  

io.on('connection', (socket? :any) => {
    // ---- test -----
    console.log('Connection d\'un utilisateur !');

    socket.on('join', ({ name, room } :any, callback :any) => {
        // ---- test -----
        console.log(name, room);

        const { error, user } = addUser({ id: socket.id, name: name, room: room });  
        
        
        if (error) return callback(error);

        socket.emit('message', {user: 'admin', text: `${user.name}, bienvenue dans le salon : ${user.room}`});
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, a rejoint le salon !`});
        socket.join(user.room);

        callback();
    });

    socket.on('sendMessage', (message :any, callback :any) => {
        const user = getUser(socket.id);
        
        io.to(user.room).emit('message', { user : user.name, text: message });

        callback();
    });

    socket.on('disconnect', () => {
        console.log('Déconnection d\'un utilisateur !');
    });
    
});

server.listen(PORT || PORT_DEFAULT,
    () => console.log(`le serveur démarre sur le port ${PORT || PORT_DEFAULT}`)
);
// -------------------------------  