import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProjectService} from "../../sevices/project.service";
import {Project} from "../../model/project.model";

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {

  listaProgetti: Project[] = []

  constructor(
    private router: Router,
    private projectService: ProjectService
  ) {

  }

  gotoProjectModify(id: number) {
    this.router.navigateByUrl("project-modify")
  }

  gotoProjectRead(id:number) {
    //this.router.navigateByUrl('project-read'+"/"+id)
    this.router.navigateByUrl(`project-read/${id}`)
  }

  gotoProjectDelete() {
    this.router.navigateByUrl("project-delete")
  }

  gotoProjectCreate() {
    this.router.navigateByUrl("project-create")
  }

  ngOnInit() {
    this.listaProgetti = this.projectService.findAll()
    console.log(this.listaProgetti)
  }
}
