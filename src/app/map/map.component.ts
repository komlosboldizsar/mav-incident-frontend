import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  title = 'Google Maps';
  lat = 47.472907;
  lng = 19.053035;

  constructor() { }

  ngOnInit() {
  }

}
