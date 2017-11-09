import { CanActivateGuardService } from './features/shared/services/auth/can-activate-guard/can-activate-guard.service';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentAreaComponent } from './content-area.component';

const routes: Routes = [
  {
    path: '',
    component: ContentAreaComponent,
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadChildren: 'app/dev/content/home/home.module#HomeModule'
      },
      {
        path: 'users',
        loadChildren: 'app/dev/content/features/profile-users/users.module#ProfileUsersModule'
      },
      {
        path: 'products',
        loadChildren: 'app/dev/content/features/products/products.module#ProfileProductsModule'
      },
      {
        path: 'mystore',
        loadChildren: 'app/dev/content/features/my-store/my-store.module#MyStoreModule'
      },
      {
        path: 'admin',
        canLoad: [CanActivateGuardService],
        loadChildren: 'app/dev/content/features/admin/admin.module#AdminModule'
      }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
