const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";
/* const URL_BASE = "https://be-a-rym.up.railway.app/api";
const API_KEY = "c9c4684eb62f.3cbe7e7fb6376e8e878d"; */

const getCharById = async (req, res) => {
  const { id } = req.params;

  try {
    /* const response = await axios.get(
      `${URL_BASE}/character/${id}?key=${API_KEY}`
    ); */
    const response = await axios.get(`${URL}${id}`);
    const character = {
      id: response.data.id,
      name: response.data.name,
      image: response.data.image,
      gender: response.data.gender,
      species: response.data.species,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = getCharById;
