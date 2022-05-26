const users :any = [];



const addUser        = ({id, name, room} :any) => {

    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();


    const existingUser = users.find((user? :any) => user.room === room && user.name === name );


    if (existingUser) {
        return { error: 'Utilisateur déjà existant !' };
    };

    const user = { id: id, name: name, room: room };

    users.push(user);

    return { user };
};

const removeUser     = (id? :any) => {
    const index = users.findIndex((user? :any) => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    };
};

const getUser        = (id? :any) => {
    users.find((user? :any) => user.id === id);
};

const getUsersInRoom = (room? :any) => {
    users.filter((user? :any) => user.room === room );
};

