import { AddEditUserComponent } from './add-edit-user.component';
import { UsersResolverService } from '../users-resolver.service';
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
        // resolve: { userProfile: UsersResolverService },
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
