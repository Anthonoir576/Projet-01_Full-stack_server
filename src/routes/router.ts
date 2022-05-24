
// ------ IMPORT ------
import express  from "express";
// --------------------



// ------ VARIABLE ------
const router = express.Router();
// ----------------------



// ------ ROUTES ------
router.get('/', (request? :any, response? :any, next? :any) => {
    response.send('le serveur fonctionne correctement :D');

});
// --------------------



// ------ EXPORT ------
module.exports = router;
// --------------------