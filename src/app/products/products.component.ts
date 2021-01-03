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
  pre:any[];
   data = [];
  constructor(public productsData:ProductService) { }

  ngOnInit(): void {
   this.products =  this.productsData.getproducts();
   this.pre = JSON.parse(localStorage.getItem("product"));
  }
  
  addToCart(product,pre,index){
    this.pre.push( product);
    localStorage.setItem('product',JSON.stringify(this.pre));
    
  }
  
}
