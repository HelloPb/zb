import { AngularMaterialDesignModule } from '../../common/angular-material-design/angular-material-design.module';
import { MenuModule } from './menu/menu.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { ContentAreaComponent } from './content-area.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialDesignModule,
    MenuModule,
    ContentRoutingModule
  ],
  declarations: [ContentAreaComponent]
})
export class ContentModule { }
