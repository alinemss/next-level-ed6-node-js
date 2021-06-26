import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne} from "typeorm";
//instalar biblioteca uuid e puxas os types
import { v4 as uuid } from "uuid";
import { Tag } from "./Tag";
import { User } from "./User";

@Entity("compliments")
class Compliments{

  @PrimaryColumn()
  readonly id: string

  @Column()
  user_sender: string

  @JoinColumn({name:"user_sender"})
  @ManyToOne(()=>User)
  userSender: User
  
  @Column()
  user_receiver:string

  @JoinColumn({name:"user_receiver"})
  @ManyToOne(()=>User)
  userReceiver: User
    
  @Column()
  tag_id: string
  
  //para realizar o join com a tabela Tag 
  @JoinColumn({name: "tag_id"})
  //definir o tipo de relacionamento
  @ManyToOne(()=>Tag)
  tag: Tag;

  @Column()
  message: string
  
  @CreateDateColumn()
  created_at: Date

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }

};

export{Compliments}