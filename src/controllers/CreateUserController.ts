import {Request, Response} from "express"
import { CreateUsersService } from "../services/CreateUsersService";

class CreateUserController{

async handle(request:Request, response:Response){
  
  //pega os dados da requisição
  const {name,email,admin} = request.body;

  //cria o novo user a partir do service
  const createUserService = new CreateUsersService();

  //leva o user para o repositorio usando o metodo execute presetne no service
  const user = await createUserService.execute({name,email,admin});

  //retorna o proprio user em formato json
  return response.json(user);

}

}

export {CreateUserController};