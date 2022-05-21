const {check} = require ("express-validator")
const res = require ("express/lib/response");

const validateCreate = [
   check("nombre")
   .exists()
   .not()
   .isEmpty(),
   check("edad")
   .exists()
   .not()
   .isNumeric(),
   check("mail")
   .exists()
   .isEmail(),
   (req, res, next) => {}
]

module.exports = { validateCreate}