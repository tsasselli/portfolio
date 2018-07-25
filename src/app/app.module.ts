import { MaterialModule } from './material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SkillsComponent } from './home/components/skills/skills.component';
import { SkillService } from './services/skill.service';
import { IosSkillsComponent } from './home/components/skills/ios-skills/ios-skills.component';
import { DesignSkillsComponent } from './home/components/skills/design-skills/design-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    routedComponents,
    NavbarComponent,
    SkillsComponent,
    IosSkillsComponent,
    DesignSkillsComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    FlexLayoutModule,
  ],
  providers: [SkillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
