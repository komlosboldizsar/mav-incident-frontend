import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidentRoutingModule } from './incident-routing.module';
import { IncidentsComponent } from './incidents/incidents.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatSliderModule, MatProgressSpinnerModule, MatCardModule, MatFormFieldModule, MatInputModule  } from '@angular/material';
import { DateFormatter } from './DateFormatter.pipe';


@NgModule({
  declarations: [IncidentsComponent, DateFormatter],
  imports: [
    CommonModule,
    IncidentRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [IncidentsComponent]
})
export class IncidentModule { }
