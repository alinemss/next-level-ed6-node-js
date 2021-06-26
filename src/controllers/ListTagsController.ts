import { ListTagsService } from "../services/ListTagsService";
import {Request,Response} from "express"

class ListTagsContoller{
  async handle(request: Request, response: Response){
    const listTagsService = new ListTagsService();

    const tags = await listTagsService.execute();

    return  response.json(tags);
  }
}
export {ListTagsContoller}