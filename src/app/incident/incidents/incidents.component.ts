import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../../services/incident.service';
import { IncidentDTO, LocationDTO, CategoryDTO } from 'src/models/incidentDTO';
import { SendtomapService } from 'src/app/services/sendtomap.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {
  incidents: Array<IncidentDTO>;
  incidentsShown: Array<IncidentDTO>;
  place: string;
  category: string;
  from: Date;
  until: Date;

  constructor(private incidentService: IncidentService, private sendtomapService: SendtomapService) {
    this.incidents = [];
  }

  ngOnInit() {
    this.incidentService.getIncidents().subscribe(
      result => {
        this.incidents = result;
        this.incidentsShown = this.incidents;
        this.sendtomapService.sendData(this.incidentsShown);
      },
      error => {
        alert('Something went wrong, error: ');
      }
    );
  }

  sortTitle() {
    // tslint:disable-next-line: only-arrow-functions
    this.incidentsShown.sort(function(a: IncidentDTO, b: IncidentDTO) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }

  sortUpdate() {
    // tslint:disable-next-line: only-arrow-functions
    this.incidentsShown.sort(function(a: IncidentDTO, b: IncidentDTO) {
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
    this.incidentsShown.sort(function(a: IncidentDTO, b: IncidentDTO) {
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
    this.incidentsShown.sort(function(a: IncidentDTO, b: IncidentDTO) {
      if (a.processed < b.processed) {
        return -1;
      }
      if (a.processed > b.processed) {
        return 1;
      }
      return 0;
    });
  }

  updateIncident(incident: IncidentDTO) {
    this.incidentService.postUpdateIncident(incident.id).subscribe(
      result => {
        this.incidents[this.incidents.findIndex(element => element.id === result.id)] = result;
        this.incidentsShown = this.incidents;
      },
      error => {
        alert('Something went wrong, error: ');
      });
  }

  onKeyPlace(event: any) {
    const code = event.keyCode ? event.keyCode : event.which;
    if (code === 13) {
      this.place = '';
      this.place = event.target.value;
      const self = this;
      if (this.place.length === 0) {
        this.incidentsShown = this.incidents;
      } else {
        // tslint:disable-next-line: only-arrow-functions
        this.incidentsShown = this.incidents.filter(function(a: IncidentDTO) {
          // tslint:disable-next-line: prefer-const
          let labels: string[];
          labels = [];
          a.locations.forEach(e => labels.push(e.name));
          if (labels.includes(self.place)) {
            return true;
          } else {
            return false;
          }
        });
        if (this.incidentsShown.length <= 0) {
          const loc: LocationDTO = {
            id: null,
            name: ''
          };
          const cat: CategoryDTO = {
            id: null,
            name: ''
          };
          const nothing: IncidentDTO = {
            id: 0,
            title: 'Nothing found!',
            created: new Date(),
            updated: new Date(),
            processed: new Date(),
            locations: loc[0],
            categories: cat[0]
          };
          this.incidentsShown.push(nothing);
        }
      }
    }
  }

  onKeyCategory(event: any) {
    const code = event.keyCode ? event.keyCode : event.which;
    if (code === 13) {
      this.category = '';
      this.category = event.target.value;
      const self = this;
      if (this.category.length === 0) {
        this.incidentsShown = this.incidents;
      } else {
        // tslint:disable-next-line: only-arrow-functions
        this.incidentsShown = this.incidents.filter(function(a: IncidentDTO) {
          // tslint:disable-next-line: prefer-const
          let labels: string[];
          labels = [];
          a.categories.forEach(e => labels.push(e.name));
          if (labels.includes(self.category)) {
            return true;
          } else {
            return false;
          }
        });
        if (this.incidentsShown.length <= 0) {
          const loc: LocationDTO = {
            id: null,
            name: ''
          };
          const cat: CategoryDTO = {
            id: null,
            name: ''
          };
          const nothing: IncidentDTO = {
            id: 0,
            title: 'Nothing found!',
            created: new Date(),
            updated: new Date(),
            processed: new Date(),
            locations: loc[0],
            categories: cat[0]
          };
          this.incidentsShown.push(nothing);
        }
      }
    }
  }

  onKeyFrom(event: any) {
      this.from = event.target.value;
      const self = this;
      if (!this.from) {
        this.incidentsShown = this.incidents;
      } else {
        // tslint:disable-next-line: only-arrow-functions
        this.incidentsShown = this.incidentsShown.filter(function(a: IncidentDTO) {
          // tslint:disable-next-line: prefer-const
          if (a.updated.valueOf() >= new Date(self.from).valueOf()/1000) {
            return true;
          } else {
            return false;
          }
        });
        if (this.incidentsShown.length <= 0) {
          const loc: LocationDTO = {
            id: null,
            name: ''
          };
          const cat: CategoryDTO = {
            id: null,
            name: ''
          };
          const nothing: IncidentDTO = {
            id: 0,
            title: 'Nothing found!',
            created: new Date(),
            updated: new Date(),
            processed: new Date(),
            locations: loc[0],
            categories: cat[0]
          };
          this.incidentsShown.push(nothing);
        }
      }
  }

  onKeyUntil(event: any) {
      this.until = event.target.value;
      const self = this;
      if (!this.until) {
        this.incidentsShown = this.incidents;
      } else {
        // tslint:disable-next-line: only-arrow-functions
        this.incidentsShown = this.incidentsShown.filter(function(a: IncidentDTO) {
          // tslint:disable-next-line: prefer-const
          if (a.updated.valueOf() <= new Date(self.until).valueOf()/1000+86399) {
            return true;
          } else {
            return false;
          }
        });
        if (this.incidentsShown.length <= 0) {
          const loc: LocationDTO = {
            id: null,
            name: ''
          };
          const cat: CategoryDTO = {
            id: null,
            name: ''
          };
          const nothing: IncidentDTO = {
            id: 0,
            title: 'Nothing found!',
            created: new Date(),
            updated: new Date(),
            processed: new Date(),
            locations: loc[0],
            categories: cat[0]
          };
          this.incidentsShown.push(nothing);
        }
      }
  }
}
