import { Skill } from './../interface/skill';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skills: Skill[];

  constructor() { 
    this.skills = [
      { title: "Angular", cardImage: "../../assets/images/angular.png", description:"ladjlfjd jajae"},
      { title: "MongoDb", cardImage: "../../../../../../assets/images/mongoDb.png", description:"ladjlfjd jajae"},
    ]
  }


}
