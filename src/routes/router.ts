
// ------ IMPORT ------
import express  from "express";
// --------------------



// ------ VARIABLE ------
const router = express.Router();
// ----------------------



// ------ ROUTES ------
router.get('/', (request? :any, response? :any, next? :any) => {
    response.send('le serveur démarre').status(200);
});
// --------------------



// ------ EXPORT ------
module.exports = router;
// --------------------