import { Skill } from './../../../interface/skill';
import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { SkillService } from '../../../services/skill.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ]),
    trigger('fadeIn', [
      state('hidden', style({ opacity: 0 })),
      state('shown', style({ opacity: 1 })),
      transition(':enter', animate('800ms ease-out')),
      transition(':leave', animate('800ms ease-in')),
    ]),
  ]
})
export class SkillsComponent implements OnInit, OnChanges {

  @Input() isVisible : boolean = true;
  skills: Skill[];
  flip: string = 'inactive';

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.skills = this.skillService.skills;
  }

  ngOnChanges() {
   this.isVisible ? 'shown' : 'hidden';
  }

  toggleFlip(skill) {
    skill.flip = (skill.flip == 'inactive') ? 'active' : 'inactive';
  }
}
