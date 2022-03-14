import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { PipesComponent } from './components/pipes/pipes.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch:'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'pipes', component: PipesComponent },
  {path: 'template-form', component: TemplateDrivenFormComponent },
  {path: 'tv-shows', component: TvShowsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
