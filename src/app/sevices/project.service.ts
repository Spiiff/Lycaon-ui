import {Injectable} from '@angular/core';
import {Project} from "../model/project.model";
import {Observable} from "rxjs";
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

  public findById(id: number): Observable<Project> {
    return this.httpClient.get<Project>(`http://localhost:3000/projects/${id}`);
  }

  //todo implementare quando ci sarà backend
  public findByName(name: string): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`http://localhost:3000/projects`, {params: {name: name}});
  }

  public createProject(name: string | null, description: string | null): Observable<Project> {
    return this.httpClient.post<Project>(`http://localhost:3000/projects`, {name: name, description: description});
  }

  public deleteProject(id: number): Observable<Project> {
    return this.httpClient.delete<Project>(`http://localhost:3000/projects/${id}`);
  }

  public rewriteProject(id: number, name: string | null, description: string | null): Observable<Project> {
    return this.httpClient.put<Project>(`http://localhost:3000/projects/${id}`, {
      id: id,
      name: name,
      description: description
    });
  }

}
