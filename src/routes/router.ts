
// ------ IMPORT ------
const Express = require("express");
// --------------------



// ------ VARIABLE ------
const router = Express.Router();
// ----------------------



// ------ ROUTES ------
router.get("/", (request? :any, response? :any) => {
    response.send({response: 'le serveur démarre !'}).status(200);
});
// --------------------



// ------ EXPORT ------
module.exports = router;
// --------------------