
require('dotenv').config({ path: './.env' });

// λ curl "http://localhost:5000/socket.io/?EIO=4&transport=polling"
// 0{"sid":"bF_sWgeqhDNxHt_LAAAY","upgrades":["websocket"],"pingInterval":25000,"pingTimeout":20000,"maxPayload":1000000}

export const corsOptions: any = {
    'Access-Control-Allow-Origin': ['http://localhost:3000/Projet-01_Full-stack_client', 'http://localhost:3000'],
    credentials        : true,
    'allowedHeaders'   : ['sessionId', 'Content-Type', 'Origin', 'X-Requested-With', 'X-Auth-Token', 'Content', 'Accept', 'Authorization' ],
    'exposedHeaders'   : ['sessionId'],
    'methods'          : 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'preflightContinue': false
};