import { Skill } from './../interface/skill';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skills;

  constructor() { 
    this.skills = [
      // { title: "MongoDb", cardImage: "../../../../../../assets/images/mongoDb.png", description: "ladjlfjd jajae", flip: "inactive" },
      // { title: "Express", cardImage: "../../../../../../assets/images/skill__express-js.png", description: "ladjlfjd jajae", flip: "inactive" },
      { title: "Angular", cardImage: "../../assets/images/angular.png", description:"ladjlfjd jajae", flip: "inactive", skills: ['Javascript', 'HTML',  'CSS', 'Angular']},
      { title: "MEAN Stack", cardImage: "../../../../../../assets/images/skill__mean.png", description:"ladjlfjd jajae", flip: "inactive", skills: ['Javascript', 'Angular']},
      { title: "HTML, CSS, Javascript", cardImage: "../../../../../../assets/images/skill__html-css.png", description:"ladjlfjd jajae", flip: "inactive", skills: ['Javascript', 'HTML', 'CSS', 'Angular']},
    ]
  }
}
