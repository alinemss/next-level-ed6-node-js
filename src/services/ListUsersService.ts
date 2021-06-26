import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../respositories/UsersRepositorie"


class ListUsersService{

  async execute(){
    
    const usersRespositories = getCustomRepository(UserRepositories)

    const users = usersRespositories.find();

    return users;

  }


}

export {ListUsersService}