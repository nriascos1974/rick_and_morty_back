require('dotenv').config();
const { Sequelize } = require('sequelize');
const character = require('./models/Character');
const favorite = require('./models/Favorite');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

/*
EJERCICIO 01
A la instancia de Sequelize le falta la URL de conexión.
Recuerda pasarle la información de tu archivo '.env'.

URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
*/
const sequelize = new Sequelize(
   // URL
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);

/*
EJERCICIO 03
Debajo de este comentario puedes ejecutar la función de los modelos.
*/
// Ejecutar el modelo:
character(sequelize);
favorite(sequelize);


module.exports = {
   ...sequelize.models,
   sequelize,
};
