import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Project} from "../../model/project.model";

@Component({
  selector: 'app-projectcreate',
  templateUrl: './projectcreate.component.html',
  styleUrls: ['./projectcreate.component.css']
})
export class ProjectcreateComponent {
  project: Project | undefined = undefined

  constructor(
    private router: Router
  ) {
  }

  gotoProjectList() {
    this.router.navigateByUrl("project-list")
  }
}
