import "reflect-metadata";
import express from "express";

import "./database";

const app = express();

app.listen(3000, () => console.log("Now Server Is Runnning"));

app.get("/usuario", (request, response) => {
  return response.send("Nlw Fire")
} )

app.post("/cadastro", (request, response) => {
  return response.send("Teste rota POST")
} )
