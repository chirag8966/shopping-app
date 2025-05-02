import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

// Define the StatWidget interface here to avoid circular imports
export interface StatWidget {
  name: string;
  count: string | number;
  icon: string;
  color: string;
  highlight: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  // Hardcode base URL for now, will be dynamic in production
  private apiUrl = `${environment.apiAddress}/api/stats`;

  constructor(private http: HttpClient) { }

  /**
   * Get stats data from API
   * @returns Observable with array of StatWidget data
   */
  getStats(): Observable<StatWidget[]> {
    return this.http.get<StatWidget[]>(this.apiUrl);
  }
}
