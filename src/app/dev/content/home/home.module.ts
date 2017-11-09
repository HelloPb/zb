import { HomeRoutingModule } from './home-routing.module';
import { AngularMaterialDesignModule } from '../../../common/angular-material-design/angular-material-design.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeOverviewComponent } from './home-overview/home-overview.component';
import { HomeSectionsComponent } from './home-sections/home-sections.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialDesignModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, HomeOverviewComponent, HomeSectionsComponent]
})
export class HomeModule { }
