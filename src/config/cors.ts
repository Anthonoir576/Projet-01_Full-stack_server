
require('dotenv').config({ path: './.env' });


export const corsOptions: any = {
    origin             : 'http://localhost:3000/Projet-01_Full-stack_client/*',
    credentials        : true
};