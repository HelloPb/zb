import { SharedModule } from '../../../common/modules/shared.module';
import { RouterModule } from '@angular/router';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './left-menu/left-menu.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [TopMenuComponent, LeftMenuComponent],
  exports: [TopMenuComponent, LeftMenuComponent]
})
export class MenuModule { }
