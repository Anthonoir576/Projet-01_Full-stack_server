const users :any = [];



const addUser = ({id, name, room} :any) => {

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

const removeUser = (id :number) => {
    const index = users.findIndex((user? :any) => user.id === id);

    
};






const getUser = () => {

};


const getUsersInRoom = () => {

};

