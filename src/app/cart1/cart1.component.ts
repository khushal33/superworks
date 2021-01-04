import { Component, OnInit } from '@angular/core';
import { Product } from '../shaired/product';
import { Location } from '@angular/common';
@Component({
  selector: 'app-cart1',
  templateUrl: './cart1.component.html',
  styleUrls: ['./cart1.component.css']
})
export class Cart1Component implements OnInit {
  data : any[];
  pre = [];
  mul  = [];
  product:Product;
  total:number = 0;
    constructor(public location:Location) { }

    ngOnInit(): void {
      this.data =  JSON.parse(localStorage.getItem("product"));  
      this.sum();
    }

  


    goback(){
      this.location.back();
    }
    sum(){
      this.pre = JSON.parse(localStorage.getItem("product"));
      if(this.pre != null){
      this.mul = this.pre.map(a => a.quantity * a.price);
      this.total = this.mul.reduce((a,b)=>a+b,0);
      }
    }

  removeItem(product){
    this.pre = JSON.parse(localStorage.getItem("product"));
    if(this.pre != null){
    for(let i=0;i<this.pre.length;i++){
      if(this.pre[i].id == product.id){
        if(this.pre[i].quantity > 1){
          this.pre[i].quantity = this.pre[i].quantity - 1;
        }
       else{
         this.pre.splice(i,1);
       }
        localStorage.setItem('product',JSON.stringify(this.pre));
        return this.ngOnInit();
      }
    }
  }

    }

  addItem(product){
    this.pre = JSON.parse(localStorage.getItem("product"));
    if(this.pre != null){
    for(let i=0;i<this.pre.length;i++){
      if(this.pre[i].id == product.id){
        this.pre[i].quantity = this.pre[i].quantity + 1;
        localStorage.setItem('product',JSON.stringify(this.pre));
        return this.ngOnInit();
      }
    }
  }
}

}
