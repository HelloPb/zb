import { UsersResolverService } from './users-resolver.service';
import { UsersComponent } from './users.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '', redirectTo: 'addedit'
      },
      {
        path: 'addedit',
        loadChildren: 'app/dev/content/features/users/add-edit-user/add-edit-user.module#AddEditUserModule'
      },
      {
        path: 'search',
        loadChildren: 'app/dev/content/features/users/user-search/user-search.module#UserSearchModule'
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
export class UsersRoutingModule { }
