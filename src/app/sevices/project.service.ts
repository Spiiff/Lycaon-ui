import {Injectable} from '@angular/core';
import {Project} from "../model/project.model";
import {elementAt, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) {
  }

  public findAll(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`http://localhost:3000/projects`);
  }

  /*
  public findById(id: number) {
    return this.mockList.find(element=>element.id==id);
  }

   */
}
