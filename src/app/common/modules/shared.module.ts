import { AngularMaterialDesignModule } from './angular-material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
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
