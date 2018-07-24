import { Skill } from './../interface/skill';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skills: Skill[];

  constructor() { 
    this.skills = [
      { title: "MongoDb", cardImage: "../../../../../../assets/images/mongoDb.png", description: "ladjlfjd jajae", flip: "inactive" },
      { title: "Express", cardImage: "../../../../../../assets/images/skill__express-js.png", description: "ladjlfjd jajae", flip: "inactive" },
      { title: "Angular", cardImage: "../../assets/images/angular.png", description:"ladjlfjd jajae", flip: "inactive"},
      { title: "Node.js", cardImage: "../../../../../../assets/images/skill_node.png", description:"ladjlfjd jajae", flip: "inactive"},
      { title: "HTML, CSS, Javascript", cardImage: "../../../../../../assets/images/skill__html-css.jpeg", description:"ladjlfjd jajae", flip: "inactive"},
    ]
  }


}
