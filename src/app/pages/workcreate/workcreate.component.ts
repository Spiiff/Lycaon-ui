import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {Work} from "../../model/work.model";
import {WorksService} from "../../sevices/works.service";

@Component({
  selector: 'app-workcreate',
  templateUrl: './workcreate.component.html',
  styleUrls: ['./workcreate.component.css']
})
export class WorkcreateComponent implements OnInit {
  listWorksOriginal: Work[] = []
  listWorksView: Work[] = []
  work: Work = {id: 0, date: "", description: "", hours: 0, name: "", projectId: 0, user: ""}
  form = this.fb.group({
    name: [""],
    date: [""],
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
    this.activateRoute.params.subscribe(res => this.work.projectId = res['id'])
    //console.log("pippo")
  }

  gotoWorkFolder() {
    const projectId = this.work?.projectId;
    this.router.navigateByUrl(`project-work?projectId=${projectId}`).then();
  }

  save() {
    this.work.projectId = this.work?.projectId!
    this.work.name = this.form.get('name')!.value!;
    this.work.date = this.form.get('date')!.value!;
    this.work.hours = this.form.get('hours')!.value!;
    this.work.user = this.form.get('user')!.value!;
    this.work.description = this.form.get('description')!.value!;
    this.worksService.createWork(this.work).subscribe(res => console.log(res));
    this.router.navigateByUrl(`project-work?projectId=${this.work.projectId}`).then();
    //this.router.navigateByUrl('project-work?projectId=' + projectId).then();
  }
}
