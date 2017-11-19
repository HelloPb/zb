import { SharedModule } from '../../../../common/modules/shared.module';
import { UserSearchModule } from './user-search/user-search.module';
import { AddEditUserModule } from './add-edit-user/add-edit-user.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    SharedModule,
    UserSearchModule,
    AddEditUserModule,
    UsersRoutingModule
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }
