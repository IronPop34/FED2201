import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCT } from '../../../assets/portfolio/portfolio';
import { Product } from './core/product';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCT;
  }

  getProduct(id: number): Observable<Product | undefined> {
   const product = PRODUCT.find(product => product.id === id);
   return of(product);
  }
}