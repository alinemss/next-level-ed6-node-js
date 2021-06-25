import {Request, Response} from "express"
import { CreateTagsService } from "../services/CreateTagsService";

class CreateTagController{

async handle(request:Request, response:Response){
  
  //pega os dados da requisição
  const {name} = request.body;

  //cria o novo user a partir do service
  const createTagService = new CreateTagsService();

  //leva o user para o repositorio usando o metodo execute presetne no service
  const tag = await createTagService.execute(name);

  //retorna o proprio user em formato json
  return response.json(tag);

}

}

export {CreateTagController};