import {Component, Input} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";

//todo da mettere dentro components
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, FormsModule, ReactiveFormsModule],
})
export class DatepickerComponent {
  @Input() parentFormControl : FormControl = new FormControl();
  chooseDate = new Date();

}
