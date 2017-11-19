import { CanActivateGuardService } from '../../common/services/guard-activate/can-activate-guard.service';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
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
        loadChildren: 'app/dev/content/features/users/users.module#UsersModule'
      },
      {
        path: 'products',
        loadChildren: 'app/dev/content/features/products/products.module#ProductsModule'
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
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
