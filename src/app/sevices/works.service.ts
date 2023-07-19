import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Work} from "../model/project.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  constructor(private httpClient: HttpClient) {
  }

  public findAll(): Observable<Work[]> {
    return this.httpClient.get<Work[]>(`http://localhost:3000/works`);
  }

  public findById(id: number): Observable<Work> {
    return this.httpClient.get<Work>(`http://localhost:3000/works/${id}`);
  }

  public findWorksByProjectId(projectId: string): Observable<Work[]> {
    return this.httpClient.get<Work[]>(`http://localhost:3000/works?projectId=${projectId}`)
  }

  public createWork(projectId: number, name: string | null, data: string|null, hours: number| null, user: string|null, description: string | null): Observable<Work> {
    return this.httpClient.post<Work>(`http://localhost:3000/works`, {projectId: projectId, name: name, data: data, hours: hours, user: user, description: description});
  }

  public deleteWork(id: number): Observable<Work> {  // id was projectId
    return this.httpClient.delete<Work>(`http://localhost:3000/works/${id}`);
  }

  rewriteWork(id:number, projectId: number | undefined, name: string | null, data: string | null, hours: number | null, user: string | null, description: string | null):Observable<Work> {
    return this.httpClient.put<Work>(`http://localhost:3000/works/${id}`, {
      projectId: projectId,
      id: id,
      name: name,
      user: user,
      hours: hours,
      data: data,
      description: description
    });
  }
}
