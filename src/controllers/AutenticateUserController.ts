import {Request, Response} from "express";
import {AutenticateUsersService} from "../services/AutenticateUsersService"

class AutenticateUsersController{
 
  async handle(request:Request, response:Response){

    const {email,password} = request.body;

    const autenticateUserService = new AutenticateUsersService();

    const token = await autenticateUserService.execute({
      email,
      password,
    });

    return response.json(token);

  }
  

}
export{AutenticateUsersController}