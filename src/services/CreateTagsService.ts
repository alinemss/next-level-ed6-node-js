import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../respositories/TagsRepositorie";

class CreateTagsService {
  async execute(name: string){
    const tagsRepositories = getCustomRepository(TagsRepositories);

    if(!name){
      throw Error("Incorret name")
    }

    const tagAlreadyExists = await tagsRepositories.findOne({
      name,
    });

    if(tagAlreadyExists){
      throw Error("Tag Already Exists");
    }

    const tag = tagsRepositories.create({
      name,
    });

    await tagsRepositories.save(tag);

    return tag;

  }

}

export {CreateTagsService}