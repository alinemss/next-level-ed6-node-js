import {Request, Response, NextFunction} from "express";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../respositories/UsersRepositorie";

export async function ensureAdmin(request:Request, response:Response, next:NextFunction){
  
  //Puxa o id do usuário pela validação
  const {user_id} = request;
 
  //verifica se o User_ID que veio da request é admin
  const usersRepositorie = getCustomRepository(UserRepositories);
  const {admin} = await usersRepositorie.findOne(user_id)

  if(admin){

    return next();
  };

  return response.status(401).json({
    error: "Unauthorized"
  });


}
