import { AngularMaterialDesignModule } from '../../../common/angular-material-design/angular-material-design.module';
import { RouterModule } from '@angular/router';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialDesignModule,
    RouterModule
  ],
  declarations: [TopMenuComponent],
  exports: [TopMenuComponent]
})
export class MenuModule { }
