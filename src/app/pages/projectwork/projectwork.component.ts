import {Component, OnInit} from '@angular/core';
import {Project, Work} from "../../model/project.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../../sevices/project.service";
import {WorksService} from "../../sevices/works.service";
import {PopupalertComponent} from "../popupalert/popupalert.component";
import {MatDialog} from "@angular/material/dialog";
import {PopupworkdeleteComponent} from "../popupworkdelete/popupworkdelete.component";

@Component({
  selector: 'app-projectwork',
  templateUrl: './projectwork.component.html',
  styleUrls: ['./projectwork.component.css']
})
export class ProjectworkComponent implements OnInit {
  listaWork: Work[] = []
  projectId = "0"  //todo ecco errore probabile

  hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];


  constructor(
    private router: Router,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private workService: WorksService
  ) {

  }

  ngOnInit() {
    this.projectId = this.activatedRoute.snapshot.queryParams["projectId"]
    this.workService.findWorksByProjectId(this.projectId).subscribe(res => {
      this.listaWork = res
    })
  }

  gotoWorkCreate() {
    this.router.navigateByUrl(`work-create/${this.projectId}`).then()
  }

  deleteWork(s: string, s2: string, work: Work) {
    this.dialog.open(PopupworkdeleteComponent, {
      width: '250px',
      data: work,
      disableClose: true
    })
  }

  gotomodifyWork(id: number) {
    this.router.navigateByUrl(`work-modify/${id}`).then()
  }
}
