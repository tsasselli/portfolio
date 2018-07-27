import { Project } from './../interface/project';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[];

  constructor() {
    this.projects = [
      { name: 'Enuf', 
        description: 'Enuf is a social service app that Im building for the 59days of code competioin. It uses Angular paired with Firebase Firestore query functionality to provide users with quick results', 
        image: '../../../../assets/images/enuf_logo_circle.png', 
        url:'https://enufisenough.org',
        gitUrl:'https://github.com/tsasselli/Enuf'
      },
      { name: 'Shopify Organic Marketplace', 
        description: 'The Organic Maretplace was an app I built that lets users log in, add products to thier cart, and proceed to a mock checkout with shipping form. Uses the power of Observables and Firebase for real time updating. Also has admin roles for store owner. ', 
        image: '../../../../assets/images/organic__marketplace-leaf.png', 
        url:'https://shopify-e2ace.firebaseapp.com/',
        gitUrl:'https://github.com/tsasselli/Shopify'
      },
      { name: 'Yelp Camp', 
        description: 'Yelp Camp is a camping website like Yelp that uses express and mongoDb. Users can add campsites and leave comments and reviews.', 
        image: '../../../../assets/images/yelp__camp.png', 
        url:'https://mighty-stream-74807.herokuapp.com/',
        gitUrl:'https://github.com/tsasselli/yelp_camp'
      },
    ]
   }
}
