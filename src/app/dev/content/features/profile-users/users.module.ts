import { SharedModule } from '../../../../common/modules/shared.module';
import { UserSearchModule } from './user-search/user-search.module';
import { AddEditUserModule } from './add-edit-user/add-edit-user.module';
import { ProfileUsersRoutingModule } from './users-routing.module';
import { ProfileUsersComponent } from './users.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    SharedModule,
    UserSearchModule,
    AddEditUserModule,
    ProfileUsersRoutingModule
  ],
  declarations: [ProfileUsersComponent]
})
export class ProfileUsersModule { }
