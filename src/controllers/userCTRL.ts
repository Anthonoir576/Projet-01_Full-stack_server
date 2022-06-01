const users :any = [];



exports.addUser        = ({id, name, room} :any) => {

    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();


    const existingUser = users.find((user? :any) => user.room === room && user.name === name);

    if(!name || !room) return { error: 'Un nom et un salon sont obligatoire !' };
    if(existingUser) return { error: "L'utilisateur est déjà présent !" };

    const user = { id, name, room };

    users.push(user);

    return { user };
};

exports.removeUser     = (id? :any) => {
    const index = users.findIndex((user? :any) => user.id === id);

    if(index !== -1) return users.splice(index, 1)[0];
};

exports.getUser        = (id? :any) => users.find((user :any) => user.id === id);

exports.getUsersInRoom = (room? :any) => users.filter((user :any) => user.room === room);



