let data = require("../utils/favs");

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

  module.exports = deleteFav