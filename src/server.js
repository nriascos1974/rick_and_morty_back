const express = require("express");
const cors = require('cors');
const router = require("../src/routes");
const server = express();
const PORT = 3001;

// Permitir acceso solo desde un origen específico
const corsOptions = {
  origin: 'http://localhost:3000'
};

server.use(cors(corsOptions));

/* Agregar middleware CORS global
server.use(cors()); */

// Middlewares
server.use(express.json());

// Rutas
server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log("Server raised in port => " + PORT);
});
