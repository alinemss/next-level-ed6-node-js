import { Compliments } from "../entities/Compliments";
import { Repository,EntityRepository } from "typeorm";

@EntityRepository(Compliments)
class ComplimentsRepositories extends Repository<Compliments>{

}

export{ComplimentsRepositories}