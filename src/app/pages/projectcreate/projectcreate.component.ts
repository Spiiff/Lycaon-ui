import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Project} from "../../model/project.model";
import {ProjectService} from "../../sevices/project.service";
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-projectcreate',
  templateUrl: './projectcreate.component.html',
  styleUrls: ['./projectcreate.component.css']
})
export class ProjectcreateComponent implements OnInit {
  project: Project | undefined = undefined
  form = this.fb.group({
    name: [""],
    description: [""],
  })
  //nameform = new FormControl('');
  //descriptionform = new FormControl('');

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    public projectService: ProjectService
  ) {
  }

  gotoProjectList() {
    this.router.navigateByUrl("project-list").then()
  }

  ngOnInit(): void {
    //const id = this.activateRoute.snapshot.params['id']
    /*this.projectService.findById(id).subscribe(res => {
      this.project = res;
    })
     */
  }

  save() {
    //console.log(this.form)
    const name = this.form.get('name')!.value
    const description = this.form.get('description')!.value
    this.projectService.createProject(name, description).subscribe(res => console.log(res))
    this.router.navigateByUrl("project-list").then()
  }

}
