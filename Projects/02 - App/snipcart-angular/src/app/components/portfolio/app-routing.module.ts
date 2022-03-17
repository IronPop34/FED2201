import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioHomepageComponent } from '../portfolio/homepage/homepage.component';
import { PortfolioProductPageComponent } from '../portfolio/product-page/product-page.component';

const routes: Routes = [
  {path: "product/:id", component: PortfolioProductPageComponent},
  {path: "**", component: PortfolioHomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }