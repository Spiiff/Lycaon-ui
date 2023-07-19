import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {Work} from "../../model/project.model";
import {WorksService} from "../../sevices/works.service";

@Component({
  selector: 'app-workcreate',
  templateUrl: './workcreate.component.html',
  styleUrls: ['./workcreate.component.css']
})
export class WorkcreateComponent implements OnInit {
  listWorksOriginal: Work[] = []
  listWorksView: Work[] = []
  work: Work = {id: 0, data: "", description: "", hours: 0, name: "", projectId: 0, user: ""}
  form = this.fb.group({
    name: [""],
    data: [""],
    hours: 0,
    user: [""],
    description: [""],
  })

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private worksService: WorksService
  ) {
  }

  ngOnInit() {   //use this to add a filtered search like listaprogetti
    this.worksService.findAll().subscribe(res => {
      this.listWorksOriginal = res
      this.listWorksView = res
    })
    this.activateRoute.params.subscribe(res => this.work.projectId = res['id'])
    //console.log("pippo")
  }

  gotoWorkFolder() {
    const projectId = this.work?.projectId;
    this.router.navigateByUrl(`project-work?projectId=${projectId}`).then();
  }

  save() {
    const projectId = this.work?.projectId;
    parseInt("projectId", 10)
    //console.log(projectId)
    const name = this.form.get('name')!.value;
    const data = this.form.get('data')!.value;
    const hours = this.form.get('hours')!.value;
    const user = this.form.get('user')!.value;
    const description = this.form.get('description')!.value;
    this.worksService.createWork(projectId, name, data, hours, user, description).subscribe(res => console.log(res));
    this.router.navigateByUrl(`project-work?projectId=${projectId}`).then();
    //this.router.navigateByUrl('project-work?projectId=' + projectId).then();
  }
}
