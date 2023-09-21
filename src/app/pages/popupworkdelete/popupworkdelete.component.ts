import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Work} from "../../model/work.model";
import {WorksService} from "../../sevices/works.service";

@Component({
  selector: 'app-popupworkdelete',
  templateUrl: './popupworkdelete.component.html',
  styleUrls: ['./popupworkdelete.component.css']
})
export class PopupworkdeleteComponent {
  work: Work | undefined = undefined

  constructor(
    private worksService: WorksService,
    @Inject(MAT_DIALOG_DATA) data: Work,
    public dialogRef: MatDialogRef<PopupworkdeleteComponent>
  ) {
    this.work = data;
  }
  gotoWorkList() {
    this.dialogRef.close()
  }

  delwork() {
    this.worksService.deleteWork(this.work!.id!).subscribe(res=>{console.log(res)})
    console.log(this)
    this.dialogRef.close()
    window.location.reload()
  }
}
