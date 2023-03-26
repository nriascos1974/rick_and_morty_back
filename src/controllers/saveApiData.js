const axios = require("axios");
const { character } = require("../DB_connection");

const getApiData = async () => {
  const characters = [];
  for (let index = 1; index <= 5; index++) {
    try {
      let resultado = await axios(
        `https://rickandmortyapi.com/api/character?page=${index}`
      );
      resultado.data.results.forEach((character) =>
        characters.push({
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          gender: character.gender,
          origin: character.origin?.name,
          image: character.image,
        })
      );
    } catch (error) {
      return { msg: error.message };
    }
  }

  return characters;
};

const saveApiData = async () => {
  try {
    const characters = await getApiData();
    await character.bulkCreate(characters);
    return characters;
  } catch (error) {
    return { msg: error.message };
  }
};

module.exports = saveApiData;
