import { HomeComponent } from './home.component';
import { HomeOverviewComponent } from './home-overview/home-overview.component';
import { HomeSectionsComponent } from './home-sections/home-sections.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
