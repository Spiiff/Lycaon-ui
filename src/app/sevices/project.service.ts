import {Injectable} from '@angular/core';
import {Project} from "../model/project.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  constructor() {
  }

  public findAll(): Project[] {
    const obj: Project = {
      name: "pippo",
      description: "123456"
    }
    const obj2: Project = {
      name: "paperino",
      description: "234561"
    }
    const obj3: Project = {
      name: "pluto",
      description: "cane"
    }
    const list: Project[] = [obj,obj2,obj3];
    return list;
  }
}
