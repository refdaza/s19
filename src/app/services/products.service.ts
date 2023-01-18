import { Injectable } from '@angular/core';
import { Games } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiURI: string = "https://www.freetogame.com/api/games"
  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<Games[]>(this.apiURI)
  }

  getProductById(id: string){
    return this.http.get<Games>(`${this.apiURI}/${id}`)
  }
}
