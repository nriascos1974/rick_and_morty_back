const { Router } = require("express");
const { putFavs, deleteFav, getFavs, getCharById, getCharDetail, getAllChars } = require("../controllers");

const routerChar = Router();

routerChar.get("/onsearch/:id", getCharById);

routerChar.get("/allCharacters", getAllChars);

routerChar.get("/detail/:id", getCharDetail);

routerChar.post("/favs", putFavs);

routerChar.delete("/fav/:id", deleteFav);

routerChar.get("/fav", getFavs);

module.exports = routerChar;
