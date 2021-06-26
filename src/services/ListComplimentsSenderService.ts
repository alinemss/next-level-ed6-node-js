import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../respositories/ComplimentsRepositorie"


class ListComplimentsSenderService{

  async execute(user_id: string){

    const complimentsRepositorie = getCustomRepository(ComplimentsRepositories)

    const compliments = await complimentsRepositorie.find({
      where: {
        user_sender: user_id
      },
      relations: ["userReceiver","tag"]
      })
    return compliments;
  }
}

export{ListComplimentsSenderService}