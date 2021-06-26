import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../respositories/UsersRepositorie"
import {hash} from "bcryptjs"


interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUsersService{

  //Forma de inserir default no admin
  async execute({name,email,admin = false,password}:IUserRequest) {
    const userRepository = getCustomRepository(UserRepositories);

    if(!email){
      const err = new Error("Email Inválido");
      throw err.message
    }
    
    const passwordHash = await hash(password, 8);
    
    const userAlreadyExists = await userRepository.findOne({
      email,
    });

    if (userAlreadyExists){
      const err = new Error("Usuário já existe")
      throw err.message
    }
    //para salvar é necessário criar uma instancia
    const user = userRepository.create({
      name,
      email,
      admin,
      //passar o password criptografado
      password: passwordHash,
    });

    //para salvar
    await userRepository.save(user);

    return user;


  }

};

export{CreateUsersService}