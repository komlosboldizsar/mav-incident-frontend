import { Component, OnInit } from "@angular/core";
import { IncidentService } from "../../services/incident.service";
import { IncidentDTO, LocationDTO, CategoryDTO } from "src/models/incidentDTO";
import { SendtomapService } from 'src/app/services/sendtomap.service';

@Component({
  selector: "app-incidents",
  templateUrl: "./incidents.component.html",
  styleUrls: ["./incidents.component.scss"]
})
export class IncidentsComponent implements OnInit {
  incidents: Array<IncidentDTO>;
  incidentsShown: Array<IncidentDTO>;
  place: string;
  category: string;

  constructor(private incidentService: IncidentService, private sendtomapService: SendtomapService) {
    this.incidents = [];
    this.sendtomapService.sendData(this.incidents);
  }

  ngOnInit() {
    this.incidentService.getIncidents().subscribe(
      result => {
        this.incidents = result;
        this.incidentsShown = this.incidents;
      },
      error => {
        alert("Something went wrong, error: ");
        console.log(error);
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

  submit() {
    //alert('Searched for: ');
    console.log();
  }

  onKeyPlace(event: any) {
    const code = event.keyCode ? event.keyCode : event.which;
    if (code === 13) {
      this.place = "";
      this.place = event.target.value;
      console.log(this.place);
      const self = this;
      if (this.place.length === 0) {
        this.incidentsShown = this.incidents;
      } else {
        this.incidentsShown = this.incidents.filter(function(a: IncidentDTO) {
          if (self.place === a.locations.label) {
            return true;
          } else {
            return false;
          }
        });
        if (this.incidentsShown.length <= 0) {
          const loc: LocationDTO = {
            id: null,
            label: ""
          };
          const cat: CategoryDTO = {
            id: null,
            label: ""
          };
          const nothing: IncidentDTO = {
            title: "Nothing found!",
            created: new Date(),
            updated: new Date(),
            processed: new Date(),
            locations: loc,
            categories: cat
          };
          this.incidentsShown.push(nothing);
        }
      }
    }
  }

  onKeyCategory(event: any) {
    const code = event.keyCode ? event.keyCode : event.which;
    if (code === 13) {
      this.category = "";
      this.category = event.target.value;
      console.log(this.category);
      const self = this;
      if (this.category.length === 0) {
        this.incidentsShown = this.incidents;
      } else {
        this.incidentsShown = this.incidents.filter(function(a: IncidentDTO) {
          if (self.category === a.categories.label) {
            return true;
          } else {
            return false;
          }
        });
        if (this.incidentsShown.length <= 0) {
          const loc: LocationDTO = {
            id: null,
            label: ""
          };
          const cat: CategoryDTO = {
            id: null,
            label: ""
          };
          const nothing: IncidentDTO = {
            title: "Nothing found!",
            created: new Date(),
            updated: new Date(),
            processed: new Date(),
            locations: loc,
            categories: cat
          };
          this.incidentsShown.push(nothing);
        }
      }
    }
  }
}
