import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers:[ProductService]
})
export class ProductAddForms1Component implements OnInit {

model: product = new product();

  constructor(private productService:ProductService,
              private alertifyService:AlertifyService) { }

  ngOnInit(): void {
  }

  add(form:NgForm){
    this.productService.addProduct(this.model).subscribe(data=>{
      this.alertifyService.success(data.name+" added.")
    });
    
  }
}
