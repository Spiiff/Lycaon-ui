import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Work} from "../../model/work.model";
import {ActivatedRoute, Router} from "@angular/router";
import {WorksService} from "../../sevices/works.service";

@Component({
  selector: 'app-workmodify',
  templateUrl: './workmodify.component.html',
  styleUrls: ['./workmodify.component.css']
})

//@Input()

export class WorkmodifyComponent implements OnInit {
  work: Work = {id: 0, date: "", description: "", hours: 0, name: "", projectId: 0, user: ""}
  form = this.fb.group({
    name: [""],
    date: [""],
    hours: 0,
    user: [""],
    description: [""],
    projectId: 0
  })

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private worksService: WorksService
  ) {
  }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id']
    this.worksService.findById(id).subscribe(res => {
      this.work = res;
      this.form.patchValue({
        name: res.name,
        description: res.description,
        date: res.date,
        user: res.user,
        hours: res.hours,
        projectId: res.projectId
      }); //takes new values of name & description
    })
  }

  savework() {
    //const projectId = this.work?.projectId;
    this.work.projectId = this.form.get("projectId")!.value!;
    this.work.id = this.work.id!;
    //console.log(projectId)
    this.work.name = this.form.get('name')!.value!;
    this.work.date = this.form.get('date')!.value!;
    this.work.hours = this.form.get('hours')!.value!;
    this.work.user = this.form.get('user')!.value!;
    this.work.description = this.form.get('description')!.value!;
    this.worksService.rewriteWork(this.work).subscribe(res => console.log(res));
    this.router.navigateByUrl(`project-work?projectId=${this.work.projectId}`).then();
  }

  gotoWorkList() {
    const projectId = this.work?.projectId;
    this.router.navigateByUrl(`project-work?projectId=${projectId}`).then();
  }
}
