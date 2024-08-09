import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Add this line


const baseUrl = 'http://localhost:3000/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { } // Update the constructor parameter type

  getProducts() {
    return fetch(baseUrl)
      .then(response => response.json());
  }

  getProduct(id: any) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  deleteProduct(id: any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  updateProduct(id: any, data: any) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  createProduct(data: any) {
    return this.http.post(baseUrl, data);
  }
}
