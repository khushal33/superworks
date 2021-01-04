import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../shaired/product';
import { Cart } from '../shaired/cart';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products :Product[];
product:Product;

  cart:Cart;
  pre = [];
  epre = [];
   data = [];
  constructor(public productsData:ProductService) { }

  ngOnInit(): void {
   this.products =  this.productsData.getproducts();
 
  
  }
 
  // addToCart(product,pre,index){
  //   if(this.pre != null){
  //     this.pre.push( product);
  //     localStorage.setItem('product',JSON.stringify(this.pre));
  //     product.toggle = true;
  //   }else{
  //       this.epre.push(product);
  //       localStorage.setItem('product',JSON.stringify(this.epre));
  //       product.toggle = true;
  //     }
  // }
  addToCart(product){
    this.pre = JSON.parse(localStorage.getItem("product"));
    if(this.pre != null){
      
      for(let i=0;i<this.pre.length;i++){
      
        if(this.pre[i].id == product.id){
          this.pre[i].quantity = this.pre[i].quantity + 1;
          product.toggle = true;
         return localStorage.setItem('product',JSON.stringify(this.pre));
          
        }
      }
      product.quantity =product.quantity + 1;
      this.pre.push(product);
      localStorage.setItem('product',JSON.stringify(this.pre));
      product.toggle = true;
    } else{
      product.quantity =product.quantity + 1;
      this.epre.push(product);
      localStorage.setItem('product',JSON.stringify(this.epre));
      product.toggle = true;
    }

  }
  
}
