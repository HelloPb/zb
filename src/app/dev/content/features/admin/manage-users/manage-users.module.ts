import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from './manage-users.component';
import { AdminUserSearchComponent } from './admin-user-search/admin-user-search.component';
import { AdminUserActionsComponent } from './admin-user-actions/admin-user-actions.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ManageUsersComponent, AdminUserSearchComponent, AdminUserActionsComponent]
})
export class ManageUsersModule { }
