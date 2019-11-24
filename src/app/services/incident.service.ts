import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IncidentDTO } from 'src/models/incidentDTO';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  id: number;

  constructor(private http: HttpClient) {}

  public getIncidents(): Observable<Array<IncidentDTO>> {
    return this.http.get<Array<IncidentDTO>>(`${environment.baseBackendUrl}/incident`);
  }

  public getIncidentsString(): Observable<string> {
    return this.http.get<string>(`${environment.baseBackendUrl}/incident`);
  }

  public postUpdateIncident(): Observable<Array<IncidentDTO>> {
    this.http.post(`${environment.baseBackendUrl}/incident/${this.id}/refresh`, ``);
    console.log("lol");
    return this.http.get<Array<IncidentDTO>>(`${environment.baseBackendUrl}/incident`);
  }
}
