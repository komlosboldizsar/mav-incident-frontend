import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IncidentDTO } from 'src/models/incidentDTO';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(private http: HttpClient) {}

  public getIncidents(): Observable<Array<IncidentDTO>> {
    return this.http.get<Array<IncidentDTO>>(`${environment.baseBackendUrl}/incident`);
  }
}
