const users = [];



exports.addUser        = ({id, name, room}) => {

    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();


    const existingUser = users.find((user) => user.room === room && user.name === name);

    if(!name || !room) return { error: 'Un nom et un salon sont obligatoire !' };
    if(existingUser) return { error: "L'utilisateur est déjà présent !" };

    const user = { id, name, room };

    users.push(user);

    return { user };
};

exports.removeUser     = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if(index !== -1) return users.splice(index, 1)[0];
};

exports.getUser        = (id) => users.find((user) => user.id === id);

exports.getUsersInRoom = (room) => users.filter((user) => user.room === room);



