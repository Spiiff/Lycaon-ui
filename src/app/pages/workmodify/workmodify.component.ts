import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Work} from "../../model/project.model";
import {ActivatedRoute, Router} from "@angular/router";
import {WorksService} from "../../sevices/works.service";

@Component({
  selector: 'app-workmodify',
  templateUrl: './workmodify.component.html',
  styleUrls: ['./workmodify.component.css']
})

//@Input()

export class WorkmodifyComponent implements OnInit{
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

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id']
    this.worksService.findById(id).subscribe(res => {
      this.work = res;
      this.form.patchValue({name: res.name, description: res.description, data: res.data, user: res.user, hours: res.hours}); //takes new values of name & description
    })
  }

  savework() {
    const projectId = this.work?.projectId;
    const id= this.work.id;
    //console.log(projectId)
    const name = this.form.get('name')!.value;
    const data = this.form.get('data')!.value;
    const hours = this.form.get('hours')!.value;
    const user = this.form.get('user')!.value;
    const description = this.form.get('description')!.value;
    this.worksService.rewriteWork(id,projectId, name, data, hours, user, description).subscribe(res => console.log(res));
    this.router.navigateByUrl(`project-work?projectId=${projectId}`).then();
  }

  get dataFormControl(){
    return this.form.get('data');
  }

  gotoWorkList() {
    const projectId = this.work?.projectId;
    this.router.navigateByUrl(`project-work?projectId=${projectId}`).then();
  }
}
