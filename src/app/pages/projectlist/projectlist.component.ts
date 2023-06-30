import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProjectService} from "../../sevices/project.service";
import {Project} from "../../model/project.model";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {PopupalertComponent} from "../popupalert/popupalert.component";
import {PopupalertsearchComponent} from "../popupalertsearch/popupalertsearch.component";

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})

export class ProjectlistComponent implements OnInit {
  listaProgetti: Project[] = []

  constructor(
    private router: Router,
    private projectService: ProjectService,
    private dialog: MatDialog
  ) {

  }

  gotoProjectModify(id: number) {
    this.router.navigateByUrl(`project-modify/${id}`)  //mi compila i campi trovando una "route"
  }

  gotoProjectRead(id: number) {
    //this.router.navigateByUrl('project-read'+"/"+id)
    this.router.navigateByUrl(`project-read/${id}`)
  }

  gotoProjectCreate() {
    this.router.navigateByUrl("project-create")
  }

  ngOnInit() {
    this.projectService.findAll().subscribe(res => {
      this.listaProgetti = res
    })
    console.log(this.listaProgetti)
  }

  openDialog(s: string, s2: string, project: Project) {
    this.dialog.open(PopupalertComponent, {
      width: '250px',
      data: project,
      disableClose: true
    })
  }

  filterResult(value: string) {
    this.dialog.open(PopupalertsearchComponent,{
      width: '250px',
      disableClose: true
    })

  }
}
