import { Component, OnInit } from '@angular/core';
import { PRODUCT } from '../../../../assets/current-showing/currentExhibition';
import { Product } from '../core/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class CurrentShowingProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  getProducts(): void {
    this.products = this.productService.getProducts();
  }

  ngOnInit() {
    this.getProducts();
  }
}