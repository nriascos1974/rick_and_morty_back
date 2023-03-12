const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";
const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const API_KEY = "c9c4684eb62f.3cbe7e7fb6376e8e878d";

const getCharDetail = (req, res) => {
  const { id } = req.params;

  axios
    .get(`${URL_BASE}/character/${id}?key=${API_KEY}`)
    .then((response) => response.data)
    .then((data) => {
      const character = {
        id: data.id,
        name: data.name,
        image: data.image,
        gender: data.gender,
        species: data.species,
        status: data.status,
        origin: data.origin,
        location: data.location,
      };
      res.status(200).json(character);
    })
    .catch((err) =>
    res.status(500).json({ error: err.message }));
};

module.exports = getCharDetail;
