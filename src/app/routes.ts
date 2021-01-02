import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

export const routes:Routes =[
    {path:'home',component:ProductsComponent},
    {path:'cart',component:CartComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
   
]