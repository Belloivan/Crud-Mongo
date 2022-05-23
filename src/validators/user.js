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
   .isEmpty()
   .not()
   .exists()
   .isEmail(),
   check("usuario")
   .isEmpty()
   .not()
   .exists(),
   check("dni")
   .isEmpty()
   .isNumeric()
   .not()
   .exists(),
   check("contraseña")
   .isEmpty(),
   (req, res, next) => {}
]

module.exports = { validateCreate}