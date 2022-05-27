
// ------ IMPORT ------
const ex = require("express");
// --------------------



// ------ VARIABLE ------
const router = ex.Router();
// ----------------------



// ------ ROUTES ------
router.get("/", (request? :any, response? :any) => {
    response.send({response: 'le serveur démarre !'}).status(200);
});
// --------------------



// ------ EXPORT ------
module.exports = router;
// --------------------