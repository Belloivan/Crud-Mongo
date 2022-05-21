const express = require ("express");
const res = require("express/lib/response");
 const mongoose = require ("mongoose");
 require("dotenv").config();
 const userRoutes = require("./routes/user");
 const { validateCreate } = require ("./validators/user");

 const app = express();
 const port = process.env.PORT || 9000;

 //middleware
 app.use(express.json())
 app.use('/api', userRoutes);
 
//routes
app.get("/", (req, res) => {
    res.send("Registrar usuario")
})

app.post("/", validateCreate, (req, res) => {
    res.send("Usuario")
});

//mongodb conexion
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected mongo"))
.catch((error) => console.error(error))

 app.listen(port, () => console.log("server listing on port", port));