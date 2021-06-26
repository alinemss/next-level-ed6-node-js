import { ListComplimentsReceiverService } from "../services/ListComplimentsRecieverService"
import {Request, Response} from "express";


class ListComplimentsReceiverController{

  async handle(request:Request, response:Response){
    const {user_id} = request;

    const listComplimentsReceiverService = new ListComplimentsReceiverService();

    const compliments = await listComplimentsReceiverService.execute(user_id)

    return response.json({compliments})

  }

}

export{ListComplimentsReceiverController}