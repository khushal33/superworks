import { Injectable } from '@angular/core';

import { Product} from '../shaired/product';
import { PRODUCTS } from '../shaired/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getproducts(): Product[] {
    return PRODUCTS;
  }
  
}
