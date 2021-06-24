import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../respositories/UsersRepositorie"

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean
}

class CreateUsersService{

  async execute({name,email,admin}:IUserRequest) {
    const userRepository = getCustomRepository(UserRepositories);

    if(!email){
      throw new Error("Email Inválido")
    }
    
    const userAlreadyExists = await userRepository.findOne({
      email,
    });

    if (userAlreadyExists){
      throw new Error("Usuário já existe")
    }
    //para salvar é necessário criar uma instancia
    const user = userRepository.create({
      name,
      email,
      admin,
    });

    //para salvar
    await userRepository.save(user);

    return user;


  }

};

export{CreateUsersService}