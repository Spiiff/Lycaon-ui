import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ProjectlistComponent} from "./pages/projectlist/projectlist.component";
import {ProjectmodifyComponent} from "./pages/projectmodify/projectmodify.component";
import {ProjectreadComponent} from "./pages/projectread/projectread.component";
import {ProjectcreateComponent} from "./pages/projectcreate/projectcreate.component";
import {ProjectworklistComponent} from "./pages/projectworklist/projectworklist.component";
import {ProjectworkComponent} from "./pages/projectwork/projectwork.component";

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
    path: 'project-read/:id',
    component: ProjectreadComponent
  },
  {
    path: 'project-modify/:id',
    component: ProjectmodifyComponent
  },
  {
    path: 'project-create',
    component: ProjectcreateComponent
  },
  {
    path: 'project-worklist',
    component: ProjectworklistComponent
  },
  {
    path: 'project-work/:id',
    component: ProjectworkComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
