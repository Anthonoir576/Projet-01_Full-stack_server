
require('dotenv').config({ path: './.env' });


export const corsOptions: any = {
    origin: 'http://localhost:3000',
    allowedHeaders: ["my-custom-header"],
    credentials: true
};