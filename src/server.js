const http = require("http");
const characters = require("./utils/data");

const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
 
    if (req.url.includes("/rickandmorty/character")) {
      const id = Number(req.url.split("/").at(-1));
      const character = characters.filter((character) => character.id === id);

      res
        .writeHead(200, { "content-type": "application/json" })
        .end(JSON.stringify(character[0]));
    }
  })
  .listen(PORT, "localhost");
