import { Skill } from './../../../interface/skill';
import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../../services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Skill[];

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.skills = this.skillService.skills;
  }

}
