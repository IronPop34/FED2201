import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { CurrentShowingComponent } from './components/current-showing/current-showing.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms';
import { ProductsComponent } from './components/current-showing/products/products.component';
import { ProductComponent } from './components/current-showing/product/product.component';
import { ProductPageComponent } from './components/current-showing/product-page/product-page.component';
import { NavbarComponent } from './components/current-showing/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    CurrentShowingComponent,
    PortfolioComponent,
    ContactComponent,
    ProductsComponent,
    ProductComponent,
    ProductPageComponent,
    NavbarComponent,       
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,         
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
