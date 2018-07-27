import { environment } from './../environments/environment';
import { ProjectService } from './services/project.service';
import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebProjectsComponent } from './home/components/projects/web-projects/web-projects.component';
import { IosSkillsComponent } from './home/components/skills/ios-skills/ios-skills.component';
import { SkillsComponent } from './home/components/skills/skills.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillService } from './services/skill.service';
import { ContactComponent } from './home/components/contact/contact/contact.component';
import { AboutComponent } from './home/components/about/about/about.component';
import { IntrestsComponent } from './home/components/about/intrests/intrests.component';
import { AngularFireModule } from 'angularfire2';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './home/components/contact/contact-form/contact-form.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    routedComponents,
    NavbarComponent,
    SkillsComponent,
    IosSkillsComponent,
    WebProjectsComponent,
    ContactComponent,
    AboutComponent,
    IntrestsComponent,
    ContactFormComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [SkillService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
