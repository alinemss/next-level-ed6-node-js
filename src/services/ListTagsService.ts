import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../respositories/TagsRepositorie"


class ListTagsService{

  async execute(){
    
    const tagsRespositories = getCustomRepository(TagsRepositories)

    const tags = tagsRespositories.find();

    return tags;

  }


}

export {ListTagsService}