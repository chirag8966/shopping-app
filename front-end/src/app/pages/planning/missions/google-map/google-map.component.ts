import { Component, Input } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'google-map-section',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
  imports: [GoogleMapsModule]
})
export class GoogleMapComponent {
  @Input() center: google.maps.LatLngLiteral = { lat: 18.566613521086374, lng: 73.77209687152218 };
  @Input() markers: google.maps.LatLngLiteral[] = [
    { lat: 18.566613521086374, lng: 73.77209687152218 }
  ];
  zoom: number = 16;
  mapOptions: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    scaleControl: true,
    disableDoubleClickZoom: false,
    maxZoom: 18,
    minZoom: 1
  };
}