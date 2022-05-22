
// ------ IMPORT ------
import express from 'express';
// --------------------



// ------ VARIABLE ------
const app     = express();
const router  = require('./src/routes/router');
// ---------------------



// ------ CONFIGURATION ------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ---------------------------



// ------ ROUTES ------
app.use('/', router);
// --------------------