import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly httpService = inject(HttpClient)
  apiEndpoints = {
    getAllProducts: 'chirag8966/shopping-app/products',
    getAllOffers: 'chirag8966/shopping-app/offers'
  }

  getProducts() {
    const apiUrl = environment.apiAddress + this.apiEndpoints.getAllProducts
    return this.httpService.get<any[]>(apiUrl);
  }

  getOffers() {
    const apiUrl = environment.apiAddress + this.apiEndpoints.getAllOffers;
    return this.httpService.get<any[]>(apiUrl);
  }
}
