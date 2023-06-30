import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Project} from "../../model/project.model";
import {ProjectService} from "../../sevices/project.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-projectmodify',
  templateUrl: './projectmodify.component.html',
  styleUrls: ['./projectmodify.component.css']
})
export class ProjectmodifyComponent implements OnInit {
  project: Project | undefined = undefined
  form = this.fb.group({
    name: [""],
    description: [""],
  })

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    public projectService: ProjectService
  ) {
  }

  gotoProjectList() {
    this.router.navigateByUrl("project-list")
  }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id']
    this.projectService.findById(id).subscribe(res => {
      this.project = res;
      this.form.patchValue({name: res.name, description: res.description}); //takes new values of name & description
    })
  }

  save() {
    console.log(this.form)
    const id = this.activateRoute.snapshot.params['id']  //takes the id from route
    const name = this.form.get('name')!.value
    const description = this.form.get('description')!.value
    this.projectService.rewriteProject(id, name, description).subscribe(res => console.log(res))
    this.router.navigateByUrl("project-list")
  }

  protected readonly undefined = undefined;
}
