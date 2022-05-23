const {check} = require ("express-validator")


const validateCreate = [
   check("nombre")
   .exists()
   .not()
   .isEmpty(),
   check("edad")
   .exists()
   .isNumeric(),
   check("email")
   .isEmpty()
   .not()
   .exists()
   .normalizeEmail()
   .isEmail(),
   check("usuario")
   .isEmpty()
   .exists(),
   check("dni")
   .isEmpty()
   .isNumeric()
   .exists(),
   check("contraseña")
   .not()
   .isEmpty()
   .isLength({ min:8}),
   (req, res, next) => {}
]

module.exports = { validateCreate}