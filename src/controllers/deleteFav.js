let { favorite } = require("../DB_connection");

async function deleteFav(req, res) {
  try {
    let { id } = req.params;

    if (!id) {
      res.status(401).json({ error: "No se recibió el id" });
    } else {
      const favorito = await favorite.findByPk(Number(id));

      if (!favorito) {
        return res
          .status(402)
          .json({ error: `El id: ${id} del character no esta en favoritos` });
      }
      favorito.destroy();
      const favoritos = await favorite.findAll();
      return res.status(200).json(favoritos);
    }
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
}

module.exports = deleteFav;
