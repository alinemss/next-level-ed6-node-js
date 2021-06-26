import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../respositories/TagsRepositorie";

class CreateTagsService {
  async execute(name: string){
    const tagsRepositories = getCustomRepository(TagsRepositories);

    if(!name){
      const err = new Error("Incorret name");
      throw err.message
    }

    const tagAlreadyExists = await tagsRepositories.findOne({
      name,
    });

    if(tagAlreadyExists){
      const err = new Error("Tag Already Exists");
      throw err.message
    }

    const tag = tagsRepositories.create({
      name,
    });

    await tagsRepositories.save(tag);

    return tag;

  }

}

export {CreateTagsService}