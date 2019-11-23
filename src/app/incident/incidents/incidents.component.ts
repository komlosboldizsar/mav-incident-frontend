import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../incident.service';
import { IncidentDTO } from 'src/models/incidentDTO';


@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {
  incidents: Array<IncidentDTO>;

  constructor(private incidentService: IncidentService) {
    this.incidents = [];
  }

  ngOnInit() {
    this.incidentService.getIncidents().subscribe(
      result => {
        this.incidents = result;
      },
      error => {
        alert('Something went wrong, error: ');
        console.log(error);
      }
    );
  }

  sortTitle() {
    console.log(this.incidents);
    // tslint:disable-next-line: only-arrow-functions
    this.incidents.sort(function(a: IncidentDTO, b: IncidentDTO) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
    console.log(this.incidents);
  }

  sortUpdate() {
    // tslint:disable-next-line: only-arrow-functions
    this.incidents.sort(function(a: IncidentDTO, b: IncidentDTO) {
      if (a.updated < b.updated) {
        return -1;
      }
      if (a.updated > b.updated) {
        return 1;
      }
      return 0;
    });
  }

  sortPublish() {
    // tslint:disable-next-line: only-arrow-functions
    this.incidents.sort(function(a: IncidentDTO, b: IncidentDTO) {
      if (a.created < b.created) {
        return -1;
      }
      if (a.created > b.created) {
        return 1;
      }
      return 0;
    });
  }

  sortProcessed() {
    // tslint:disable-next-line: only-arrow-functions
    this.incidents.sort(function(a: IncidentDTO, b: IncidentDTO) {
      if (a.processed < b.processed) {
        return -1;
      }
      if (a.processed > b.processed) {
        return 1;
      }
      return 0;
    });
  }

}
