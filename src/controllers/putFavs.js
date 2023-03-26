let { favorite } = require("../DB_connection");

async function putFavs(req, res) {
  try {
    const { id, name, species, gender, image } = req.body;

    if (id && name && image && gender && species) {
      const personaje = { id, name, species, gender, image };

      await favorite.create(personaje);
      const favoritos = await favorite.findAll();
      return res.status(200).json(favoritos);
    }

    req.status(400).send({ msg: "Faltan datos" });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
}

module.exports = putFavs;
