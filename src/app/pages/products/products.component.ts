import { Component, OnInit } from '@angular/core';
import {  User } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  users: User[] = []

  constructor(
    private productsService : ProductsService
  ){ }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe(users => {
      this.users = users;
    });
  }

}
