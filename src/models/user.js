const mongoose = require ("mongoose"); 

// Datos a ingresar para la creacion del usuario
const userSchema = mongoose.Schema ({
  nombre: {
      type: String, 
      required: true
  },
  edad: {
      type: Number,
      required: true
  },
  mail: {
      type: String, 
      required: true
  }
});

module.exports = mongoose.model('User', userSchema);
