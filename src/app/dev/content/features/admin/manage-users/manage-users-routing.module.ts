import { CanActivateGuardService } from '../../../../../common/services/guard-activate/can-activate-guard.service';
import { AdminUserActionsComponent } from './admin-user-actions/admin-user-actions.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserSearchComponent } from './admin-user-search/admin-user-search.component';
import { ManageUsersComponent } from './manage-users.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ManageUsersComponent,
    children: [
      {
        path: '', redirectTo: 'search'
      },
      {
        path: 'search',
        component: AdminUserSearchComponent,
        canActivate: [CanActivateGuardService]
      },
      {
        path: 'actions',
        component: AdminUserActionsComponent,
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
export class ManageUsersRoutingModule { }
