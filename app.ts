
// ------ IMPORT ------
import express            from 'express';
import { corsControls }   from "./src/config/cors";
// --------------------



// ------ VARIABLE ------
const app     = express();
const cors    = require('cors');
const router  = require('./src/routes/router');
// ---------------------



// ------ ROUTES ------
app.use(cors(corsControls));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);
// --------------------