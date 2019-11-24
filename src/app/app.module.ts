import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatSliderModule, MatProgressSpinnerModule, MatCardModule, MatSlideToggleModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AboutComponent } from './about/about.component';
import { IncidentModule } from './incident/incident.module';
import { GeocodeService } from './services/geocode.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    IncidentModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAEawAL61bejJOHlCJTf2TtEORJZ_VD-oQ',
      libraries: ['places']
    }),
    AgmDirectionModule
  ],
  providers: [GeocodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
