import { Component, inject, Input } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { LayoutService } from '../../../../layout/service/layout.service';

@Component({
  selector: 'google-map-section',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
  imports: [GoogleMap, MapMarker]
})
export class GoogleMapComponent {
  public readonly layoutService = inject(LayoutService)
  center: google.maps.LatLngLiteral = {lat: 18.547020818333873, lng: 73.89813842765923};
  zoom = 3;
  display!: google.maps.LatLngLiteral;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions = [
    {lat: 18.547020818333873, lng: 73.89813842765923, label: 'Delta Capital Pune'},
    {lat: 52.308018415028265, lng: 4.942449950927969, label: 'Delta Capital Amsterdam'}
  ];
}