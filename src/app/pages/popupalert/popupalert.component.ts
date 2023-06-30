import {Component, Inject} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Project} from "../../model/project.model";
import {ProjectService} from "../../sevices/project.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-popupalert',
  templateUrl: './popupalert.component.html',
  styleUrls: ['./popupalert.component.css']
})
export class PopupalertComponent{
  project: Project | undefined = undefined

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private projectService: ProjectService,
    @Inject(MAT_DIALOG_DATA) data: Project,
    public dialogRef: MatDialogRef<PopupalertComponent>
  ) {
    this.project = data;
  }

  gotoProjectList() {
    this.dialogRef.close()
  }

  del() {
    this.projectService.deleteProject(this.project!.id).subscribe(res=>{console.log(res)})
    console.log(this)
    this.dialogRef.close()
    window.location.reload()
  }
}
