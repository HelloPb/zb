import { AddEditUserRoutingModule } from './add-edit-user-routing.module';
import { AddEditUserComponent } from './add-edit-user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditUserSettingComponent } from './add-edit-user-setting/add-edit-user-setting.component';
import { AddEditUserSettingDetailComponent } from './add-edit-user-setting-detail/add-edit-user-setting-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AddEditUserRoutingModule
  ],
  declarations: [AddEditUserComponent, AddEditUserSettingComponent, AddEditUserSettingDetailComponent]
})
export class AddEditUserModule { }
