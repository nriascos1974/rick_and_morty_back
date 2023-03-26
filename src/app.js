const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { routerChar, routerUser } = require("../src/routes");
const user  = require("./utils/user");
const server = express();

// Permitir acceso solo desde un origen específico
const corsOptions = {
  origin: "http://localhost:3000",
};

server.use(cors(corsOptions));

/* Agregar middleware CORS global
server.use(cors()); */

// Middlewares
server.use(express.json());
/*  server.use(morgan("dev"));*/

//Midleware control de acceso
/* server.use("/", (req, res, next) => {
  const { username, password } = req.body;
    if (!password || !username)
    return res
      .status(401)
      .send("Acceso denegado, debe ingresar User y Passwrd!!!");

  user.pass === password && user.user === username
    ? next()
    : res.status(401).send("Acceso denegado!!!");
}); */

// Rutas
server.use("/rickandmorty", routerChar);


module.exports = server;
