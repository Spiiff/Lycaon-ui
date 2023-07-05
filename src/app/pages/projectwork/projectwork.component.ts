import {Component, OnInit} from '@angular/core';
import {Work} from "../../model/project.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../../sevices/project.service";

@Component({
  selector: 'app-projectwork',
  templateUrl: './projectwork.component.html',
  styleUrls: ['./projectwork.component.css']
})
export class ProjectworkComponent implements OnInit {
  listaWork: Work[] = []
  projectId = "0"


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
  ) {

  }

  ngOnInit() {
    this.projectId = this.activatedRoute.snapshot.queryParams["projectId"]
    this.projectService.findWorksByProjectId(this.projectId).subscribe(res => {
      this.listaWork = res
    })
  }
}
