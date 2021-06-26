import { ListUsersService } from "../services/ListUsersService";
import {Request,Response} from "express"

class ListUsersContoller{
  async handle(request: Request, response: Response){
    const listUsersService = new ListUsersService();

    const users = await listUsersService.execute();

    return  response.json(users);
  }
}
export {ListUsersContoller}