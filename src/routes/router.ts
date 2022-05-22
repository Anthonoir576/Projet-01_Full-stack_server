
// ------ IMPORT ------
import express  from "express";
// --------------------



// ------ VARIABLE ------
const router = express.Router();
// ----------------------



// ------ ROUTES ------
router.get('/', (req? :any, res? :any, next? :any) => {
    res.send('le serveur fonctionne correctement :D');
    if (!req || !res) {
        return console.log('salut');
    };
});
// --------------------



// ------ EXPORT ------
module.exports = router;
// --------------------