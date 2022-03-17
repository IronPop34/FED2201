import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';
import { MatCommonModule } from '@angular/material/core';

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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    CurrentShowingComponent,
    PortfolioComponent,
    ContactComponent,
    CurrentShowingComponent,     
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatCommonModule         
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
