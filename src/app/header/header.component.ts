import { Component, OnInit , Output, EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 
mul:any[];

badge : number = 0;
  constructor() { }

  ngOnInit(): void {
 
  }
  ngAfterContentChecked() {
    this.mul = JSON.parse(localStorage.getItem("product"));
    
  
    if(this.mul != null){
     this.badge = this.mul.length ;
   }
  
  }
 
}