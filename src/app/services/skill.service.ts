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
        skillsList: ['RXJS', 'Angular Router', 'Observables', 'Angular Animations', 'Reactive Forms', 'Class Binding', 'Angular Fire'],
      },
      { title: "MEAN Stack",
        cardImage: "../../../../../../assets/images/skill__mean.png", 
        projects: ['Yelp Camp', 'Shopify', 'Enuf'], 
        flip: "inactive", 
        skillsList: ['Express Routing', 'Node Package Manager', 'MongoDb', 'MVC', 'NoSQL'],
      },
      { title: "HTML, CSS, Javascript", 
        cardImage: "../../../../../../assets/images/skill__html-css.png", 
        projects: ['Yelp Camp', 'Shopify', 'Enuf'],
        flip: "inactive", 
        skillsList: ['Javascript', 'HTML', 'CSS', 'Angular'],
      },
    ]
  }
}
