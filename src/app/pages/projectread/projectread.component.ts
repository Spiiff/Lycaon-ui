import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Project} from "../../model/project.model";
import {ProjectService} from "../../sevices/project.service";

@Component({
  selector: 'app-projectread',
  templateUrl: './projectread.component.html',
  styleUrls: ['./projectread.component.css']
})
export class ProjectreadComponent implements OnInit {
  project: Project | undefined = undefined

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private projectService: ProjectService
  ) {

  }

  gotoProjectList() {
    this.router.navigateByUrl("project-list")
  }

  ngOnInit(): void {
    // console.log(this.activateRoute.snapshot.params['id'])
    const id = this.activateRoute.snapshot.params['id']
    //console.log(this.projectService.findById(id))

    //this.project = this.projectService.findById(id)

    // this.activateRoute.paramMap.subscribe((res) => {
    //   //console.log(id)
    // })
  }

  protected readonly undefined = undefined;
}
