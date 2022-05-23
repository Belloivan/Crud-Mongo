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
  email: {
      type: String, 
      required: true
  },
  contraseña: {
      type: String,
      require: true
  },
  dni:{
      type: Number,
      require: true
  },
  usuario: {
      type: String,
      require: true
  }
});

module.exports = mongoose.model('User', userSchema);
