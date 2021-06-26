import {Request, Response, NextFunction} from "express";
import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../respositories/TagsRepositorie";
import { UserRepositories } from "../respositories/UsersRepositorie";

export async function ensureTag(request:Request, response:Response, next:NextFunction){
  
  //Puxa a tag do requestbody enviado
  const {tag_id} = request.body;
  const {user_id} = request;
 
  //verifica se a tag que veio da request existe
  const tagsRepositorie = getCustomRepository(TagsRepositories);
  const userRepositorie = getCustomRepository(UserRepositories);

  const tag = await tagsRepositorie.findOne(tag_id)

  const {admin} = await userRepositorie.findOne(user_id)

  if(tag){
    return next();
  };

  if(admin){
    return response.status(406).json({error:
    "Cadastrar Tag"})
  }

  return response.status(401).json({
    error: "Tag não Existe"
  });
}