import { Component, OnInit } from '@angular/core';
import { PRODUCT } from '../current-showingAssets/currentExhibition';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  products = PRODUCT;

}
