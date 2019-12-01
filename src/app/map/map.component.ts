import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { GeocodeService } from "../services/geocode.service";
import { Location } from "../../models/location";
import { SendtomapService } from "../services/sendtomap.service";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  addresses: string[] = [];
  locations: Location[] = [];
  loading: boolean;

  constructor(
    private geocodeService: GeocodeService,
    private ref: ChangeDetectorRef,
    private sendtomapService: SendtomapService
  ) {
    this.loading = true;
    this.waitForData();
  }

  waitForData() {
    this.sendtomapService.sendData$.subscribe(data => {
      console.log(data);
      data.forEach(element => {
        element.locations.forEach(n => {
          this.addresses.push(n.name);
        });
      });
      console.log(this.addresses);
      this.loading = false;
    });
  }

  ngOnInit() {
    this.showLocation();
    console.log(this.addresses);
  }

  showLocation() {
    this.addressToCoordinates();
  }

  addressToCoordinates() {
    this.loading = true;
    //this.addresses.push('Budapest');
    //this.addresses.push('Cegléd');
    console.log(this.addresses);
    this.addresses.forEach(e => {
      this.geocodeService.waitForMapsToLoad().subscribe(() => {
        this.geocodeService
          .geocodeAddress(e)
          .subscribe((location: Location) => {
            this.locations.push(location);
            console.log(this.locations);
            this.loading = false;
            this.ref.detectChanges();
          });
      });
    });
  }
}
