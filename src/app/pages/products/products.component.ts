import { Component, OnInit } from '@angular/core';
import { Games } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products: Games[] = []

  constructor(
    private productsService : ProductsService
  ){ }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe((data) =>
    this.products = data)
  }
}
