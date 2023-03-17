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

  module.exports = putFavs