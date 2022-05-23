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
   .exists(),
   check("dni")
   .isEmpty()
   .isNumeric()
   .exists(),
   check("contraseña")
   .isEmpty()
   .isLength({ min:8}),
   (req, res, next) => {}
]

module.exports = { validateCreate}