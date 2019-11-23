import { Component, OnInit, NgZone, ViewChild, ElementRef } from "@angular/core";
import { MapsAPILoader } from "@agm/core/services/maps-api-loader/maps-api-loader";
import { AgmMap } from "@agm/core";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{
  title = "AGM";

  lat: number = 47.472907;
  lng: number = 19.053035;
  zoom = 8;
  agmMap: any;
  bounds: google.maps.LatLngBounds;
  searchBox: any;
  markers: google.maps.Marker[];
  icon: any;

        @ViewChild("search", {static: false}) public searchElement: ElementRef;
         places: any;

  @ViewChild("agmMap", {static: false}) set content(map: AgmMap) {
    if (map) {
      map.mapReady.subscribe(map => {
        this.agmMap = map;
      });
    }
  }

  constructor(private mapsAPILoader: MapsAPILoader, private NgZone: NgZone) {}

  ngOnInit() {

    this.mapsAPILoader.load().then(() => {
      console.log(this.agmMap);
      this.places = this.searchElement;
      this.bounds = new google.maps.LatLngBounds();
      this.searchBox = new google.maps.places.SearchBox(
        this.searchElement.nativeElement
      );
      // this.agmMap.ControlPosition[google.maps.ControlPosition.TOP_LEFT].push(
      //   this.searchElement.nativeElement
      // );
      // this.agmMap.addListener("bounds_changed", () => {
      //   this.searchBox.setBounds(this.agmMap.getBounds());
      // });
      this.searchBox.addListener("places_changed", () => {
        var places = this.searchBox.getPlaces();

        if (places.length === 0) {
          return;
        }

        // Clear out the old markers.
        this.markers.forEach(marker => {
          marker.setMap(null);
        });
        this.markers = [];
        this.bounds = new google.maps.LatLngBounds();
        places.forEach(place => {
          if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
          }
          this.icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          };
          this.markers.push(
            new google.maps.Marker({
              map: this.agmMap,
              icon: this.icon,
              title: place.name,
              position: place.geometry.location
            })
          );
          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            this.bounds.union(place.geometry.viewport);
          } else {
            this.bounds.extend(place.geometry.location);
          }
        });
        this.agmMap.fitBounds(this.bounds);
      });
    });
  }
}
