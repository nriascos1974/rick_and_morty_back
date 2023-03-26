let {favorite} = require("../DB_connection");

async function getFavs(req, res) {
  try {
    const response = await favorite.findAll()
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send({msg: error.message});
  }
}

module.exports = getFavs


