import { Component } from '@angular/core';
import { GoogleMapComponent } from './google-map/google-map.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-missions',
  standalone: true,
  imports: [
    GoogleMapComponent, 
    CommonModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
    ButtonModule
  ],
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss']
})
export class MissionsComponent {
  center = { lat: 18.566613521086374, lng: 73.77209687152218 };
  markers = [
    { lat: 18.566613521086374, lng: 73.77209687152218 }
  ];
}
