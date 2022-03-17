import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CurrencyConversionPipe } from './pipes/currency-conversion.pipe';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PipesComponent,
    CurrencyConversionPipe,
    TemplateDrivenFormComponent,
    TvShowsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
