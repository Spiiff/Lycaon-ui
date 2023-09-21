import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  currentDate: Date = new Date();
  constructor(
    private router: Router
  ) {

  }

  gotoProjectList() {
    this.router.navigateByUrl("project-list").then()
  }

  gotoProjectWorkList() {
    this.router.navigateByUrl("project-worklist").then()
  }

  gotoBoard(){
    this.router.navigateByUrl("board")
  }
}
