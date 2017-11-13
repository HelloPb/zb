import { ProfileUsersResolverService } from './users-resolver.service';
import { ProfileUsersComponent } from './users.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CanDeactivateGuardService } from '../shared/services/auth/can-deactivate-guard/can-deactivate-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ProfileUsersComponent,
    children: [
      {
        path: '', redirectTo: 'addedit'
      },
      {
        path: 'addedit',
        loadChildren: 'app/dev/content/features/profile-users/add-edit-user/add-edit-user.module#AddEditUserModule'
      },
      {
        path: 'search',
        loadChildren: 'app/dev/content/features/profile-users/user-search/user-search.module#UserSearchModule'
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
export class ProfileUsersRoutingModule { }
