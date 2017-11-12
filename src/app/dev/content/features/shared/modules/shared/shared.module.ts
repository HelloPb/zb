import { ReactiveFormsModule } from '@angular/forms';
import {
    AngularMaterialDesignModule,
} from '../../../../../../common/angular-material-design/angular-material-design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialDesignModule
  ],
  declarations: []
})
export class SharedModule { }
