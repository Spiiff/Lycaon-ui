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
    public projectService: ProjectService
  ) {
  }

  gotoProjectList() {
    this.router.navigateByUrl("project-list").then()
  }

  //todo aggiungere bottone vai a modifica progetto
  gotoModify(id: number) {
    this.router.navigateByUrl(`project-modify/${id}`).then()
  }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id']
    this.projectService.findById(id).subscribe(res => {
      this.project = res;
    })

    //this.project = this.projectService.findById(id)
    //this.activateRoute.paramMap.subscribe((res) => {
    //console.log(id)
  }
}
