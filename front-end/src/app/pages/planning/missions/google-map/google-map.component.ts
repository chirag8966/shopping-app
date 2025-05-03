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
  zoom = 4;
  display!: google.maps.LatLngLiteral;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  mapOptions: google.maps.MapOptions = {
    
  }
  markerPositions = [
    {lat: 18.547020818333873, lng: 73.89813842765923, label: 'Delta Capital Pune'},
    {lat: 52.308018415028265, lng: 4.942449950927969, label: 'Delta Capital Amsterdam'},
    {lat: 12.940376432810805, lng: 77.68910071027489, label: 'Delta Capital Bengaluru'},
    {lat: 25.119554598740848, lng: 55.37647852469811, label: 'Delta Capital Dubai'},
    {lat: 50.10983017180128, lng: 8.661636991398915, label: 'Delta Capital Frankfurt'},
    {lat: 3.1409501584850923, lng: 101.7189846592378, label: 'Delta Capital Malaysia'},
    {lat: 40.760431728308276, lng: -73.97982717375024, label: 'Delta Capital New York'},
    {lat: 1.2780336697228272, lng: 103.85290476976787, label: 'Delta Capital Singapore'},
    {lat: -33.86530473305455, lng: 151.2045112477093, label: 'Delta Capital Sydney'},
    {lat: 52.227275265625444, lng: 21.02627400139099, label: 'Delta Capital Warsaw'},
    {lat: 53.049656603535844, lng: -3.0087269425661702, label: 'Delta Capital Wrexham'},
    {lat: 51.502868876005586, lng: -0.01944631750948433, label: 'Delta Capital London'},
  ];
}