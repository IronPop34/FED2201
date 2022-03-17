import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CurrentShowingHomepageComponent } from '../current-showing/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CurrentShowingProductsComponent } from './products/products.component';
import { CurrentShowingProductComponent } from './product/product.component';
import { CurrentShowingProductPageComponent } from './product-page/product-page.component';
import { CurrentShowingNavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    CurrentShowingHomepageComponent,
    CurrentShowingProductsComponent,
    CurrentShowingProductComponent,
    CurrentShowingProductPageComponent,
    CurrentShowingNavbarComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatSelectModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule { }