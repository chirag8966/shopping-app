import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

// Define the Drone interface
export interface Drone {
  id: number;
  name: string;
  serialNumber: string;
  battery: number;
  status: 'working' | 'under maintenance' | 'out of service';
}

@Injectable({
  providedIn: 'root'
})
export class DronesService {
  private apiUrl = `${environment.apiAddress}/api/drones`;

  constructor(private http: HttpClient) { }

  /**
   * Get all drones from API
   * @returns Observable with array of Drone data
   */
  getDrones(): Observable<Drone[]> {
    return this.http.get<Drone[]>(this.apiUrl);
  }

  /**
   * Get a specific drone by ID
   * @param id Drone ID
   * @returns Observable with Drone data
   */
  getDroneById(id: string): Observable<Drone[]> {
    return this.http.get<Drone[]>(`${this.apiUrl}/${id}`);
  }
}
