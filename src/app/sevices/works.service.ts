import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Work} from "../model/work.model";
import {HttpClient} from "@angular/common/http";
import {enviroment} from "../../enviroments/enviroments";

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  baseurl = enviroment.api.toString();

  constructor(private httpClient: HttpClient) {
  }

  public findAll(): Observable<Work[]> {
    return this.httpClient.get<Work[]>(`${this.baseurl}/works`);
  }

  public findById(id: number): Observable<Work> {
    return this.httpClient.get<Work>(`${this.baseurl}/works/${id}`);
  }

  public findWorksByProjectId(projectId: string): Observable<Work[]> {
    return this.httpClient.get<Work[]>(`${this.baseurl}/works?projectId=${projectId}`)
  }

  public createWork(work: Work): Observable<Work> {
    return this.httpClient.post<Work>(`${this.baseurl}/works`, work);
  }

  public deleteWork(id: number): Observable<Work> {  // id was projectId
    return this.httpClient.delete<Work>(`${this.baseurl}/works/${id}`);
  }

  rewriteWork(work: Work):Observable<Work> {
    return this.httpClient.put<Work>(`${this.baseurl}/works/${work.id}`,work);
  }
}
