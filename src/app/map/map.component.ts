import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{
  location: Location
  origin: any;
  destination: any;
  travelMode: string = 'TRANSIT';

  ngOnInit() {
      this.location = {
          latitude: 47.472907,
          longitude: 19.053035,
          zoom: 7,
          markers: [
              {
                  lat: 47.472907,
                  lng: 19.053035
              }
          ]
      };
      this.origin = {
        lat: 47.472907,
        lng: 19.053035
      };
      this.destination = {
        lat: 47.1704244,
        lng: 19.7979618
      };
  }

  addMarker(lat: number, lng: number) {
      this.location.markers.push({
          lat,
          lng
      })
  }
}

interface Marker {
    lat: number;
    lng: number;
}

interface Location {
    latitude: number;
    longitude: number;
    zoom: ?number;
    markers: Array<Marker>;
}
