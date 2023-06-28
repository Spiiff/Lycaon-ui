import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Project} from "../../model/project.model";

@Component({
  selector: 'app-projectmodify',
  templateUrl: './projectmodify.component.html',
  styleUrls: ['./projectmodify.component.css']
})
export class ProjectmodifyComponent {
  project: Project | undefined = undefined

  constructor(private router: Router) {

  }

  gotoProjectList() {
    this.router.navigateByUrl("project-list")
  }

  protected readonly undefined = undefined;
}
