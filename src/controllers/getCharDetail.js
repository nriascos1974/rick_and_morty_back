const axios = require("axios");

const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const API_KEY = "c9c4684eb62f.3cbe7e7fb6376e8e878d";
const getCharDetail = (res, id) => {
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
      res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(character));
    })
    .catch((err) =>
      res
        .writeHead(500, { "Content-Type": "text/plain" })
        .end(`Personaje con id ${id} no existe`)
    );
};

module.exports = getCharDetail;
