import {Injectable} from '@angular/core';
import {Project} from "../model/project.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {enviroment} from "../../enviroments/enviroments";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseurl = enviroment.api.toString();
  constructor(private httpClient: HttpClient) {
  }

  public findAll(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${this.baseurl}/projects`);
  }

  public findById(id: number): Observable<Project> {
    return this.httpClient.get<Project>(`${this.baseurl}/projects/${id}`);
  }

  //todo implementare quando ci sarà back-end
  public findByName(name: string): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${this.baseurl}/projects`, {params: {name: name}});
  }

  public createProject(name: string | null, description: string | null): Observable<Project> {
    return this.httpClient.post<Project>(`${this.baseurl}/projects`, {name: name, description: description});
  }

  public deleteProject(id: number): Observable<Project> {
    return this.httpClient.delete<Project>(`${this.baseurl}/projects/${id}`);
  }

  public rewriteProject(id: number, name: string | null, description: string | null): Observable<Project> {
    return this.httpClient.put<Project>(`${this.baseurl}/projects/${id}`, {
      id: id,
      name: name,
      description: description
    });
  }

}

