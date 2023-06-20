import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ProjectlistComponent} from "./pages/projectlist/projectlist.component";
import {ProjectmodifyComponent} from "./pages/projectmodify/projectmodify.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'project-list',
    component: ProjectlistComponent
  },
  {
    path: 'project-modify',
    component: ProjectmodifyComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
