import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { IncidentDTO } from 'src/models/incidentDTO';

@Injectable({
  providedIn: 'root'
})
export class SendtomapService {
  //sendData$: Observable<any>;
  private sendDataSubject = new BehaviorSubject<any>([]);

  constructor() {}

  getData() {
    return this.sendDataSubject.asObservable();
  }

  sendData(data: Array<IncidentDTO>) {
      this.sendDataSubject.next(data);
  }

}
