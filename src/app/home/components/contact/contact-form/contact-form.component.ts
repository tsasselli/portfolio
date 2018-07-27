import { Contact } from './../../../../interface/contact';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, PatternValidator, FormControl } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { ContactService } from '../../../../services/contact.service';
import { patternValidator } from '../../../../../app/shared/pattern-validator';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;
  date = Date();

  constructor(private fb: FormBuilder, 
              private af: AngularFirestore,
              private contactService: ContactService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      message: new FormControl('',[Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.contactForm.value)
   const formValue: Contact = this.contactForm.value
   formValue.date = this.date;
   this.contactService.saveMessageToDb(formValue);
   this.contactForm.reset();
  }
}
