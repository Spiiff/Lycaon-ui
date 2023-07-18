import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-workmodify',
  templateUrl: './workmodify.component.html',
  styleUrls: ['./workmodify.component.css']
})
export class WorkmodifyComponent {

  form = this.fb.group({
    name: [""],
    data: [""],
    hours: [""],
    user: [""],
    description: [""],
  })

  constructor(
    private fb: FormBuilder
  ) {
  }
}
