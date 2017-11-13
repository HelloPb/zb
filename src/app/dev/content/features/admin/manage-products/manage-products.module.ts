import { ManageProductsRoutingModule } from './manage-products-routing.module';
import { SharedModule } from '../../../../../common/shared/shared.module';
import { NgModule } from '@angular/core';
import { ManageProductsComponent } from './manage-products.component';
import { AdminProductSearchComponent } from './admin-product-search/admin-product-search.component';
import { AdminProductActionsComponent } from './admin-product-actions/admin-product-actions.component';

@NgModule({
  imports: [
    SharedModule,
    ManageProductsRoutingModule
  ],
  declarations: [ManageProductsComponent, AdminProductSearchComponent, AdminProductActionsComponent]
})
export class ManageProductsModule { }
