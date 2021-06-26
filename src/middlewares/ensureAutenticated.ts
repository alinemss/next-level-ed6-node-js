import {Request, Response, NextFunction} from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
  sub: string
}

export function ensureAutenticated(
  request:Request,
  response:Response,
  next:NextFunction
  ) {

  //Recuperar o Token usar Bearer
  const authToken = request.headers.authorization;
  
  //Validar se o Token foi informado
  if(!authToken){
  return response.status(401).end()
  }
  
  //Validar se está correto

  const [,token] = authToken.split(" ")

  try{
    const {sub} = verify(token, "5f8693e6a4a5e55eada3df3b2efc7dc7") as IPayload;
    request.user_id = sub;

    return next();
  }catch(err){
    return response.status(401).end()
  }
  //Recuperar inf do usuário
  

  

}