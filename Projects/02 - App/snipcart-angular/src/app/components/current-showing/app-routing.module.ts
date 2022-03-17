import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentShowingHomepageComponent } from '../current-showing/homepage/homepage.component';
import { CurrentShowingProductPageComponent } from '../current-showing/product-page/product-page.component';

const routes: Routes = [
  {path: "product/:id", component: CurrentShowingProductPageComponent},
  {path: "**", component: CurrentShowingHomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }