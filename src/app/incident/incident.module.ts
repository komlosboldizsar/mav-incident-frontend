import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidentRoutingModule } from './incident-routing.module';
import { IncidentsComponent } from './incidents/incidents.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [IncidentsComponent],
  imports: [
    CommonModule,
    IncidentRoutingModule,
    HttpClientModule
  ]
})
export class IncidentModule { }
