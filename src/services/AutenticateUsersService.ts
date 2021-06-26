import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../respositories/UsersRepositorie";
import { sign } from "jsonwebtoken";


interface IAuthenticateRequest{
  email: string;
  password: string;
}

class AutenticateUsersService{

  async execute({email,password}:IAuthenticateRequest){
    const usersRepositorie = getCustomRepository(UserRepositories);


    //verificar se o email esta correto
    const user = await usersRepositorie.findOne({
      email
    });

    if(!user){
      throw new Error("Email/Password incorrect")
    }

    //verificar se a senha esta correta
    //retorna booleano
    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch){
      throw new Error("Email/Password incorrect")
    }

    //Gerar token

    const token = sign({
      email: user.email
    },"5f8693e6a4a5e55eada3df3b2efc7dc7",{
      subject: user.id,
      expiresIn: "1d"
    })

    return token
  }

}

  export{AutenticateUsersService}