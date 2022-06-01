
// ------ IMPORT ------
require('dotenv').config({ path: './src/config/.env' });
const { addUser, removeUser, getUser, getUsersInRoom } = require('./src/controllers/userCTRL'); 

const http          = require('http');
const express       = require('express');
const socketio      = require('socket.io');
const cors          = require('cors');
const PORT          = process.env.PORT || 5000; 
const PORT_DEFAULT  = process.env.PORT_DEFAULT || 5000;
const routes        = require('./src/routes/router');
const app           = express();
const server        = http.createServer(app);
const io            = socketio(server);
// --------------------


app.use(cors());
app.use(routes);



// ------ LANCEMENT SERVEUR ------
io.on('connect', (socket) => {

    socket.on('join', ({ name, room }, callback) => {

        const { error, user } = addUser({ id: socket.id, name: name, room: room });  
                
        if (error) return callback(error);

        
        socket.emit('message', {user: 'admin', text: `${user.name}, bienvenue dans le salon : ${user.room}`});
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, a rejoint le salon !`});
       
        socket.join(user.room);

        io.to(user.room).emit('roomData', { room: user.room , users: getUsersInRoom(user.room)})

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
    
        io.to(user.room).emit('message', { user: user.name, text: message });
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    
        callback();
      });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if (user) {
            io.to(user.room).emit('message', { user: 'Admin', text: `${user.name}a quitté le salon !` });
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
        };
    });
    
});

server.listen(PORT || PORT_DEFAULT,
    () => console.log(`le serveur démarre sur le port ${PORT || PORT_DEFAULT}`)
);
// -------------------------------  