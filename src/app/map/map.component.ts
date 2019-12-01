import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { GeocodeService } from "../services/geocode.service";
import { Location } from "../../models/location";
import { SendtomapService } from "../services/sendtomap.service";
import { delay } from "rxjs/operators";

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
    //this.waitForData();
  }

  waitForData() {

  }

  ngOnInit() {
    this.sendtomapService.getData().subscribe(data => {

      data.forEach(element => {
        element.locations.forEach(n => {
          this.addresses.push(n.name);
        });
      });
      this.loading = false;
      this.showLocation();
    });
  }

  showLocation() {
    this.addressToCoordinates();
  }

  addressToCoordinates() {
    this.loading = true;
    //this.addresses.push('Budapest');
    //this.addresses.push('Cegléd');
    this.addresses.forEach(e => {
      this.geocodeService.waitForMapsToLoad().pipe(delay(10)).subscribe(() => {
        this.geocodeService
          .geocodeAddress(e)
          .subscribe((location: Location) => {
            this.locations.push(location);
            this.loading = false;
            //this.ref.detectChanges();
          });
      });
    });
  }
}
