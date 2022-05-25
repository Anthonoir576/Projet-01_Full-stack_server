
require('dotenv').config({ path: './.env' });


export const corsOptions: any = {
    'Access-Control-Allow-Origin': ['http://localhost:3000/Projet-01_Full-stack_client', 'http://localhost:3000'],
    credentials        : true,
    'allowedHeaders'   : ['sessionId', 'Content-Type', 'Origin', 'X-Requested-With', 'X-Auth-Token', 'Content', 'Accept', 'Authorization' ],
    'exposedHeaders'   : ['sessionId'],
    'methods'          : 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'preflightContinue': false
};