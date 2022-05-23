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
   .normalizeEmail()
   .isEmail(),
   check("usuario")
   .not()
   .isEmpty()
   .exists(),
   check("dni")
   .not()
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