import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../respositories/ComplimentsRepositorie"


class ListComplimentsReceiverService{

  async execute(user_id: string){

    const complimentsRepositorie = getCustomRepository(ComplimentsRepositories)

    const compliments = await complimentsRepositorie.find({
      where: {
        user_receiver: user_id
      },
      relations: ["userSender","tag"]

      
    })
    return compliments;
  }
}

export{ListComplimentsReceiverService}