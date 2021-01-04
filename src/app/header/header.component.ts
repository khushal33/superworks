import { Component, OnInit , Output, EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 
pre:any[];
mul = [];
badge : number = 0;
  constructor() { }

  ngOnInit(): void {
 
  }
  ngAfterContentChecked() {
  this.sum();
  }

  sum(){
    this.pre = JSON.parse(localStorage.getItem("product"));
    if(this.pre != null){
      this.mul = this.pre.map(a => a.quantity);
      this.badge = this.mul.reduce((a,b)=>a+b,0);
  }
}
 
}