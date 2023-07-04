import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-popupalertsearch',
  templateUrl: './popupalertsearch.component.html',
  styleUrls: ['./popupalertsearch.component.css']
})
export class PopupalertsearchComponent {

  constructor(
    public dialogRef: MatDialogRef<PopupalertsearchComponent>
  ) {

  }

  gotoProjectList() {
    this.dialogRef.close()
  }
}
