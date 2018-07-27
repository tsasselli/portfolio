import { AngularFirestore } from 'angularfire2/firestore';
import { Contact } from './../interface/contact';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contact: Contact;

  constructor(private afs: AngularFirestore) { 
  }

  saveMessageToDb(contact: Contact) {
    this.afs.collection('/messages').add(contact);
  }
}
