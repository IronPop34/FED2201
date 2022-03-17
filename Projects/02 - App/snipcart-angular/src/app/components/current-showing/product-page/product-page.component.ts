import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../core/product';
import { SelectedProductAttributes } from '../core/selectedProductAttributes';
import { Size } from '../core/size';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class CurrentShowingProductPageComponent implements OnInit {
  imageUrl: string = '';
  selectedAttributes: SelectedProductAttributes = {
    size: undefined,
  };
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService
      .getProduct(id)
      .subscribe((product) => (this.product = product)); // TODO refactor to getter
  }

  get sizeOptions(): string {
    return this.product?.sizes?.join('|') ?? 'yolii'; //TODO change default to ""
  }
 

  ngOnInit() {
    this.getProduct();
    this.setSelectedAttributes(
      this.product?.sizes[0]
    );
    
  }

  public updateSelectedProductAttributes(size: Size | undefined) {
    this.setSelectedAttributes(size ?? Size.SMALL);    
  }

  private setSelectedAttributes(
    size: Size | undefined
  ) {
    this.selectedAttributes = {
      size: size,
    };
  }
}