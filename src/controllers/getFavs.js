let data = require("../utils/favs");

function getFavs(req, res) {
  res.status(200).json(data);
}

module.exports = getFavs


