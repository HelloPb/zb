import { ManageUsersRoutingModule } from './manage-users-routing.module';
import { SharedModule } from '../../../../../common/shared/shared.module';
import { NgModule } from '@angular/core';
import { ManageUsersComponent } from './manage-users.component';
import { AdminUserSearchComponent } from './admin-user-search/admin-user-search.component';
import { AdminUserActionsComponent } from './admin-user-actions/admin-user-actions.component';

@NgModule({
  imports: [
    SharedModule,
    ManageUsersRoutingModule
  ],
  declarations: [ManageUsersComponent, AdminUserSearchComponent, AdminUserActionsComponent]
})
export class ManageUsersModule { }
