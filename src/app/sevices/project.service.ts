import {Injectable} from '@angular/core';
import {Project} from "../model/project.model";
import {elementAt} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  mockList: Project[] = [{
    id: 1,
    name: "Project 1",
    description: "uno"
  },
    {
      id: 2,
      name: "Project 2",
      description: "due"
    },
    {
      id: 3,
      name: "Project 3",
      description: "tre"
    }]

  constructor() {
  }

  public findAll(): Project[] {
    return this.mockList;
  }

  public findById(id: number) {
    return this.mockList.find(element=>element.id==id);
  }
}
