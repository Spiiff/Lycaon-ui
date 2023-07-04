import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProjectService} from "../../sevices/project.service";
import {Project} from "../../model/project.model";
import {MatDialog} from '@angular/material/dialog';
import {PopupalertComponent} from "../popupalert/popupalert.component";

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})

export class ProjectlistComponent implements OnInit {
  listaProgettiOriginal: Project[] = []
  listaProgettiView: Project[] = []


  constructor(
    private router: Router,
    private projectService: ProjectService,
    private dialog: MatDialog
  ) {

  }

  gotoProjectModify(id: number) {
    this.router.navigateByUrl(`project-modify/${id}`).then()  //mi compila i campi trovando una "route"
  }

  gotoProjectRead(id: number) {
    //this.router.navigateByUrl('project-read'+"/"+id)
    this.router.navigateByUrl(`project-read/${id}`).then()
  }

  gotoProjectCreate() {
    this.router.navigateByUrl("project-create").then()
  }

  ngOnInit() {
    this.projectService.findAll().subscribe(res => {
      this.listaProgettiOriginal = res
      this.listaProgettiView = res
    })
  }

  openDialog(s: string, s2: string, project: Project) {
    this.dialog.open(PopupalertComponent, {
      width: '250px',
      data: project,
      disableClose: true
    })
  }

  filterResult(value: string) {
  this.listaProgettiView = this.listaProgettiOriginal.filter(p=>p.name.toLowerCase().includes(value.toLowerCase()))

    /*this.projectService.findByName("pippo").subscribe(res => {
      console.log(res)
    })
     */
    /*this.dialog.open(PopupalertsearchComponent,{
      width: '250px',
      disableClose: true
    })

     */

  }
}
