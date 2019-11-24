import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IncidentDTO } from 'src/models/incidentDTO';

@Injectable({
  providedIn: 'root'
})
export class SendtomapService {
  sendData$: Observable<any>;
  private sendDataSubject = new Subject<any>();

  constructor() {
      this.sendData$ = this.sendDataSubject.asObservable();
  }

  sendData(data: Array<IncidentDTO>) {
      console.log(data);
      this.sendDataSubject.next(data);
  }

}
