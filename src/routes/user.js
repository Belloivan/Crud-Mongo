const express = require("express");
const userSchema = require("../models/user");

const router = express.Router(); 

//crear usuario
router.post("/users", (req, res) => {
   const user = userSchema(req.body );
   user 
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({message: error}));
  });

  //Ver todos los usuario creados
  router.get("/users", (req, res) => {
   userSchema 
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({message: error}));
  });

// Ver un usuario creado
  router.get("/users/:id", (req, res) => {
   const { id } = req.params;
   userSchema 
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({message: error}));
  });

  // Modificar datos de usuario
  router.put("/users/:id", (req, res) => {
   const { id } = req.params;
   const { nombre, edad, mail, dni, contraseña, usuario} = req.body;
   userSchema  
      .updateOne({_id: id}, { $set: {nombre, edad, mail, dni, contraseña, usuario} })
      .then((data) => res.json(data))
      .catch((error) => res.json({message: error}));
  });

    // Eliminar usuario
    router.delete("/users/:id", (req, res) => {
      const { id } = req.params;
      userSchema  
         .remove({_id: id})
         .then((data) => res.json(data))
         .catch((error) => res.json({message: error}));
     });

module.exports = router; 