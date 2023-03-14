const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const { putFavs, deleteFav, getFavs } = require("../controllers/favs");
const router = Router();

router.get("/onsearch/:id", getCharById);

router.get("/detail/:id", getCharDetail);

router.post("/favs", putFavs);

router.delete("/fav/:id", deleteFav);

router.get("/fav", getFavs);

module.exports = router;
