import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
//instalar biblioteca uuid e puxas os types
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
  //readonly apenas leitura a inserção vai ser feito pela entity
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  admin: boolean;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}



export{User}

//Entidade < - > ORM < - > BD (users)