import { Component, OnInit } from '@angular/core';
import { Project } from '../../../../interface/project';
import { ProjectService } from '../../../../services/project.service';

@Component({
  selector: 'app-web-projects',
  templateUrl: './web-projects.component.html',
  styleUrls: ['./web-projects.component.scss']
})
export class WebProjectsComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.projects;
  }

}
