
// ------ IMPORT ------
import express            from 'express';
// --------------------



// ------ VARIABLE ------
const app     = express();
const router  = require('./src/routes/router');
// ---------------------



// ------ ROUTES ------
app.use('/', router);
// --------------------