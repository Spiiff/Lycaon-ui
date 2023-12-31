import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {ProjectlistComponent} from './pages/projectlist/projectlist.component';
import {ProjectmodifyComponent} from './pages/projectmodify/projectmodify.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './pages/navbar/navbar.component';
import {ProjectreadComponent} from './pages/projectread/projectread.component';
import {ProjectcreateComponent} from "./pages/projectcreate/projectcreate.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {PopupalertComponent} from './pages/popupalert/popupalert.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {PopupalertsearchComponent} from './pages/popupalertsearch/popupalertsearch.component';
import {ProjectworklistComponent} from './pages/projectworklist/projectworklist.component';
import {ProjectworkComponent} from './pages/projectwork/projectwork.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import { DatepickerComponent } from './pages/datepicker/datepicker.component';
import { WorkcreateComponent } from './pages/workcreate/workcreate.component';
import {MatIconModule} from "@angular/material/icon";
import { PopupworkdeleteComponent } from './pages/popupworkdelete/popupworkdelete.component';
import { WorkmodifyComponent } from './pages/workmodify/workmodify.component';
import { BoardComponent } from './pages/board/board.component';
import { DragAndDropModule } from '@progress/kendo-angular-utils';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProjectlistComponent,
    ProjectmodifyComponent,
    ProjectcreateComponent,
    ProjectreadComponent,
    PopupalertComponent,
    PopupalertsearchComponent,
    ProjectworklistComponent,
    ProjectworkComponent,
    WorkcreateComponent,
    PopupworkdeleteComponent,
    WorkmodifyComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    DatepickerComponent,
    MatIconModule,
    BoardComponent
  ],
  providers: [],
  exports: [
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
