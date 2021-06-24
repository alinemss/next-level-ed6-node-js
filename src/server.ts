import "reflect-metadata";
import express from "express";

import "./database";
import { router } from "./routes";

const app = express();
//Defini o Body como JSOn
app.use(express.json())
//add as rotas
app.use(router);

app.listen(3000, ()=> console.log("Server Is Running"));



//Metodo sem router 

//app.listen(3000, () => console.log("Now Server Is Runnning"));

//app.get("/usuario", (request, response) => {
//  return response.send("Nlw Fire")
//} )

//app.post("/cadastro", (request, response) => {
//  return response.send("Teste rota POST")
//} )
