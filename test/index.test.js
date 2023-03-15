const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Route: GET rickandmorty/onsearch/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await session(app).get("/rickandmorty/onsearch/1");
      expect(response.statusCode).toBe(200);
    });
    it("Responde un objeto con las propiedades: id, name, species, gender e image", async () => {
      const response = await session(app).get("/rickandmorty/onsearch/1");
      expect(Object.keys(response.body)).toEqual([
        "id",
        "name",
        "image",
        "gender",
        "species",
      ]);
    });
    it("Si no existe con status: 404", () => {
      return agent
        .get("/rickandmorty/IDqueNoExiste")
        .send()
        .then((response) => expect(response.statusCode).toBe(404));
    });
    it("Si hay un error responde con status: 500", () => {
      return agent
        .get("/rickandmorty/onsearch/10000")
        .send()
        .then((response) => expect(response.statusCode).toBe(500));
    });
  });

  describe("Route: GET rickandmorty/detail/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await session(app).get("/rickandmorty/detail/1");
      expect(response.statusCode).toBe(200);
    });
    it("Responde un objeto con las propiedades: id, name, species, gender e image", async () => {
      const response = await session(app).get("/rickandmorty/detail/1");
      expect(Object.keys(response.body)).toEqual([
        "id",
        "name",
        "image",
        "gender",
        "species",
        "status",
        "origin",
        "location",
      ]);
    });
    it("Si no existe responde con status: 404", () => {
      return agent
        .get("/rickandmorty/IDqueNoExiste")
        .send()
        .then((response) => expect(response.statusCode).toBe(404));
    });
    it("Si hay un error responde con status: 500", () => {
      return agent
        .get("/rickandmorty/onsearch/10000")
        .send()
        .then((response) => expect(response.statusCode).toBe(500));
    });
  });
