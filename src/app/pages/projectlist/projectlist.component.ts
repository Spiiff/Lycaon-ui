import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent {
  constructor(private router: Router) {

  }
  gotoProjectModify(){
    this.router.navigateByUrl("project-modify")
  }

}
