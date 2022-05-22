const {check} = require ("express-validator")


const validateCreate = [
   check("nombre")
   .exists()
   .not()
   .isEmpty(),
   check("edad")
   .exists()
   .not()
   .isNumeric(),
   check("email")
   .exists()
   .isEmail(),
   (req, res, next) => {}
]

module.exports = { validateCreate}