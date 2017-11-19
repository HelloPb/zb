import { SharedModule } from '../../../common/modules/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeOverviewComponent } from './home-overview/home-overview.component';
import { HomeSectionsComponent } from './home-sections/home-sections.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, HomeOverviewComponent, HomeSectionsComponent]
})
export class HomeModule { }
