import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../shaired/product';
import { Location } from '@angular/common';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 data : any[];
 unique:any[];
product:Product;
mul:any[];

total:number = 0;
  constructor(public location:Location) { }

  ngOnInit(): void {
 this.data =  JSON.parse(localStorage.getItem("product"));
    //this.unique = this.data.map(item => item.id).filter((value, index, self) => self.indexOf(value) === index);
    this.cart(this.data);
  
if(this.data != null){
    console.log(this.data);
    this.unique = this.data.filter((data, i, arr) => {
      return arr.indexOf(arr.find(t => t.id === data.id)) === i;
    });}
   
 
    this.mul = this.unique.map(a => a.quantity * a.price)
    this.sum(this.mul);
    
  }

  cart(data){
      for(let i of data){
        for(let j of data){
          if(i.id === j.id){
           i.quantity = i.quantity + 1;
          }
          else{

          }
        }
      }
  }
  sum(data){
    for(let i of data){
      this.total = this.total + i;   
      
     }
  }
  goback(){
    this.location.back();
  }
 
}