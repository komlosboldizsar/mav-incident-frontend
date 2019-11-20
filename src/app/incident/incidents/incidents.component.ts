import { Component, OnInit } from "@angular/core";
import { IncidentService } from "../incident.service";
import { IncidentDTO } from "src/models/incidentDTO";

@Component({
  selector: "app-incidents",
  templateUrl: "./incidents.component.html",
  styleUrls: ["./incidents.component.scss"]
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
        alert("Something went wrong");
      }
    );
  }
}
