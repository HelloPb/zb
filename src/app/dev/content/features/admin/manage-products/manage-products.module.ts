import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageProductsComponent } from './manage-products.component';
import { AdminProductSearchComponent } from './admin-product-search/admin-product-search.component';
import { AdminProductActionsComponent } from './admin-product-actions/admin-product-actions.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ManageProductsComponent, AdminProductSearchComponent, AdminProductActionsComponent]
})
export class ManageProductsModule { }
