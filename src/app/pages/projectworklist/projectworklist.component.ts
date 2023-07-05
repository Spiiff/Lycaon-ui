import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../../sevices/project.service";
import {Project} from "../../model/project.model";

@Component({
  selector: 'app-projectworklist',
  templateUrl: './projectworklist.component.html',
  styleUrls: ['./projectworklist.component.css']
})
export class ProjectworklistComponent implements OnInit {
  listaProgettiOriginal: Project[] = []
  listaProgettiView: Project[] = []

  constructor(
    private router: Router,
    private projectService: ProjectService,
    private activateRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    const id = this.activateRoute.snapshot.params['id']
    this.projectService.findAll().subscribe(res => {
      this.listaProgettiOriginal = res
      this.listaProgettiView = res
    })
  }

  filterResult(value: string) {
    this.listaProgettiView = this.listaProgettiOriginal.filter(p => p.name.toLowerCase().includes(value.toLowerCase()))
  }

  gotoProjectWork(projectId: number) {
    this.router.navigate(['project-work'], {queryParams: {projectId: projectId}})
    //this.router.navigateByUrl(`project-work?projectId=${projectId}`).then()
  }
}
