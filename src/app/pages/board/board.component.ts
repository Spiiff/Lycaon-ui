import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {DatePipe, NgFor} from "@angular/common";
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, NgFor, CdkDrag, DatePipe]

})
export class BoardComponent {
  todo = ['Work','Make something','Sleep'];
  todos=[];

  inprogress=['Coding'];

  done=['Swim','Run','Make a sandwich'];

  currentDate: Date = new Date();

  constructor(
    private router: Router
  ) {

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  gotoProjectList() {
    this.router.navigateByUrl("project-list").then();
  }

  gotoProjectWorkList() {
    this.router.navigateByUrl("project-worklist").then()
  }

  gotoBoard() {
    this.router.navigateByUrl("board")
  }
}
