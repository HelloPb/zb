import { AddEditUserComponent } from './add-edit-user.component';
import { CanDeactivateGuardService } from '../../shared/services/auth/can-deactivate-guard/can-deactivate-guard.service';
import { ProfileUsersResolverService } from '../users-resolver.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AddEditUserComponent,
        // canDeactivate: [CanDeactivateGuardService]
      },
      {
        path: ':id',
        // resolve: { userProfile: ProfileUsersResolverService },
        // canDeactivate: [CanDeactivateGuardService],
        component: AddEditUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AddEditUserRoutingModule { }
