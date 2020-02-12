import { Component, OnInit } from '@angular/core';
import { product } from './product';
import {AlertifyService} from '../services/alertify.service'
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService:AlertifyService, 
              private productService:ProductService,
              private activatedRoute:ActivatedRoute) { }
title = 'Product List'
filterText=''
products: product[];

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params['categoryId']).subscribe(data=>{
      this.products = data;
    })
    });

    
  }

  addToCart(p:product){
    this.alertifyService.success(p.name+" added.");
  // alert(p.name+" sepete eklendi.");
  }

}
