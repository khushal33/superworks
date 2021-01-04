import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { Cart1Component } from './cart1/cart1.component';

export const routes:Routes = [
    {path:'home',component:ProductsComponent},
    {path:'cart',component:Cart1Component},
    {path:'',redirectTo:'/home',pathMatch:'full'}
   
]