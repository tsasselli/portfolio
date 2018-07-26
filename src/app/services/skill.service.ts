import { Skill } from './../interface/skill';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skills: Skill[];

  constructor() { 
    this.skills = [
      { title: "Angular", 
        cardImage: "../../assets/images/angular.png", 
        projects: ['Yelp Camp', 'Shopify', 'Enuf'], 
        flip: "inactive",
        skillsList: ['RXJS', 'Angular Router', 'Observables', 'Angular Animations', 'Reactive Forms', 'Class Binding', 'Angular Fire', 'Typescript'],
      },
      { title: "MEAN Stack",
        cardImage: "../../../../../../assets/images/skill__mean.png", 
        projects: ['Lo-Cal'], 
        flip: "inactive", 
        skillsList: ['Express Routing', 'Node Package Manager', 'Passport', 'EJS', 'MVC', 'MongoDb', 'Indexing', 'NoSQL'],
      },
      { title: "HTML, CSS, Javascript", 
        cardImage: "../../../../../../assets/images/skill__html-css.png", 
        projects: ['Yelp Camp', 'To Do List', 'Lo-Cal'],
        flip: "inactive", 
        skillsList: ['Javascript', 'ES6', 'HTML', 'CSS', 'Sass', 'Bootstrap', 'Angular Material'],
      },
      { title: "Design", 
        cardImage: "../../../../../../assets/images/skill__design.png", 
        projects: ['Yelp Camp', 'Shopify', 'Enuf', 'Lo-Cal', 'Community Grown', 'Smart Voter'],
        flip: "inactive", 
        skillsList: ['Sketch', 'Illustrator', 'Photoshop'],
      },
    ]
  }
}
