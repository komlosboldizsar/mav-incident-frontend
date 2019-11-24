import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GeocodeService } from '../services/geocode.service';
import { Location } from '../../models/location';
import { SendtomapService } from '../services/sendtomap.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{
  addresses: string[];
  locations: Location[];
  loading: boolean;

  constructor(
    private geocodeService: GeocodeService,
    private ref: ChangeDetectorRef,
    private sendtomapService: SendtomapService
  ) {
    this.locations = [];
    this.addresses = [];
    this.sendtomapService.sendData$.subscribe((data) => {
      data.forEach(element => {
        this.locations.push(element.locations.label);
      });
    });
  }


  ngOnInit() {
    this.showLocation();
  }

  showLocation() {
    this.addressToCoordinates();
  }

  addressToCoordinates() {
    this.loading = true;
    this.addresses.push('Budapest');
    this.addresses.push('Cegléd');
    console.log(this.addresses);
    this.addresses.forEach(e => {
      this.geocodeService.waitForMapsToLoad().subscribe( () => {
        this.geocodeService.geocodeAddress(e).subscribe((location: Location) => {
          this.locations.push(location);
          this.loading = false;
          this.ref.detectChanges();
        });
      });
    });
  }

}
