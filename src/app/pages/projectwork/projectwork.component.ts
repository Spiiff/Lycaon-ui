import {Component, OnInit} from '@angular/core';
import {Project} from "../../model/project.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../../sevices/project.service";
import {WorksService} from "../../sevices/works.service";
import {MatDialog} from "@angular/material/dialog";
import {PopupworkdeleteComponent} from "../popupworkdelete/popupworkdelete.component";
import {FormBuilder} from "@angular/forms";
import {Work} from "../../model/work.model";

@Component({
  selector: 'app-projectwork',
  templateUrl: './projectwork.component.html',
  styleUrls: ['./projectwork.component.css']
})
export class ProjectworkComponent implements OnInit {
  listaWork: Work[] = []
  project: Project | undefined = undefined;
  projectId = "1" //todo ecco errore probabile prima era "1"

  form = this.fb.group({
    date: [""]
  })

  hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private workService: WorksService
  ) {
  }

  ngOnInit() {
    this.projectId = this.activatedRoute.snapshot.queryParams['projectId'];
    this.workService.findWorksByProjectId(this.projectId).subscribe(res => {
      this.listaWork = res
    })
    this.projectService.findById(parseInt(this.projectId)).subscribe(res => {  //find name by id of project
      this.project = res;
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

  gotomodifyWork(id: number| undefined) {
    this.router.navigateByUrl(`work-modify/${id}`).then()
  }

}
