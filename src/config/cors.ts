
require('dotenv').config({ path: './.env' });


export const corsOptions: any = {
    origin             : 'http://localhost:3000/Projet-01_Full-stack_client',
    credentials        : true,
    // allowedHeaders: ["monHeader"],
    // 'allowedHeaders'   : ['sessionId', 'Content-Type', 'Origin', 'X-Requested-With', 'X-Auth-Token', 'Content', 'Accept', 'Authorization' ],
    // 'exposedHeaders'   : ['sessionId'],
    // 'methods'          : 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    // 'preflightContinue': false
};