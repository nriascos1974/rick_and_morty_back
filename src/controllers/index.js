const { Router } = require("express");
let data = require("../utils/favs");
const getCharById = require("./getCharById");
const getCharDetail = require("./getCharDetail");
const router = Router();

router.get("/", function (req, res, next) {
  res.status(200).send("Servidor escuchando...");
});

router.get("/rickandmorty/onsearch/:id", getCharById);

router.get("/rickandmorty/detail/:id", getCharDetail);

router.post("/rickandmorty/fav", function (req, res) {
  const { id, name, image, gender, species } = req.body;

  if (id && name && image && gender && species) {
    const personaje = { id, name, image, gender, species };

    const yaesta = data.filter((person) => person.id === id);

    if (yaesta.length === 0) data.push(personaje);

    return res.status(200).json(data);
  }

  req.status(500).send({ error: "Fatan datos" });
});

router.delete("/rickandmorty/fav/:id", function (req, res) {
  let { id } = req.params;

  if (!id) {
    res.status(400).json({ error: "No se recibió el id" });
  } else {
    if (!data.some((pub) => Number(pub.id) === Number(id))) {
      return res
        .status(400)
        .json({ error: "El id del character no esta en favoritos" });
    }

    let indiceAEliminar = -1;

    for (let i = 0; i < data.length; i++) {
      if (Number(data[i].id) === Number(id)) {
        indiceAEliminar = i;
        break;
      }
    }

    if (indiceAEliminar !== -1) {
      data.splice(indiceAEliminar, 1);
    }

    return res.status(200).json(data);
  }
});

router.get("/rickandmorty/fav", function (req, res) {
  res.status(200).json(data);
});

module.exports = router;
