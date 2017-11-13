import { AdminProductActionsComponent } from './admin-product-actions/admin-product-actions.component';
import { CanActivateGuardService } from '../../shared/services/auth/can-activate-guard/can-activate-guard.service';
import { AdminProductSearchComponent } from './admin-product-search/admin-product-search.component';
import { ManageProductsComponent } from './manage-products.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ManageProductsComponent,
    children: [
      {
        path: '', redirectTo: 'search'
      },
      {
        path: 'search',
        component: AdminProductSearchComponent,
        canActivate: [CanActivateGuardService]
      },
      {
        path: 'actions',
        component: AdminProductActionsComponent,
        canActivate: [CanActivateGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ManageProductsRoutingModule { }
