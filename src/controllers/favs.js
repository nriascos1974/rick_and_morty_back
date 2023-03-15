let data = require("../utils/favs");

function putFavs(req, res) {
  const { id, name, image, gender, species } = req.body;

  if (id && name && image && gender && species) {
    const personaje = { id, name, image, gender, species };

    const yaesta = data.filter((person) => person.id === id);

    if (yaesta.length === 0) data.push(personaje);

    return res.status(200).json(data);
  }

  req.status(500).send({ error: "Fatan datos" });
}

function deleteFav(req, res) {
  let { id } = req.params;

  if (!id) {
    res.status(500).json({ error: "No se recibió el id" });
  } else {
    if (!data.some((pub) => Number(pub.id) === Number(id))) {
      return res
        .status(501)
        .json({ error: "El id del character no esta en favoritos" });
    }

    data = data.filter((person) => Number(person.id) !== Number(id));
    return res.status(200).json(data);
  }
}

function getFavs(req, res) {
  res.status(200).json(data);
}

module.exports = { putFavs, deleteFav, getFavs };
