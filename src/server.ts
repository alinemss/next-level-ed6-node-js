import "reflect-metadata";
import express, {Request, Response, NextFunction} from "express";
import "express-async-errors";


import "./database";
import { router } from "./routes";

const app = express();
//defini o Body como JSOn
app.use(express.json())
//add as rotas
app.use(router);
//
app.use((err: Error, request:Request, response:Response)=>{
  if(err instanceof Error){
    return response.status(400).json({
      error: err.message
    })
  }
  return response.status(500).json({
    status: "error",
    message: "Internal Serval Error"
  })
} )


app.listen(3000, ()=> console.log("Server Is Running"));



//Metodo sem router 

//app.listen(3000, () => console.log("Now Server Is Runnning"));

//app.get("/usuario", (request, response) => {
//  return response.send("Nlw Fire")
//} )

//app.post("/cadastro", (request, response) => {
//  return response.send("Teste rota POST")
//} )
