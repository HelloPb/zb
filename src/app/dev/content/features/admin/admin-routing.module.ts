import { CanActivateGuardService } from '../shared/services/auth/can-activate-guard/can-activate-guard.service';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '', redirectTo: 'products'
      },
      {
        path: 'products',
        canLoad: [CanActivateGuardService],
        loadChildren: 'app/dev/content/features/admin/manage-products/manage-products.module#ManageProductsModule'
      },
      {
        path: 'users',
        canLoad: [CanActivateGuardService],
        loadChildren: 'app/dev/content/features/admin/manage-users/manage-users.module#ManageUsersModule'
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
export class AdminRoutingModule { }
