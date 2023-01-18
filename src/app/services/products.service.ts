import { Injectable } from '@angular/core';
import {  User } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
  private apiURI: string = "https://fakestoreapi.com/products"
  constructor(
    private http: HttpClient
  ) {

  }
  getGames() {
    return this.http.get(this.corsAnywhereUrl + 'https://fakestoreapi.com/products');
  }
  getAllProducts(){
    return this.http.get<User[]>(this.apiURI)
  }

  getProductById(id: string){
    return this.http.get<User>(`${this.apiURI}/${id}`)
  }
}
